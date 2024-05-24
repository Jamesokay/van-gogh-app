const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function dropTables() {
  await prisma.$executeRaw`DROP TABLE IF EXISTS "User" CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Generation" CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS "GeneratedImage" CASCADE;`;

  console.log('Tables dropped');
}

dropTables()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
