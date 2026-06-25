import { Integration } from "@prisma/client";
import prisma from "../config/db";
import { CreateIntegrationBody } from "../types";

export const IntegrationRepository = {
    async findAll(): Promise<Integration[]> {
        return prisma.integration.findMany()
    },

    async findById(id: number): Promise<Integration | null> {
        return prisma.integration.findUnique({
            where: {id:id}
        })
    },

    async create(data: CreateIntegrationBody): Promise<Integration> {
        return prisma.integration.create({
            data: {
                name: data.name,
                clientId: data.clientId,
                events: data.events ? {
                    create: data.events
                }: undefined
            },
            include: {events: true}
        })
    }

};