import { NextRequest, NextResponse } from 'next/server';

// ============================================================
// Novora research gate — per-client unique-link access
// ============================================================
// Scope: /research/superform only (for now).
// Each prospect gets a unique ?key=<value>. Once validated, a
// signed cookie unlocks the page for 30 days on the same browser.
// ============================================================

// Add new clients here. Keys are arbitrary strings; pick something
// that's hard to guess but easy to track in logs.
const ACCESS_KEYS: Record<string, string> = {
  // path : key
  '/research/superform': process.env.SUPERFORM_KEYS || '',
};

// Parse comma-separated key list from env
function getValidKeys(path: string): string[] {
  const raw = ACCESS_KEYS[path] || '';
  return raw.split(',').map((k) => k.trim()).filter(Boolean);
}

const COOKIE_NAME = 'novora_access';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Only gate paths we've explicitly configured
  if (!(pathname in ACCESS_KEYS)) {
    return NextResponse.next();
  }

  const validKeys = getValidKeys(pathname);
  if (validKeys.length === 0) {
    // No keys configured — fail closed
    return new NextResponse('Access not configured', { status: 503 });
  }

  // 1. If they have a valid cookie, let them through
  const cookieValue = req.cookies.get(COOKIE_NAME)?.value;
  if (cookieValue && validKeys.includes(cookieValue)) {
    return NextResponse.next();
  }

  // 2. If they have a valid ?key= in the URL, set the cookie and redirect to clean URL
  const queryKey = searchParams.get('key');
  if (queryKey && validKeys.includes(queryKey)) {
    const cleanUrl = req.nextUrl.clone();
    cleanUrl.searchParams.delete('key');
    const res = NextResponse.redirect(cleanUrl);
    res.cookies.set(COOKIE_NAME, queryKey, {
      maxAge: COOKIE_MAX_AGE,
      path: pathname,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });
    return res;
  }

  // 3. No valid key — show a minimal access denied page
  return new NextResponse(
    `<!DOCTYPE html>
<html><head><title>Novora · Access Required</title>
<style>
  body { margin: 0; min-height: 100vh; background: #FAFAF9; color: #0A0A0A;
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    display: flex; align-items: center; justify-content: center; }
  .card { max-width: 420px; padding: 48px 40px; text-align: center; }
  .logo { font-size: 11px; letter-spacing: 1.5px; color: #7C6EF0; text-transform: uppercase; font-weight: 600; margin-bottom: 24px; }
  h1 { font-size: 28px; font-weight: 300; margin: 0 0 16px; }
  p { font-size: 15px; line-height: 1.6; color: #6B6B6B; margin: 0 0 8px; }
  a { color: #7C6EF0; text-decoration: none; }
</style></head>
<body><div class="card">
  <div class="logo">Novora · Confidential</div>
  <h1>Access required</h1>
  <p>This research is shared by invitation. If you believe you should have access, contact <a href="mailto:connor@novora.co">connor@novora.co</a>.</p>
</div></body></html>`,
    { status: 403, headers: { 'Content-Type': 'text/html' } }
  );
}

export const config = {
  matcher: ['/research/superform'],
};
