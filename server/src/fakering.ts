import { faker } from '@faker-js/faker';
import { PrismaClient } from "@prisma/client";


export class fake {

    prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient({
            log: ['query'],
          })
    }

    test() {
        
    
        const randomName = faker.name.fullName(); 
        const nameToString = faker.name.firstName.toString()
        const name = faker.name.firstName;
        
        console.log("randomName" + randomName);
        //console.log(nameToString);
        //console.log(name);


    }

    async createUser() {
        const newUser = await this.prisma.users.create({
            data: {
              name: 'Alice',
              surname: 'Aliceson',
              note: 'Wow.. aa note',
              company: 'The Company'
            },
          })    
          console.log("-newUser---- Start");
          console.log(newUser);
          console.log("-newUser---- End");
    }

    async getUsers() {
        const users = await this.prisma.users.findMany();
        
        console.log("-getUsers---- Start");
        console.log(users);
        console.log("-getUsers---- End");
          
    }
}

