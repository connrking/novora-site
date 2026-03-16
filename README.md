# novora.co

Independent capital markets advisory for crypto.

## Stack
- Next.js 14 (App Router)
- React 18
- Deployed on Vercel

## Pages
- `/` — Home
- `/advisory` — Advisory services
- `/ir-score` — IR Score bridge (→ ir.novora.co)
- `/about` — About + team
- `/contact` — Contact (protocols + funds)
- `/legal` — Legal disclaimers

## Deploy

```bash
# Install
npm install

# Dev
npm run dev

# Push to GitHub
git init
git add -A
git commit -m "novora.co redesign"
git remote add origin git@github.com:connrking/novora-site.git
git push -u origin main
```

Then connect to Vercel:
1. Go to vercel.com/new
2. Import the `novora-site` repo
3. Deploy (zero config needed for Next.js)
4. Add custom domain: novora.co
5. Update DNS: Squarespace CNAME → cname.vercel-dns.com

## Assets
- `/public/connor-king.jpg` — headshot
- Partner logos: swap text names in Home page for SVGs when ready
- Novora logo: inline SVG in `components/NovoraLogo.jsx`
