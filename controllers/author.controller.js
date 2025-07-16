import { authors, paginate } from '../data/index.js'

const listAuthors = async (req, res) => {
  const { query } = req
  const limit = query.limit ? +query.limit : 20
  const page = query.page ? +query.page : 1

  // Get total items
  const total = authors.length

  if (total === 0)
    return res.status(200).send({
      status: 'success',
      data: {
        total,
        authors: [],
      },
    })

  // Filter items - get paginated authors
  const paginatedAuthors = paginate(authors, page, limit)

  // Format response to match expected structure
  const formattedAuthors = paginatedAuthors.map(author => ({
    id: author.id,
    name: author.name,
    avatar: author.avatar,
    verified: author.verified,
  }))

  if (!formattedAuthors)
    return res.status(500).send({
      status: 'error',
      message: 'Unable to fetch authors',
    })
  return res.status(200).send({
    status: 'success',
    data: {
      total,
      authors: formattedAuthors,
    },
  })
}

export default listAuthors
