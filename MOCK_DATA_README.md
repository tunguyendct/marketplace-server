# Local Mock Data Setup Guide

This project includes comprehensive local mock data for the marketplace server that works without a database connection. All data is stored in local JavaScript files and served directly from memory.

## Data Structure

The mock data is organized in the `data/` directory with the following files:
- `authors.js` - Author data
- `themes.js` - Theme data
- `types.js` - Type data
- `tiers.js` - Tier data
- `products.js` - Product data
- `index.js` - Main data file with helper functions

## Data Models

### 1. Authors (8 authors)
- **Ghozali** (verified)
- **Alex Chen** (verified)
- **Sarah Williams** (unverified)
- **Mike Johnson** (verified)
- **Emma Davis** (unverified)
- **Ryan Martinez** (verified)
- **Jessica Brown** (verified)
- **David Wilson** (unverified)

### 2. Themes (12 themes)
- Halloween
- Christmas
- Mid Autumn
- New Year
- Cyberpunk
- Medieval
- Futuristic
- Vintage
- Minimalist
- Nature
- Urban
- Fantasy

### 3. Types (10 types)
- Upper Body
- Lower Body
- Hat
- Shoes
- Accessory
- Full Outfit
- Gloves
- Mask
- Weapon
- Jewelry

### 4. Tiers (5 tiers)
- Epic
- Common
- Rare
- Mythic
- Legendary

### 5. Products (25 products)
Including items like:
- The DJ
- Assassin
- Neon Guy
- Mafia England
- Basketball Girl
- Cyber Ninja
- Medieval Knight
- Space Explorer
- Steampunk Engineer
- Forest Ranger
- Urban Hacker
- Mystical Wizard
- And many more...

## Setup Instructions

### Prerequisites
1. Make sure you have Node.js installed
2. Install dependencies: `npm install`

### Running the Server

1. **Start the server**:
   ```bash
   npm start
   ```

2. **Test the endpoints**:
   The server will be available at `http://localhost:5000`
   
   Test endpoints:
   - `http://localhost:5000/api/authors` - List all authors
   - `http://localhost:5000/api/themes` - List all themes
   - `http://localhost:5000/api/types` - List all types
   - `http://localhost:5000/api/tiers` - List all tiers
   - `http://localhost:5000/api/products` - List all products
   - `http://localhost:5000/api/search/products?q=ninja` - Search products

## API Endpoints

- `GET /api/authors` - Get all authors (with pagination)
- `GET /api/themes` - Get all themes (with pagination)
- `GET /api/types` - Get all types (with pagination)
- `GET /api/tiers` - Get all tiers (with pagination)
- `GET /api/products` - Get all products (with pagination and full relations)
- `GET /api/search/products` - Search and filter products

### Query Parameters

All endpoints support pagination:
- `limit` - Number of items per page (default: 20)
- `page` - Page number (default: 1)

Product search endpoint also supports:
- `q` - Search query (searches in product names)
- `type` - Filter by type ID
- `tier` - Filter by tier ID
- `theme` - Filter by theme ID
- `gte_price` - Minimum price filter
- `lte_price` - Maximum price filter
- `sort` - Sort order (`create-asc`, `name-asc`, `name-desc`, `price-asc`, `price-desc`)

### Example Requests

```bash
# Get first page of products
GET /api/products?page=1&limit=10

# Search for products containing "ninja"
GET /api/search/products?q=ninja

# Filter products by theme and sort by price
GET /api/search/products?theme=theme_5&sort=price-asc

# Get products with price between $2 and $5
GET /api/search/products?gte_price=2&lte_price=5
```

## Features of the Local Mock Data

1. **No Database Required**: All data is stored in JavaScript files and served from memory
2. **Realistic Data**: Includes realistic names, prices, and relationships
3. **Full Relationships**: Products include complete author, theme, type, and tier information
4. **Comprehensive Coverage**: 25 products with varied categories for testing
5. **Varied Price Points**: Products range from $1.50 to $6.50
6. **Mixed Verification Status**: Authors have mixed verification statuses
7. **Search & Filter Support**: Full search and filtering capabilities
8. **Pagination**: All endpoints support pagination
9. **Sorting**: Products can be sorted by various criteria

## Customization

You can easily modify the mock data by editing the files in the `data/` directory:

### Adding New Data
1. **Add Authors**: Edit `data/authors.js`
2. **Add Themes**: Edit `data/themes.js`
3. **Add Types**: Edit `data/types.js`
4. **Add Tiers**: Edit `data/tiers.js`
5. **Add Products**: Edit `data/products.js`

### Helper Functions
The `data/index.js` file includes several helper functions:
- `getById(array, id)` - Get item by ID
- `getProductsWithRelations(productList)` - Get products with full relationship data
- `paginate(array, page, limit)` - Paginate any array
- `searchProducts(query, searchFields, productList)` - Search products
- `filterProducts(filters)` - Filter products by various criteria
- `sortProducts(productList, sortBy, order)` - Sort products

### Example: Adding a New Product
```javascript
// In data/products.js, add to the products array:
{
  id: 'product_26',
  name: 'New Product Name',
  image: 'https://example.com/image.png',
  price: 4.99,
  authorId: 'author_1', // Use existing author ID
  typeId: 'type_1',     // Use existing type ID
  tierId: 'tier_1',     // Use existing tier ID
  themeId: 'theme_1',   // Use existing theme ID
  createdAt: new Date('2024-03-30T10:00:00Z'),
}
```

The server will automatically pick up your changes when you restart it.

## No Database Dependencies

This setup removes the need for:
- MongoDB or any database server
- Prisma database connections
- Database seeding scripts
- Environment variables for database URLs

All data is self-contained and ready to use immediately after running `npm start`.
