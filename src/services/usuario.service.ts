import axios from 'axios';
import type { Usuario, CreateUsuarioPayload, UpdateUsuarioPayload } from '../types/Usuario';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const usuarioService = {
  async findAll(): Promise<Usuario[]> {
    const { data } = await api.get<Usuario[]>('/usuarios');
    return data;
  },

  async findOne(id: number): Promise<Usuario> {
    const { data } = await api.get<Usuario>(`/usuarios/${id}`);
    return data;
  },

  async create(payload: CreateUsuarioPayload): Promise<Usuario> {
    const { data } = await api.post<Usuario>('/usuarios', payload);
    return data;
  },

  async update(id: number, payload: UpdateUsuarioPayload): Promise<Usuario> {
    const { data } = await api.patch<Usuario>(`/usuarios/${id}`, payload);
    return data;
  },

  async remove(id: number): Promise<void> {
    await api.delete(`/usuarios/${id}`);
  },
};
