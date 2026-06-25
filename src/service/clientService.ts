import { Client } from '@prisma/client';
import { ClientRepository } from '../repository/clientRepository';
import { CreateClientBody } from '../types';

export const ClientService = {
  async listClients(): Promise<Client[]> {
    return await ClientRepository.findAll();
  },

  async getClientById(id: number): Promise<Client | null> {
    return await ClientRepository.findById(id);
  },

  async createClient(data: CreateClientBody): Promise<Client> {
    return await ClientRepository.create(data);
  },
};
