import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { usuarioService } from '../services/usuario.service';
import type { UpdateUsuarioPayload } from '../types/Usuario';

export function EditarUsuario() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initial, setInitial] = useState<{ nombre: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    usuarioService
      .findOne(Number(id))
      .then((u) => setInitial({ nombre: u.nombre, email: u.email }))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (data: UpdateUsuarioPayload) => {
    await usuarioService.update(Number(id), data);
    navigate('/');
  };

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="page">
      <h1>Editar usuario</h1>
      <UserForm
        initial={initial ?? undefined}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
        isEdit
      />
    </div>
  );
}
