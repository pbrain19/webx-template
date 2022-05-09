import { v4 as uuidv4 } from 'uuid'
import { inputUserType } from '@/graphql/generated'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (input: inputUserType) => {
  const user = await prisma.user.create({
    data: {
      ...input,
      uuid: uuidv4()
    }
  })

  return user
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findFirst({ where: { uuid: id } })

  return user
}

export const getUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}
