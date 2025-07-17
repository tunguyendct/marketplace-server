// Script to update all product images to use SERVER_URL
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'products.js')
let content = fs.readFileSync(filePath, 'utf-8')

// Replace all '../assets/' with template literal using SERVER_URL
content = content.replace(/image: '\.\.\/assets\/(product-\d+\.png)'/g, 
  "image: `${process.env.SERVER_URL}/assets/$1`")

fs.writeFileSync(filePath, content)
console.log('✅ Updated all product images to use SERVER_URL')
