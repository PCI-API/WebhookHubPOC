import { Client } from '@prisma/client';
import prisma from '../config/db';
import { CreateClientBody, UpdateClientBody } from '../types';

export const ClientRepository = {

  async findAll(): Promise<Client[]> {
    return prisma.client.findMany();
  },

  async findById(id: number): Promise<Client | null> {
    return prisma.client.findUnique({
      where: {id}
    })
  },

  async create(data: CreateClientBody): Promise<Client> {
    return prisma.client.create({data})
  },

  async update(id: number, data: UpdateClientBody): Promise<Client> {
    return prisma.client.update({
      where: {
        id: id
      },
      data: data
    })
  }
};
