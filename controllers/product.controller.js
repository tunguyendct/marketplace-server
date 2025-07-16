import { 
  products, 
  getProductsWithRelations, 
  paginate, 
  searchProducts as searchProductsHelper, 
  filterProducts, 
  sortProducts 
} from '../data/index.js'
import SORT from '../constants/filter.js'

const listProducts = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = products.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        products: [],
      },
    })

  // Get products with relations
  let productsWithRelations = getProductsWithRelations()

  // Sort products by creation date (newest first)
  productsWithRelations = sortProducts(productsWithRelations, 'createdAt', 'desc')

  // Paginate products
  const paginatedProducts = paginate(productsWithRelations, page, limit)

  if (!paginatedProducts)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch products',
    })

  // Format products to match expected structure (remove ID fields)
  const formattedProducts = paginatedProducts.map(
    ({ themeId, authorId, typeId, tierId, ...keepAttrs }) => keepAttrs
  )

  return res.status(200).send({
    status: 'success',
    data: {
      total,
      products: formattedProducts,
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

  // Start with all products
  let filteredProducts = [...products]

  // Apply search filter
  if (q) {
    filteredProducts = searchProductsHelper(q, ['name'], filteredProducts)
  }

  // Apply filters
  const filters = {}
  if (typeId) filters.typeId = typeId
  if (tierId) filters.tierId = tierId
  if (themeId) filters.themeId = themeId
  if (gtePrice) filters.minPrice = gtePrice
  if (ltePrice) filters.maxPrice = ltePrice

  if (Object.keys(filters).length > 0) {
    filteredProducts = filterProducts(filters).filter(p => 
      filteredProducts.some(fp => fp.id === p.id)
    )
  }

  // Apply sorting
  let sortBy = 'createdAt'
  let sortOrder = 'desc'
  
  switch (sort) {
    case SORT.CREATE_ASC:
      sortBy = 'createdAt'
      sortOrder = 'asc'
      break
    case SORT.NAME_ASC:
      sortBy = 'name'
      sortOrder = 'asc'
      break
    case SORT.NAME_DESC:
      sortBy = 'name'
      sortOrder = 'desc'
      break
    case SORT.PRICE_ACS:
      sortBy = 'price'
      sortOrder = 'asc'
      break
    case SORT.PRICE_DESC:
      sortBy = 'price'
      sortOrder = 'desc'
      break
  }

  filteredProducts = sortProducts(filteredProducts, sortBy, sortOrder)

  // Get total items after filtering
  const total = filteredProducts.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        products: [],
      },
    })

  // Get products with relations
  let productsWithRelations = getProductsWithRelations(filteredProducts)

  // Paginate products
  const paginatedProducts = paginate(productsWithRelations, page, limit)

  if (!paginatedProducts)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch products list',
    })

  // Format products to match expected structure (remove ID fields)
  const formattedProducts = paginatedProducts.map(
    ({ themeId, authorId, typeId, tierId, ...keepAttrs }) => keepAttrs
  )

  return res.status(200).send({
    status: 'success',
    data: {
      total,
      products: formattedProducts,
    },
  })
}

export { listProducts, searchProducts }
