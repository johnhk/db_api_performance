import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class usersController {
    public async findAllUsers(_: Request, res: Response) {
        try {
            const users = await prisma.users.findMany();

            if (users.length === 0) return res.json({ message: 'No users' })

            return res.json(users)
        } catch (err) {
            console.log(err)
        } finally {
            await prisma.$disconnect()
        }
    }

    public async createUser(req: Request, res: Response) {
        try {
            const { name, surname, note, company } = req.body;

            const user = await prisma.users.create({
                data: { name, surname, note, company }
            });

            return res.status(201).json(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }

    public async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await prisma.users.update({
                data: {
                    ...req.body
                },
                where: { id: Number(id) }
            });

            if (!user) {
                return res.json({ message: 'Not found user' })
            }

            return res.json(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect();
        }
    }

    public async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await prisma.users.delete({
                where: { id: Number(id) }
            })

            if (!user) return res.json({ message: 'Not found user' })

            return res.status(204).send(user)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }
}

export default new usersController()