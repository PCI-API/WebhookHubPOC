export interface CreateClientBody {
  name: string;
  external_id: string;
}

export interface UpdateClientBody {
  name?: string;
  external_id?: string;
}

export interface ClientResponse {
  id: number;
  name: string;
  external_id: string;
}

export interface CreateEventBody {
    type: string
    url: string
}

export interface CreateIntegrationBody {
    name: string
    clientId: number
    events?: CreateEventBody[]
}

export interface UpdateIntegrationBody {
    name: string
    events?: CreateEventBody[]
}