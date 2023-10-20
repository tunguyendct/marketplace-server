import cors from 'cors'
import express, { Router } from 'express'
import path from 'path'
import listAuthors from './controllers/author.controller.js'
import {
  listProducts,
  searchProducts,
} from './controllers/product.controller.js'
import listThemes from './controllers/theme.controller.js'
import listTiers from './controllers/tier.controller.js'
import listTypes from './controllers/type.controller.js'

const router = Router()

global.__basedir = path.resolve() + '/..'

const app = express()

const corsOptions = {
  origin: process.env.CLIENT_URL,
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '1mb' }))

// API routes
app.use('/api', router)

router.get('/themes', listThemes)

router.get('/tiers', listTiers)

router.get('/types', listTypes)

router.get('/authors', listAuthors)

router.get('/products', listProducts)

router.get('/search/products', searchProducts)

app.get('/', function (_req, res) {
  res.send('Hello')
})

const port = 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
