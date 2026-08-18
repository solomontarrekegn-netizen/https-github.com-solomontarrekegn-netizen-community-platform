# Ask Community — README

This repository contains a scaffold for the Ask Community platform (Next.js + Prisma + Tailwind).

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
- The Prisma schema is written to be PostgreSQL-compatible for production. For production use:
  1. Set DATABASE_URL in your environment to your PostgreSQL DSN (example in .env.example).
  2. Update prisma/schema.prisma datasource provider to "postgresql" (search for the datasource block). Do not attempt to dynamically switch providers at runtime — change the provider and run appropriate migrations.
  3. Run migrations: npx prisma migrate deploy (or npx prisma migrate dev --name init for local testing against Postgres).

Authentication
- A NextAuth skeleton is included (App Router). To enable providers you must set NEXTAUTH_SECRET and provider credentials (e.g., GITHUB_ID, GITHUB_SECRET or EMAIL_SERVER + EMAIL_FROM).

Scripts
- dev: start dev server
- build: build for production
- start: start built app
- prisma:generate: generate Prisma client
- prisma:migrate: run Prisma migrate (development)
- prisma:seed: run seed script

CI
- A lightweight GitHub Actions workflow runs on pushes to scaffold and PRs to main to run dependency install, prisma generate, and TypeScript typecheck.

Known limitations
- This scaffold is statically validated but not runtime-tested in this environment. Please run the local steps above and paste any errors for fixes.
- NextAuth providers require runtime configuration and secure secrets (NEXTAUTH_SECRET). The auth skeleton is provided but provider configuration and email server setup are required before sign-in flows work.

Contributing
- Work on the scaffold branch for further foundational work. Do not merge to main until runtime verification completes.
