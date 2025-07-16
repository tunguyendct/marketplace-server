import { themes, paginate } from '../data/index.js'

const listThemes = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = themes.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        themes: [],
      },
    })

  // Filter items - get paginated themes
  const paginatedThemes = paginate(themes, page, limit)

  // Format response to match expected structure
  const formattedThemes = paginatedThemes.map(theme => ({
    id: theme.id,
    name: theme.name
  }))

  if (!formattedThemes)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch themes',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      themes: formattedThemes,
    },
  })
}

export default listThemes
