import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listTiers = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = await prisma.tier.count()

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        tiers: [],
      },
    })

  // Filter items
  const tiers = await prisma.tier.findMany({
    take: limit,
    skip: (page - 1) * limit,
  })

  if (!tiers)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch tiers',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      tiers,
    },
  })
}

export default listTiers
