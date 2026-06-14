import type { Usuario } from '../types/Usuario';

interface Props {
  usuarios: Usuario[];
  onEditar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export function UserTable({ usuarios, onEditar, onEliminar }: Props) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha de creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              <td className="actions">
                <button className="btn-edit" onClick={() => onEditar(u.id)}>
                  Editar
                </button>
                <button className="btn-delete" onClick={() => onEliminar(u.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {usuarios.length === 0 && (
            <tr>
              <td colSpan={5} className="empty">
                No hay usuarios registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
