# How to Use Image Links in Assets Folder API

## 📁 Folder Structure
```
marketplace-server/
├── assets/                    # Static files served by Express
│   ├── author-avatar.png      # Author avatar image
│   ├── product-1.png          # Product images
│   ├── product-2.png
│   ├── product-3.png
│   ├── product-4.png
│   └── product-5.png
├── data/                      # Mock data files
│   ├── authors.js
│   ├── products.js
│   └── ...
└── index.js                   # Express server
```

## 🚀 How It Works

### 1. **Static File Serving Setup**
In `index.js`, I added this middleware:
```javascript
// Serve static files from assets folder
app.use('/assets', express.static(path.join(process.cwd(), 'assets')))
```

### 2. **Environment Variable Setup**
In `.env` file:
```
SERVER_URL=http://localhost:5000
```

### 3. **Using Full URLs in Data Files**
In `authors.js` and `products.js`:
```javascript
// Authors
avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`

// Products
image: `${process.env.SERVER_URL}/assets/product-1.png`
```

## 🔗 API Endpoints for Images

### **Direct Image Access:**
- `http://localhost:5000/assets/author-avatar.png`
- `http://localhost:5000/assets/product-1.png`
- `http://localhost:5000/assets/product-2.png`
- `http://localhost:5000/assets/product-3.png`
- `http://localhost:5000/assets/product-4.png`
- `http://localhost:5000/assets/product-5.png`

### **API Responses Include Full URLs:**
```json
{
  "status": "success",
  "data": {
    "authors": [
      {
        "id": "author_1",
        "name": "Ghozali",
        "avatar": "http://localhost:5000/assets/author-avatar.png",
        "verified": true
      }
    ]
  }
}
```

```json
{
  "status": "success",
  "data": {
    "products": [
      {
        "id": "product_1",
        "name": "The DJ",
        "image": "http://localhost:5000/assets/product-1.png",
        "price": 2.75,
        "author": { "name": "Ghozali", "avatar": "http://localhost:5000/assets/author-avatar.png" }
      }
    ]
  }
}
```

## 🛠️ Usage Examples

### **Frontend (React/Vue/etc.)**
```javascript
// Fetch products
const response = await fetch('http://localhost:5000/api/products')
const data = await response.json()

// Use images directly
data.data.products.forEach(product => {
  console.log(product.image) // Full URL: http://localhost:5000/assets/product-1.png
})
```

### **HTML**
```html
<img src="http://localhost:5000/assets/product-1.png" alt="Product 1" />
<img src="http://localhost:5000/assets/author-avatar.png" alt="Author Avatar" />
```

## 📝 Adding New Images

### **Step 1:** Add image to assets folder
```
marketplace-server/assets/new-product.png
```

### **Step 2:** Update data file
```javascript
{
  id: 'product_new',
  name: 'New Product',
  image: `${process.env.SERVER_URL}/assets/new-product.png`,
  // ... other fields
}
```

### **Step 3:** Image will be accessible at:
```
http://localhost:5000/assets/new-product.png
```

## 🌐 Production Deployment

For production, update your `.env` file:
```
SERVER_URL=https://your-domain.com
```

All image URLs will automatically update to use your production domain.

## ✅ Benefits

1. **Full URLs**: Images have complete URLs that work from any client
2. **CORS Ready**: Images are served with proper CORS headers
3. **Flexible**: Easy to change server URL for different environments
4. **CDN Ready**: Can easily switch to CDN URLs later
5. **Client Friendly**: Frontend can use images directly without path manipulation

## 🧪 Testing

Test the image serving:
```bash
curl http://localhost:5000/assets/product-1.png
curl http://localhost:5000/assets/author-avatar.png
```

Or open in browser:
- http://localhost:5000/assets/product-1.png
- http://localhost:5000/assets/author-avatar.png
