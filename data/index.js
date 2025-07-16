import { authors } from './authors.js'
import { themes } from './themes.js'
import { types } from './types.js'
import { tiers } from './tiers.js'
import { products } from './products.js'

// Helper function to get item by ID
const getById = (array, id) => array.find(item => item.id === id)

// Helper function to get products with full relationship data
const getProductsWithRelations = (productList = products) => {
  return productList.map(product => ({
    ...product,
    author: getById(authors, product.authorId),
    theme: getById(themes, product.themeId),
    type: getById(types, product.typeId),
    tier: getById(tiers, product.tierId),
  }))
}

// Helper function for pagination
const paginate = (array, page = 1, limit = 20) => {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  return array.slice(startIndex, endIndex)
}

// Helper function for searching products
const searchProducts = (query, searchFields = ['name'], productList = products) => {
  if (!query) return productList
  
  const searchTerm = query.toLowerCase()
  return productList.filter(product => 
    searchFields.some(field => 
      product[field]?.toLowerCase().includes(searchTerm)
    )
  )
}

// Helper function to filter products by various criteria
const filterProducts = (filters = {}) => {
  let filteredProducts = [...products]
  
  if (filters.authorId) {
    filteredProducts = filteredProducts.filter(p => p.authorId === filters.authorId)
  }
  
  if (filters.themeId) {
    filteredProducts = filteredProducts.filter(p => p.themeId === filters.themeId)
  }
  
  if (filters.typeId) {
    filteredProducts = filteredProducts.filter(p => p.typeId === filters.typeId)
  }
  
  if (filters.tierId) {
    filteredProducts = filteredProducts.filter(p => p.tierId === filters.tierId)
  }
  
  if (filters.minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice)
  }
  
  if (filters.maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice)
  }
  
  return filteredProducts
}

// Helper function to sort products
const sortProducts = (productList, sortBy = 'createdAt', order = 'desc') => {
  return [...productList].sort((a, b) => {
    let aValue = a[sortBy]
    let bValue = b[sortBy]
    
    if (sortBy === 'createdAt') {
      aValue = new Date(aValue)
      bValue = new Date(bValue)
    }
    
    if (order === 'desc') {
      return bValue > aValue ? 1 : -1
    } else {
      return aValue > bValue ? 1 : -1
    }
  })
}

export {
  authors,
  themes,
  types,
  tiers,
  products,
  getById,
  getProductsWithRelations,
  paginate,
  searchProducts,
  filterProducts,
  sortProducts
}

export default {
  authors,
  themes,
  types,
  tiers,
  products,
  getById,
  getProductsWithRelations,
  paginate,
  searchProducts,
  filterProducts,
  sortProducts
}
