import 'dotenv/config'

export const authors = [
  {
    id: 'author_1',
    name: 'Ghozali',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: true,
    createdAt: new Date('2024-01-15T10:00:00Z'),
  },
  {
    id: 'author_2',
    name: 'Alex Chen',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: true,
    createdAt: new Date('2024-01-20T14:30:00Z'),
  },
  {
    id: 'author_3',
    name: 'Sarah Williams',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: false,
    createdAt: new Date('2024-02-01T09:15:00Z'),
  },
  {
    id: 'author_4',
    name: 'Mike Johnson',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: true,
    createdAt: new Date('2024-02-10T16:45:00Z'),
  },
  {
    id: 'author_5',
    name: 'Emma Davis',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: false,
    createdAt: new Date('2024-02-15T11:20:00Z'),
  },
  {
    id: 'author_6',
    name: 'Ryan Martinez',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: true,
    createdAt: new Date('2024-02-20T13:10:00Z'),
  },
  {
    id: 'author_7',
    name: 'Jessica Brown',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: true,
    createdAt: new Date('2024-02-25T15:30:00Z'),
  },
  {
    id: 'author_8',
    name: 'David Wilson',
    avatar: `${process.env.SERVER_URL}/assets/author-avatar.png`,
    verified: false,
    createdAt: new Date('2024-03-01T08:45:00Z'),
  },
]

export default authors
