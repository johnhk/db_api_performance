import { Router } from 'express'
import usersRouter from './users.routes'
import emailadressesRouter from './emailadresses.routes'

const router = Router()

router.get('/', (req, res) => {
    return res.json({ message: 'Welcome to JOHNS API' })
})

router.use('/users', usersRouter)

export default router
