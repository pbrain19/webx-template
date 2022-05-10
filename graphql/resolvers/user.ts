import { Resolvers } from '../generated'
import { createUser } from '@/services/user'

const resolver: Resolvers = {
  User: {
    id: (user) => user.uuid,
    name: (user) => user.name,
    email: (user) => user.email,
    photo: (user) => user.photo
  },

  Query: {
    userList: (_, args, { prisma }) => {
      return prisma.user.findMany()
    },

    user: (_, args, { prisma }) => {
      return prisma.user.findFirst({ where: { uuid: args.id } })
    }
  },
  Mutation: {
    addUser: (_, args) => {
      return createUser(args.body!)
    }
  }
}

export default resolver
