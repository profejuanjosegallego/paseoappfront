import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroUsuario from './paginas/RegistroUsuario'
import Home from './paginas/Home'
import RegistroEspacio from './paginas/RegistroEspacio'
import RegistroReserva from './paginas/RegistroReserva'
import {ListaEspacios} from './paginas/ListaEspacios'
import {ListaUsuarios} from './paginas/ListaUsuarios'
import {ListaReservas} from './paginas/ListaReservas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/espacios" element={<RegistroEspacio />} />
        <Route path="/reservas" element={<RegistroReserva />} />
        <Route path="/ListaEspacios" element={<ListaEspacios />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/lista-reservas" element={<ListaReservas />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
