# Deploying to Vercel

Follow these steps to deploy your Marvel Developers full-stack app to Vercel:

## Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push to Git
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 2. Import Project to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect Next.js

### 3. Configure Environment Variables
In the Vercel project settings, add these environment variables:

```
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="YOUR_RANDOM_SECRET_HERE"
NEXTAUTH_URL="https://your-app.vercel.app"
```

**Important**: Generate a strong secret for `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### 4. Build Settings
Vercel should auto-configure these, but verify:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` or `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 5. Deploy
Click **"Deploy"** and Vercel will:
- Install dependencies
- Run Prisma generate
- Build the Next.js app
- Deploy to a global CDN

## Post-Deployment

### Database Considerations
⚠️ **SQLite Limitation**: SQLite doesn't persist on Vercel's serverless functions. For production, switch to:
- **PostgreSQL** (recommended): Use Vercel Postgres or Supabase
- **MySQL**: PlanetScale or Railway
- **MongoDB**: MongoDB Atlas

### Switching to PostgreSQL (Recommended)
1. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

2. Set `DATABASE_URL` in Vercel to your PostgreSQL connection string:
```
postgresql://user:password@host:5432/database?schema=public
```

3. Redeploy

## Vercel CLI (Alternative)
```bash
npm i -g vercel
vercel login
vercel
```

## Troubleshooting
- **Build fails**: Check Vercel build logs
- **Auth not working**: Verify `NEXTAUTH_URL` matches your deployment URL
- **Database errors**: Ensure Prisma Client is generated during build
