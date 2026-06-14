import { useState, useEffect, useCallback } from 'react';
import { usuarioService } from '../services/usuario.service';
import type { Usuario, CreateUsuarioPayload, UpdateUsuarioPayload } from '../types/Usuario';

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listar = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await usuarioService.findAll();
      setUsuarios(data);
    } catch {
      setError('Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  }, []);

  const crear = useCallback(async (payload: CreateUsuarioPayload) => {
    await usuarioService.create(payload);
    await listar();
  }, [listar]);

  const actualizar = useCallback(async (id: number, payload: UpdateUsuarioPayload) => {
    await usuarioService.update(id, payload);
    await listar();
  }, [listar]);

  const eliminar = useCallback(async (id: number) => {
    await usuarioService.remove(id);
    await listar();
  }, [listar]);

  useEffect(() => {
    listar();
  }, [listar]);

  return { usuarios, loading, error, listar, crear, actualizar, eliminar };
}
