import { PrismaClient } from '@prisma/client'

export type IContext = {
  session: any // TODO: set session types
  prisma: PrismaClient
}

export function createContext({}): IContext {
  const prisma = new PrismaClient()
  //   const session = await getSession({ req }); // TODO: credentials not working on graphql studio (/api/graphql)
  return {
    session: { isAuth: true },
    prisma
  }
}
