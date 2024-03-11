import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";
// import { uuid } from "uuidv4";

const prisma = new PrismaClient();

async function main() {
    //Dummy user Seed

    await prisma.user.create({
        data: {
            id: uuid(),
            firstName: 'Pravin',
            lastName: 'Fernando',
            email: 'pravinfernando4@gmail.com',
            isAdmin: true,
            password: '12345',
            phoneNumber: ''
        }
    })

    // await prisma.product.create({
    //     data: {
    //         name: 'Nike Air',
    //         description: 'Nike Air technology consists of pressurized air inside a tough yet flexible bag and provides more flexibility and spring without compromising structure.',
    //         price: 500.20,
    //         qauntity: 5,
    //         userId: '3d5397c4-3c80-45c5-bb5a-597f81ea5512'
    //     }
    // })
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