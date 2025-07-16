import { tiers, paginate } from '../data/index.js'

const listTiers = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = tiers.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        tiers: [],
      },
    })

  // Filter items - get paginated tiers
  const paginatedTiers = paginate(tiers, page, limit)

  // Format response to match expected structure
  const formattedTiers = paginatedTiers.map(tier => ({
    id: tier.id,
    name: tier.name
  }))

  if (!formattedTiers)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch tiers',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      tiers: formattedTiers,
    },
  })
}

export default listTiers
