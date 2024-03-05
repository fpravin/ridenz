import { PrismaClient } from "@prisma/client";
// import { uuid } from "uuidv4";

const prisma = new PrismaClient();

async function main() {
    //Dummy user Seed

    await prisma.user.create({
        data: {
            // id: uuid(),
            firstName: 'Pravin',
            lastName: 'Fernando',
            email: 'pravinfernando3@gmail.com',
            isAdmin: true,
            password: '12345',
            phoneNumber: ''
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });