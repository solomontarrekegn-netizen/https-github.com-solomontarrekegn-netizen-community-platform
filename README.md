# Ask Community — README

This repository contains a scaffold for the Ask Community platform (Next.js + Prisma + Tailwind).

Quick start (local dev with SQLite):

1. Install dependencies
   npm install

2. Create the database and run migrations
   npx prisma generate
   npx prisma db push

3. Seed the database
   npm run prisma:seed

4. Run the dev server
   npm run dev

Notes:
- The Prisma schema is configured for SQLite for local development (see prisma/schema.prisma). For production, switch the DATABASE_URL in .env and update the datasource provider to "postgresql".
- This scaffold lives on the "scaffold" branch. Do not merge until verified.
