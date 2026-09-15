import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroUsuario from './paginas/RegistroUsuario'
import Home from './paginas/Home'
import RegistroEspacio from './paginas/RegistroEspacio'
import RegistroReserva from './paginas/RegistroReserva'
import { ListaEspacios } from './paginas/ListaEspacios'
import { ListaReservas } from './paginas/LIstaReservas'
import { ListaUsuarios } from './paginas/ListaUsuarios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/espacios" element={<RegistroEspacio />} />
        <Route path="/reservas" element={<RegistroReserva />} />

        <Route path="/listaespacios" element={<ListaEspacios />} />
        <Route path="/listareservas" element={<ListaReservas />} />
        <Route path="/listausuarios" element={<ListaUsuarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App