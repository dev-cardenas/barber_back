import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const createManyTypeUser = await prisma.typeUser.createMany({
    data: [
      {
        type: 'client',
        description: 'It is the client who creates the schedules',
      },
      {
        type: 'provider',
        description: 'Is who receives the schedules',
      },
      {
        type: 'provider_employee',
        description: "is the supplier's employee",
      },
    ],
    skipDuplicates: true,
  })

  const createManyRole = await prisma.userRole.createMany({
    data: [
      {
        user_role: 'owner',
        description: 'owner company',
      },
      {
        user_role: 'employee',
        description: 'employee company',
      },
      {
        user_role: 'admin',
        description: 'It is a colaborator in company',
      },
    ],
    skipDuplicates: true,
  })

  const createManyPermission = await prisma.userPermission.createMany({
    data: [
      {
        user_permission: 'read',
        description: 'It is a permission to read resource',
      },
      {
        user_permission: 'edit',
        description: 'It is a permission to edit resource',
      },
      {
        user_permission: 'create',
        description: 'It is a permission to create resource',
      },
      {
        user_permission: 'delete',
        description: 'It is a permission to delete resource',
      },
      {
        user_permission: 'update',
        description: 'It is a permission to update',
      },
      {
        user_permission: 'admin',
        description: 'It is a permission to do everything',
      },
    ],
    skipDuplicates: true,
  })

  const createManyAccountPlan = await prisma.accountPlan.createMany({
    data: [
      {
        code: '001',
        name: 'Basic',
        description: 'It is a basic plan to test app',
        price: 0,
        available_days: 90,
      },
      {
        code: '002',
        name: 'Pro',
        description: 'It is a pro plan',
        price: 300000,
        available_days: 30,
      },
    ],
    skipDuplicates: true,
  })

  const createManyCoinType = await prisma.coinType.createMany({
    data: [
      {
        name: 'PYG',
        symbol: 'Gs',
      },
      {
        name: 'USD',
        symbol: '$',
      },
      {
        name: 'BRL',
        symbol: 'R$',
      },
    ],
    skipDuplicates: true,
  })

  const createManyTax = await prisma.tax.createMany({
    data: [
      {
        percentage: '5',
        type: 'IVA',
      },
      {
        percentage: '10',
        type: 'IVA',
      },
    ],
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
