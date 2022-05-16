import { PrismaClient, User } from '@prisma/client'

export type IContext = {
  session: any // TODO: set session types
  prisma: PrismaClient
  user: User
}

export async function createContext({}): Promise<IContext> {
  const prisma = new PrismaClient()

  const user = (await prisma.user.findFirst()) as User

  //   const session = await getSession({ req }); // TODO: credentials not working on graphql studio (/api/graphql)
  return {
    session: { isAuth: true },
    prisma,
    user
  }
}
