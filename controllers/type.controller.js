import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listTypes = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = await prisma.type.count()

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        types: [],
      },
    })

  // Filter items
  const types = await prisma.type.findMany({
    take: limit,
    skip: (page - 1) * limit,
    select: {
      id: true,
      name: true,
    },
  })

  if (!types)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch types',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      types,
    },
  })
}

export default listTypes
