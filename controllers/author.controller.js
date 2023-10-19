import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listAuthors = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = await prisma.author.count()

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        authors: [],
      },
    })

  // Filter items
  const authors = await prisma.author.findMany({
    take: limit,
    skip: (page - 1) * limit,
  })

  if (!authors)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch authors',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      authors,
    },
  })
}

export default listAuthors
