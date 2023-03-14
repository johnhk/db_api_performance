import express, { Request, Response  } from "express";
import { PrismaClient } from "@prisma/client";
import routes from './routes'

const prisma = new PrismaClient();

const app = express();

// app.use(express.json())
app.use('/api', routes)


// app.get('/ping', (req: Request, res: Response) => {
//     res.json({message: 'hello'});
// });


// app.get('/users', async (req: Request, res: Response) => {

//     const users = await prisma.users.findMany();

//     res.json(users);
// });


const PORT = 3001;

app.listen(PORT);
console.log(`listening on http://localhost:${PORT}`);

