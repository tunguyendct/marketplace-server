import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedAuthor() {
  await prisma.author.deleteMany()
  await prisma.author.createMany({
    data: [
      {
        name: 'Ghozali',
        avatar: '',
        verified: true,
      },
      {
        name: 'Author_2',
        avatar: '',
        verified: true
      },
      {
        name: 'Author_3',
        avatar: '',
        verified: false
      }
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

async function seedProduct () {
  // await prisma.product.deleteMany()
  await prisma.product.createMany({
    data: [
      {
        "name": "The DJ",
        "price": 2.75,
        "authorId": "653136d5ff61964c725da71f",
        "typeId": "653134cc0b523078c6c0d6ec",
        "tierId": "653134cc0b523078c6c0d6e7",
        "themeId": "653134cc0b523078c6c0d6e3",
        "createdAt": "2023-10-19T14:20:08.602Z"
    },
    {
        "name": "Assassin",
        "price": 1.5,
        "authorId": "653136d5ff61964c725da720",
        "typeId": "653134cc0b523078c6c0d6ed",
        "tierId": "653134cc0b523078c6c0d6e8",
        "themeId": "653134cc0b523078c6c0d6e4",
        "createdAt": "2023-10-19T14:23:35.315Z"
    },
    {
        "name": "Neon Guy",
        "price": 2,
        "authorId": "653136d5ff61964c725da721",
        "typeId": "653134cc0b523078c6c0d6ee",
        "tierId": "653134cc0b523078c6c0d6e9",
        "themeId": "653134cc0b523078c6c0d6e5",
        "createdAt": "2023-10-19T14:25:03.617Z"
    },
    {
        "name": "Mafia England",
        "price": 3,
        "authorId": "653136d5ff61964c725da71f",
        "typeId": "653134cc0b523078c6c0d6f0",
        "tierId": "653134cc0b523078c6c0d6eb",
        "themeId": "653134cc0b523078c6c0d6e6",
        "createdAt": "2023-10-19T14:26:15.574Z"
    },
    {
        "name": "Basketball Girl",
        "price": 2.5,
        "authorId": "653136d5ff61964c725da720",
        "typeId": "653134cc0b523078c6c0d6ef",
        "tierId": "653134cc0b523078c6c0d6ea",
        "themeId": "653134cc0b523078c6c0d6e3",
        "createdAt": "2023-10-19T14:27:09.788Z"
    }
    ]
  })
}

async function main() {
  // seedAuthor()
  // seedTheme()
  // seedType()
  // seedTier()
  seedProduct()
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
