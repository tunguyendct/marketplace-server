import { PrismaClient, Product } from '@prisma/client'

const prisma = new PrismaClient()

async function seedAuthor() {
  await prisma.author.deleteMany()
  await prisma.author.createMany({
    data: [
      {
        name: 'Ghozali',
        avatar: 'https://i.ibb.co/ryNhGpq/author-avatar.png',
        verified: true,
      },
      {
        name: 'Author_2',
        avatar: 'https://i.ibb.co/ryNhGpq/author-avatar.png',
        verified: true,
      },
      {
        name: 'Author_3',
        avatar: 'https://i.ibb.co/ryNhGpq/author-avatar.png',
        verified: false,
      },
    ],
  })
}

async function seedTheme() {
  await prisma.theme.deleteMany()
  await prisma.theme.createMany({
    data: [
      {
        name: 'Halloween',
      },
      {
        name: 'Christmas',
      },
      {
        name: 'Mid Autumn',
      },
      {
        name: 'New Year',
      },
    ],
  })
}

async function seedType() {
  await prisma.type.deleteMany()
  await prisma.type.createMany({
    data: [
      { name: 'Upper Body' },
      {
        name: 'Lower Body',
      },
      {
        name: 'Hat',
      },
      {
        name: 'Shoes',
      },
      {
        name: 'Accessory',
      },
      {
        name: 'Legendary',
      },
      {
        name: 'Mythic',
      },
      {
        name: 'Epic',
      },
      {
        name: 'Rare',
      },
    ],
  })
}

async function seedTier() {
  await prisma.tier.deleteMany()
  await prisma.tier.createMany({
    data: [
      {
        name: 'Epic',
      },
      {
        name: 'Common',
      },
      {
        name: 'Rare',
      },
      {
        name: 'Mythic',
      },
      {
        name: 'Legendary',
      },
    ],
  })
}

const products = [
  {
    name: 'The DJ',
    price: 2.75,
    image: 'https://i.ibb.co/thZmZFF/product-1.png',
    authorId: '653136d5ff61964c725da71f',
    typeId: '653134cc0b523078c6c0d6ec',
    tierId: '653134cc0b523078c6c0d6e7',
    themeId: '653134cc0b523078c6c0d6e3',
  },
  {
    name: 'Assassin',
    price: 1.5,
    image: 'https://i.ibb.co/3fFBN2c/product-2.png',
    authorId: '653136d5ff61964c725da720',
    typeId: '653134cc0b523078c6c0d6ed',
    tierId: '653134cc0b523078c6c0d6e8',
    themeId: '653134cc0b523078c6c0d6e4',
  },
  {
    name: 'Neon Guy',
    price: 2,
    image: 'https://i.ibb.co/N6wFnS3/product-3.png',
    authorId: '653136d5ff61964c725da721',
    typeId: '653134cc0b523078c6c0d6ee',
    tierId: '653134cc0b523078c6c0d6e9',
    themeId: '653134cc0b523078c6c0d6e5',
  },
  {
    name: 'Mafia England',
    price: 3,
    image: 'https://i.ibb.co/pZgxF6K/product-4.png',
    authorId: '653136d5ff61964c725da71f',
    typeId: '653134cc0b523078c6c0d6f0',
    tierId: '653134cc0b523078c6c0d6eb',
    themeId: '653134cc0b523078c6c0d6e6',
  },
  {
    name: 'Basketball Girl',
    price: 2.5,
    image: 'https://i.ibb.co/RhTRFJC/product-5.png',
    authorId: '653136d5ff61964c725da720',
    typeId: '653134cc0b523078c6c0d6ef',
    tierId: '653134cc0b523078c6c0d6ea',
    themeId: '653134cc0b523078c6c0d6e3',
  },
]

async function seedProduct() {
  await prisma.product.deleteMany()
  await prisma.product.createMany({
    data: products,
  })
}

async function main() {
  // seedAuthor()
  // seedTheme()
  // seedType()
  // seedTier()
  // seedProduct()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
