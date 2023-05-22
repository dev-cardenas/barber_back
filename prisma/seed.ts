import { PrismaClient } from '@prisma/client'
import {
  typeUsers,
  roles,
  permissions,
  accountPlan,
  coinType,
  tax,
} from '../src/constants'
const prisma = new PrismaClient()

async function main() {
  const createManyTypeUser = await prisma.typeUser.createMany({
    data: typeUsers,
    skipDuplicates: true,
  })

  const createManyRole = await prisma.userRole.createMany({
    data: roles,
    skipDuplicates: true,
  })

  const createManyPermission = await prisma.userPermission.createMany({
    data: permissions,
    skipDuplicates: true,
  })

  const createManyAccountPlan = await prisma.accountPlan.createMany({
    data: accountPlan,
    skipDuplicates: true,
  })

  const createManyCoinType = await prisma.coinType.createMany({
    data: coinType,
    skipDuplicates: true,
  })

  const createManyTax = await prisma.tax.createMany({
    data: tax,
    skipDuplicates: true,
  })

  console.log(
    createManyTypeUser,
    createManyRole,
    createManyPermission,
    createManyAccountPlan,
    createManyCoinType,
    createManyTax,
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
