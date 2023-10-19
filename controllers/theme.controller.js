import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const listThemes = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = await prisma.theme.count()

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        themes: [],
      },
    })

  // Filter items
  const themes = await prisma.theme.findMany({
    take: limit,
    skip: (page - 1) * limit,
  })

  if (!themes)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch themes',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      themes,
    },
  })
}

export default listThemes
