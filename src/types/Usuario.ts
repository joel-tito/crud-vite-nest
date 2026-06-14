export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  createdAt: string;
}

export interface CreateUsuarioPayload {
  nombre: string;
  email: string;
}

export interface UpdateUsuarioPayload {
  nombre?: string;
  email?: string;
}
