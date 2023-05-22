import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import NavbarHome from './assets/components/NavbarHome'
import Registro from './assets/views/Registro/Registro';

//Estilos
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarHome />
        <Routes>
          <Route path='/' element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
