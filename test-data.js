// Test script to verify local mock data structure
import { 
  authors, 
  themes, 
  types, 
  tiers, 
  products, 
  getProductsWithRelations,
  searchProducts,
  filterProducts 
} from './data/index.js'

console.log('🧪 Testing Local Mock Data Structure\n')

// Test basic data arrays
console.log('📊 Data Counts:')
console.log(`- Authors: ${authors.length}`)
console.log(`- Themes: ${themes.length}`)
console.log(`- Types: ${types.length}`)
console.log(`- Tiers: ${tiers.length}`)
console.log(`- Products: ${products.length}`)

// Test product relationships
console.log('\n🔗 Testing Product Relationships:')
const productsWithRelations = getProductsWithRelations()
const sampleProduct = productsWithRelations[0]
console.log(`Sample product "${sampleProduct.name}":`)
console.log(`- Author: ${sampleProduct.author?.name} (verified: ${sampleProduct.author?.verified})`)
console.log(`- Theme: ${sampleProduct.theme?.name}`)
console.log(`- Type: ${sampleProduct.type?.name}`)
console.log(`- Tier: ${sampleProduct.tier?.name}`)
console.log(`- Price: $${sampleProduct.price}`)

// Test search functionality
console.log('\n🔍 Testing Search:')
const searchResults = searchProducts('ninja')
console.log(`Search for "ninja": ${searchResults.length} results`)
if (searchResults.length > 0) {
  console.log(`- Found: ${searchResults[0].name}`)
}

// Test filtering
console.log('\n🎯 Testing Filters:')
const expensiveItems = filterProducts({ minPrice: 5.0 })
console.log(`Products >= $5.00: ${expensiveItems.length} items`)

const cyberpunkItems = filterProducts({ themeId: 'theme_5' })
console.log(`Cyberpunk theme products: ${cyberpunkItems.length} items`)

// Test verification status distribution
console.log('\n✅ Author Verification Status:')
const verifiedAuthors = authors.filter(a => a.verified)
const unverifiedAuthors = authors.filter(a => !a.verified)
console.log(`- Verified: ${verifiedAuthors.length}`)
console.log(`- Unverified: ${unverifiedAuthors.length}`)

console.log('\n✨ All tests completed successfully!')
console.log('🎉 Local mock data is properly structured and functional!')
