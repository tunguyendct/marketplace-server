import { PrismaClient } from '@prisma/client'
import SORT from '../constants/filter.js'

const prisma = new PrismaClient()

const listProducts = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = await prisma.product.count()

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        products: [],
      },
    })

  // Filter items
  let products = await prisma.product.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      theme: {
        select: {
          id: true,
          name: true,
        },
      },
      type: {
        select: {
          id: true,
          name: true,
        },
      },
      author: {
        select: {
          id: true,
          name: true,
          avatar: true,
          verified: true,
        },
      },
      tier: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })

  if (!products)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch products',
    })

  products = products.map(
    ({ themeId, authorId, typeId, tierId, ...keepAttrs }) => keepAttrs
  )

  return res.status(200).send({
    status: 'success',
    data: {
      total,
      products,
    },
  })
}

const searchProducts = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const q = query.q || null
  const page = query.page ? +query.page : 1
  const typeId = query.type || null
  const tierId = query.tier || null
  const themeId = query.theme || null
  const gtePrice = query.gte_price ? +query.gte_price : null
  const ltePrice = query.lte_price ? +query.lte_price : null
  const sort = query.sort || null

  // Build filter query
  let filterQuery = {}
  if (!!q) {
    filterQuery.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { email: { contains: q, mode: 'insensitive' } },
      { body: { contains: q, mode: 'insensitive' } },
    ]
  }

  const filterKeys = { themeId, typeId, tierId }

  Object.keys(filterKeys).map((filter) => {
    if (!!filterKeys[filter]) {
      filterQuery[filter] = filterKeys[filter]
    }
  })

  if (!!gtePrice || !!ltePrice) {
    filterQuery.price = {}
  }

  if (!!gtePrice) {
    filterQuery.price.gte = gtePrice
  }
  if (!!ltePrice) {
    filterQuery.price.lte = ltePrice
  }

  // Sort
  let orderBy = {
    createdAt: SORT.DESC,
  }
  switch (sort) {
    case SORT.CREATE_ASC:
      orderBy = {
        createdAt: SORT.ASC,
      }
      break
    case SORT.NAME_ASC:
      orderBy = {
        name: SORT.ASC,
      }
      break
    case SORT.NAME_DESC:
      orderBy = {
        name: SORT.DESC,
      }
      break
    case SORT.PRICE_ACS:
      orderBy = {
        price: SORT.ASC,
      }
      break
    case SORT.PRICE_DESC:
      orderBy = {
        price: SORT.DESC,
      }
      break
  }

  // Get total items
  const total = await prisma.product.count({
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
  let products = await prisma.product.findMany({
    take: limit,
    skip: (page - 1) * limit,
    orderBy,
    include: {
      theme: {
        select: {
          id: true,
          name: true,
        },
      },
      type: {
        select: {
          id: true,
          name: true,
        },
      },
      author: {
        select: {
          id: true,
          name: true,
          avatar: true,
          verified: true,
        },
      },
      tier: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: filterQuery,
  })

  if (!products)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch products list',
    })

  products = products.map(
    ({ themeId, authorId, typeId, tierId, ...keepAttrs }) => keepAttrs
  )

  return res.status(200).send({
    status: 'success',
    data: {
      total,
      products,
    },
  })
}

export { listProducts, searchProducts }
