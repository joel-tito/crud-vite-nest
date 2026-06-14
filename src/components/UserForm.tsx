import { useState } from 'react';
import type { CreateUsuarioPayload, UpdateUsuarioPayload } from '../types/Usuario';

interface Props {
  initial?: { nombre: string; email: string };
  onCreate?: (data: CreateUsuarioPayload) => Promise<void>;
  onUpdate?: (data: UpdateUsuarioPayload) => Promise<void>;
  onCancel: () => void;
  isEdit?: boolean;
}

export function UserForm({ initial, onCreate, onUpdate, onCancel, isEdit }: Props) {
  const [nombre, setNombre] = useState(initial?.nombre ?? '');
  const [email, setEmail] = useState(initial?.email ?? '');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (isEdit) {
        await onUpdate?.({ nombre, email });
      } else {
        await onCreate?.({ nombre, email });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-save" disabled={submitting}>
          {submitting ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear'}
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
