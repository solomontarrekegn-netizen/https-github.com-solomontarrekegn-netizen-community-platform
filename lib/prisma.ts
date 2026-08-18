import { PrismaClient } from '@prisma/client'

declare global {
  // allow global prisma across module reloads in development to prevent
  // exhausting your database connection limit
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prisma = prisma
