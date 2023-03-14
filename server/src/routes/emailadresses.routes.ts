import { Router } from 'express'
import emailadressesController from '../controllers/emailadresses.controller'

const emailadressesRouter = Router()

emailadressesRouter.get('/', emailadressesController.findAllemailadresses)
emailadressesRouter.post('/create', emailadressesController.createemailadress)
emailadressesRouter.put('/update/:id', emailadressesController.updateemailadress)
emailadressesRouter.delete('/:id', emailadressesController.deleteemailadress)

export default emailadressesRouter