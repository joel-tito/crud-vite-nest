import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ListaUsuarios } from './pages/ListaUsuarios';
import { CrearUsuario } from './pages/CrearUsuario';
import { EditarUsuario } from './pages/EditarUsuario';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ListaUsuarios />} />
          <Route path="/crear" element={<CrearUsuario />} />
          <Route path="/editar/:id" element={<EditarUsuario />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
