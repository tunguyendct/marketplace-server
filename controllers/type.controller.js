import { types, paginate } from '../data/index.js'

const listTypes = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = types.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        types: [],
      },
    })

  // Filter items - get paginated types
  const paginatedTypes = paginate(types, page, limit)

  // Format response to match expected structure
  const formattedTypes = paginatedTypes.map(type => ({
    id: type.id,
    name: type.name,
  }))

  if (!formattedTypes)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch types',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      types: formattedTypes,
    },
  })
}

export default listTypes
