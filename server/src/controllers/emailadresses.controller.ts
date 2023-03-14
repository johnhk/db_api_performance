import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class emailadressesController {
    public async findAllemailadresses(_: Request, res: Response) {
        try {
            const emailadresses = await prisma.emailadresses.findMany();

            if (emailadresses.length === 0) return res.json({ message: 'No emailadresses' })

            return res.json(emailadresses)
        } catch (err) {
            console.log(err)
        } finally {
            await prisma.$disconnect()
        }
    }

    public async createemailadress(req: Request, res: Response) {
        try {
            const { email, userid } = req.body;

            const emailadress = await prisma.emailadresses.create({
                data: { email, userid }
            });

            return res.status(201).json(emailadress)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }

    public async updateemailadress(req: Request, res: Response) {
        try {
            const { id } = req.params

            const emailadress = await prisma.emailadresses.update({
                data: {
                    ...req.body
                },
                where: { id: Number(id) }
            });

            if (!emailadress) {
                return res.json({ message: 'Not found emailadress' })
            }

            return res.json(emailadress)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect();
        }
    }

    public async deleteemailadress(req: Request, res: Response) {
        try {
            const { id } = req.params

            const emailadress = await prisma.emailadresses.delete({
                where: { id: Number(id) }
            })

            if (!emailadress) return res.json({ message: 'Not found emailadress' })

            return res.status(204).send(emailadress)
        } catch (err) {
            console.log(err)
            await prisma.$disconnect()
        }
    }
}

export default new emailadressesController()