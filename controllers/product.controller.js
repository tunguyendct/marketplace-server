import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const searchProducts = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const q = query.q || null
  const page = query.page ? +query.page : 1

  const filterQuery = !!q
    ? {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { email: { contains: q, mode: 'insensitive' } },
          { body: { contains: q, mode: 'insensitive' } },
        ],
      }
    : {}

  // Get total items
  const total = await prisma.product.count({
    orderBy: {
      id: 'asc',
    },
    where: filterQuery,
  })

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        products: [],
      },
    })

  // Filter items
  const products = await prisma.product.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      id: 'asc',
    },
    where: filterQuery,
  })

  if (!products)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch products list',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      products,
    },
  })
}

export default searchProducts
