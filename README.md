# Ask Community — README

This repository contains the scaffold for the Ask Community platform (Next.js + Prisma + Tailwind).

Prerequisites
- Node 18+ (Node 20 recommended)
- npm
- (Optional) PostgreSQL for production testing

Quick start (local development using SQLite)

1. Install dependencies
   npm install

2. Generate Prisma client and push schema (SQLite local dev)
   npx prisma generate
   npx prisma db push

3. Seed the database
   npm run prisma:seed

4. Run the dev server
   npm run dev

Prisma (PostgreSQL production)
- The Prisma schema in this branch is PostgreSQL-first (provider = "postgresql"). To run locally with SQLite for quick development you must:
  1. Edit prisma/schema.prisma datasource provider to "sqlite".
  2. Set DATABASE_URL in your local .env or .env.local to: DATABASE_URL="file:./dev.db"
  3. Run: npx prisma db push

- Do NOT attempt to switch providers dynamically in code. Change the provider manually for local dev and verify migrations/ db push as needed.

Authentication
- A NextAuth skeleton (v4) is included using the Prisma adapter. The auth route is the App Router route at `app/api/auth/[...nextauth]/route.ts`.
- To enable providers you must set NEXTAUTH_SECRET and provider credentials (e.g., GITHUB_ID, GITHUB_SECRET) or EMAIL_SERVER + EMAIL_FROM.
- Type declarations are provided to include user.id on the session object. This is a compile-time augmentation only.

Scripts
- dev: start dev server
- build: build for production
- start: start built app
- prisma:generate: generate Prisma client
- prisma:migrate: run Prisma migrate (development)
- prisma:seed: run seed script

CI
- A lightweight GitHub Actions workflow (ci.yml) is added to run on scaffold pushes and PRs to main. It installs dependencies (npm install), runs npx prisma generate, and runs TypeScript typecheck (npx tsc --noEmit).

Known limitations
- This scaffold is statically validated in this environment but not runtime-tested. Please run the local steps above and paste any errors for fixes.
- NextAuth providers require runtime configuration and secure secrets (NEXTAUTH_SECRET). The auth skeleton is provided but provider configuration and email server setup are required before sign-in flows work.

Contributing
- Work on the scaffold branch for further foundational work. Do not merge to main until runtime verification completes.
