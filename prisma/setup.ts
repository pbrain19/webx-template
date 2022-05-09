import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({})

// setups up middlewares
export default () =>
  prisma.$use(async (params, next) => {
    // Check incoming query type
    if (params.action == 'delete') {
      // Delete queries
      // Change action to an update
      params.action = 'update'
      params.args['data'] = { deleted: new Date() }
    }
    if (params.action == 'deleteMany') {
      // Delete many queries
      params.action = 'updateMany'
      if (params.args.data != undefined) {
        params.args.data['deleted'] = new Date()
      } else {
        params.args['data'] = { deleted: new Date() }
      }
    }
    return next(params)
  })
