import { Response, Request } from 'express';
import { ClientService } from '../service/clientService';
import { CreateClientBody } from '../types';

export const ClientController = {

  async listClients(req: Request, res: Response): Promise<void> {
    const users = await ClientService.listClients()
    res.json(users)
  },

  async getClientById(req: Request, res: Response): Promise<void> {
        const {id} = req.params
        const numericId = parseInt(id as string);
        const user = await ClientService.getClientById(numericId);
        if (user == null) {
            res.status(404).json(
                {"message": "Client not found for provided ID"}
            )
        }
        else {
            res.json(user)
        }
    },
    
  async createClient(req: Request<{}, {}, CreateClientBody>, res: Response): Promise<void> {
    const createdUser = await ClientService.createClient(req.body)
    res.json(createdUser)
  }
};
