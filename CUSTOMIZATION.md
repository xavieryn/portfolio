# Customization Guide

## Quick Updates Needed

### 1. Contact Information
Update the contact links in `components/Contact.tsx`:
- Replace `mailto:xavier@example.com` with your actual email
- Update LinkedIn URL: `https://linkedin.com/in/xavier-nishikawa`
- Update GitHub URL: `https://github.com/xavier-nishikawa`

### 2. Resume PDF
- Place your resume PDF in the `public/` folder
- Name it `resume.pdf` (or update the path in `components/Resume.tsx`)

### 3. Experience Section
Add your actual experiences in `components/Experience.tsx`:
```typescript
const experiences = [
  {
    role: 'Your Role',
    organization: 'Organization Name',
    description: 'Your description here.',
  },
  // Add more...
]
```

### 4. Projects Section
Add your projects in `components/Projects.tsx`:
```typescript
const projects = [
  {
    name: 'Project Name',
    description: 'Project description.',
    tags: ['Tag1', 'Tag2'],
  },
  // Add more...
]
```

### 5. Social Icons (Optional)
Replace emoji icons in `components/Contact.tsx` with SVG icons if desired.

## Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live!

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

