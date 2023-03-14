// import { PrismaClient, users } from "@prisma/client";
// import { Users as user  } from "./interfaces";
// import { userModel } from '../models/users.model';

// export class userService {

//     prisma: PrismaClient;

//     constructor() {
//         this.prisma = new PrismaClient({
//             log: ['query'],
//           })
//     }

//     test() {

//         let property: keyof typeof this.prisma; // Type is 'foo' | 'bar'

//         for (property in this.prisma) {
//             console.log(`${property}: ${this.prisma[property]}`);
//         }

//         Object.entries(this.prisma)
//             .forEach(([key, value]) => {
//                 console.log(`${key}: ${value}`);
//                 console.log(typeof key);
//             })

//         let users = this.prisma.users;
//         console.log(users);

//     }

//     create(user) {
//         this.prisma.users.create({
//             data: {
//                 name: "",
//                 surname: "",
//                 note: "",
//                 company: ""
//             },
//         });
//     }
// }
