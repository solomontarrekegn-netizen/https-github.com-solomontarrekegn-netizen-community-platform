const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const categories = [
    'Education', 'Technology', 'AI', 'Programming', 'Business', 'Startups'
  ]

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name }
    })
  }

  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      name: 'Alice Example'
    }
  })

  await prisma.question.createMany({
    data: [
      {
        title: 'Welcome to Ask Community',
        content: 'This is a seeded question. Edit or delete it to get started.',
        authorId: alice.id,
        categoryId: 1
      }
    ]
  })

  console.log('Seed finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
