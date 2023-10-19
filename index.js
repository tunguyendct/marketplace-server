import cors from 'cors'
import express, { Router } from 'express'
import path from 'path'
import searchProducts from './controllers/product.controller.js'

const router = Router()

global.__basedir = path.resolve() + '/..'

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '1mb' }))

// API routes
app.use('/api', router)

router.get('/search', searchProducts)

app.get('/', function (_req, res) {
  res.send('Hello')
})

const port = 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})
