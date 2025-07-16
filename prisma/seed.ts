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
        name: 'Alex Chen',
        avatar: 'https://i.ibb.co/1KHGxZr/author-2.png',
        verified: true,
      },
      {
        name: 'Sarah Williams',
        avatar: 'https://i.ibb.co/3Y4mNvL/author-3.png',
        verified: false,
      },
      {
        name: 'Mike Johnson',
        avatar: 'https://i.ibb.co/qNQmR4p/author-4.png',
        verified: true,
      },
      {
        name: 'Emma Davis',
        avatar: 'https://i.ibb.co/J3vNzxK/author-5.png',
        verified: false,
      },
      {
        name: 'Ryan Martinez',
        avatar: 'https://i.ibb.co/8Y2vLxK/author-6.png',
        verified: true,
      },
      {
        name: 'Jessica Brown',
        avatar: 'https://i.ibb.co/W2vXnKp/author-7.png',
        verified: true,
      },
      {
        name: 'David Wilson',
        avatar: 'https://i.ibb.co/5RkNmPq/author-8.png',
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
      {
        name: 'Cyberpunk',
      },
      {
        name: 'Medieval',
      },
      {
        name: 'Futuristic',
      },
      {
        name: 'Vintage',
      },
      {
        name: 'Minimalist',
      },
      {
        name: 'Nature',
      },
      {
        name: 'Urban',
      },
      {
        name: 'Fantasy',
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
        name: 'Full Outfit',
      },
      {
        name: 'Gloves',
      },
      {
        name: 'Mask',
      },
      {
        name: 'Weapon',
      },
      {
        name: 'Jewelry',
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

async function seedProduct() {
  await prisma.product.deleteMany()
  
  // Get all the reference data we need
  const authors = await prisma.author.findMany()
  const themes = await prisma.theme.findMany()
  const types = await prisma.type.findMany()
  const tiers = await prisma.tier.findMany()

  // Helper function to get random item from array
  const getRandomItem = (array: any[]) => array[Math.floor(Math.random() * array.length)]

  const products = [
    {
      name: 'The DJ',
      price: 2.75,
      image: 'https://i.ibb.co/thZmZFF/product-1.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Assassin',
      price: 1.5,
      image: 'https://i.ibb.co/3fFBN2c/product-2.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Neon Guy',
      price: 2,
      image: 'https://i.ibb.co/N6wFnS3/product-3.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Mafia England',
      price: 3,
      image: 'https://i.ibb.co/pZgxF6K/product-4.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Basketball Girl',
      price: 2.5,
      image: 'https://i.ibb.co/RhTRFJC/product-5.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Cyber Ninja',
      price: 4.2,
      image: 'https://i.ibb.co/2MQJ8Ln/cyber-ninja.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Medieval Knight',
      price: 5.0,
      image: 'https://i.ibb.co/3WvQk2J/medieval-knight.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Space Explorer',
      price: 3.8,
      image: 'https://i.ibb.co/7XYwQpL/space-explorer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Steampunk Engineer',
      price: 4.5,
      image: 'https://i.ibb.co/QjLmN8K/steampunk-engineer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Forest Ranger',
      price: 2.8,
      image: 'https://i.ibb.co/VYrJ9Ks/forest-ranger.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Urban Hacker',
      price: 3.2,
      image: 'https://i.ibb.co/J2KLmPq/urban-hacker.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Mystical Wizard',
      price: 6.0,
      image: 'https://i.ibb.co/2NrP8vL/mystical-wizard.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Retro Gamer',
      price: 1.9,
      image: 'https://i.ibb.co/4RpLnVq/retro-gamer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Minimalist Designer',
      price: 2.3,
      image: 'https://i.ibb.co/QvMnR7J/minimalist-designer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Pirate Captain',
      price: 4.7,
      image: 'https://i.ibb.co/8sjKLpN/pirate-captain.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Zombie Survivor',
      price: 3.5,
      image: 'https://i.ibb.co/M8vRnKp/zombie-survivor.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Angel Warrior',
      price: 5.5,
      image: 'https://i.ibb.co/LZKpR9J/angel-warrior.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Demon Hunter',
      price: 5.2,
      image: 'https://i.ibb.co/8N4pLqM/demon-hunter.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Beach Surfer',
      price: 1.8,
      image: 'https://i.ibb.co/J3mLpNr/beach-surfer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Arctic Explorer',
      price: 3.9,
      image: 'https://i.ibb.co/QvRnK8J/arctic-explorer.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Punk Rocker',
      price: 2.6,
      image: 'https://i.ibb.co/8x4RpLn/punk-rocker.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Business Executive',
      price: 2.1,
      image: 'https://i.ibb.co/JvKLmPq/business-executive.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Superhero Vigilante',
      price: 4.8,
      image: 'https://i.ibb.co/2MJvKLn/superhero-vigilante.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Alien Diplomat',
      price: 6.5,
      image: 'https://i.ibb.co/J3vKLmP/alien-diplomat.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
    {
      name: 'Victorian Gentleman',
      price: 3.7,
      image: 'https://i.ibb.co/QvMnR8J/victorian-gentleman.png',
      authorId: getRandomItem(authors).id,
      typeId: getRandomItem(types).id,
      tierId: getRandomItem(tiers).id,
      themeId: getRandomItem(themes).id,
    },
  ]

  await prisma.product.createMany({
    data: products,
  })
}

async function main() {
  try {
    console.log('🌱 Starting database seeding...')
    
    console.log('📝 Seeding authors...')
    await seedAuthor()
    console.log('✅ Authors seeded successfully')
    
    console.log('🎨 Seeding themes...')
    await seedTheme()
    console.log('✅ Themes seeded successfully')
    
    console.log('📋 Seeding types...')
    await seedType()
    console.log('✅ Types seeded successfully')
    
    console.log('🏆 Seeding tiers...')
    await seedTier()
    console.log('✅ Tiers seeded successfully')
    
    console.log('🛍️ Seeding products...')
    await seedProduct()
    console.log('✅ Products seeded successfully')
    
    console.log('🎉 Database seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error during seeding:', error)
    throw error
  }
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
