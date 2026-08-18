import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(questions)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, content, categoryId, authorEmail } = body

    let author = undefined
    if (authorEmail) {
      author = await prisma.user.findUnique({ where: { email: authorEmail } })
      if (!author) {
        author = await prisma.user.create({ data: { email: authorEmail } })
      }
    }

    const q = await prisma.question.create({
      data: {
        title,
        content,
        categoryId: categoryId || undefined,
        authorId: author?.id || undefined
      }
    })

    return NextResponse.json(q, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to create question' }, { status: 500 })
  }
}
