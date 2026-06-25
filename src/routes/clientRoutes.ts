import { Router } from 'express';
import { ClientController } from '../controllers/clientController';

const router = Router();

router.get('/', ClientController.listClients);
router.get('/:id', ClientController.getClientById)
router.post('/', ClientController.createClient)

export default router;
