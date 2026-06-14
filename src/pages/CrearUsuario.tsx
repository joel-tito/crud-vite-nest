import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { usuarioService } from '../services/usuario.service';
import type { CreateUsuarioPayload } from '../types/Usuario';

export function CrearUsuario() {
  const navigate = useNavigate();

  const handleSubmit = async (data: CreateUsuarioPayload) => {
    await usuarioService.create(data);
    navigate('/');
  };

  return (
    <div className="page">
      <h1>Crear usuario</h1>
      <UserForm
        onCreate={handleSubmit}
        onCancel={() => navigate('/')}
      />
    </div>
  );
}
