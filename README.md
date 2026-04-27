# Likhitha Paipuri Portfolio

Angular 18 portfolio built for a recruiter-facing Full Stack .NET / Angular profile.

## Run locally in VS Code

1. Install Node.js LTS.
2. Install Angular CLI:

```bash
npm install -g @angular/cli
```

3. Open this folder in VS Code and run:

```bash
npm install
npm start
```

4. Open:

```text
http://localhost:4200
```

## Build for production

```bash
npm run build
```

Your deployable files will be inside:

```text
dist/likhitha-portfolio/browser
```

## Free hosting options

### Vercel
- Push this folder to GitHub.
- Go to Vercel → New Project → Import GitHub repo.
- Framework preset: Angular.
- Build command: `npm run build`
- Output directory: `dist/likhitha-portfolio/browser`

### Netlify
- Run `npm run build`.
- Drag and drop `dist/likhitha-portfolio/browser` into Netlify Deploys.

### GitHub Pages
```bash
npm install -g angular-cli-ghpages
ng build --base-href "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/"
npx angular-cli-ghpages --dir=dist/likhitha-portfolio/browser
```

## Customize
- Replace `src/assets/profile.png` to change photo.
- Replace `src/assets/Likhitha_Paipuri_Resume.pdf` to update resume.
- Edit `src/main.ts` to update portfolio content.
- Edit `src/styles.css` to update design.
