import { useNavigate } from 'react-router-dom';
import { useUsuarios } from '../hooks/useUsuarios';
import { UserTable } from '../components/UserTable';

export function ListaUsuarios() {
  const navigate = useNavigate();
  const { usuarios, loading, error, eliminar } = useUsuarios();

  const handleEliminar = async (id: number) => {
    if (window.confirm('¿Eliminar este usuario?')) {
      await eliminar(id);
    }
  };

  if (loading) return <div className="loading">Cargando usuarios...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page">
      <div className="page-header">
        <h1>Usuarios</h1>
        <button className="btn-create" onClick={() => navigate('/crear')}>
          + Nuevo usuario
        </button>
      </div>
      <UserTable
        usuarios={usuarios}
        onEditar={(id) => navigate(`/editar/${id}`)}
        onEliminar={handleEliminar}
      />
    </div>
  );
}
