import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from "./my-context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
//Views

import Carrito from './views/Carrito';
import Productos from './views/Productos.jsx'
import Registrar from './views/Registrar'
import Login from './views/Login';
import NewHome from './views/NewHome';

//Components
import Navbar2 from './components/Navbar2';


function App() {

  const [market, setMarket] = useState([])


                                                                           //REACT//
  const datos = async () => {
    const endpoint = './perros.json'  // .json
    const response = await fetch(endpoint)
    const data = await response.json()
    setMarket(data)
  }

  useEffect(() => {
    datos()
  }, []);




  const globalState = { market }

  return (
    <>
      <MyContext.Provider value={globalState}>
        <BrowserRouter>
          <Navbar2/>
          <Routes>
            <Route path='/' element={<NewHome />} />
            <Route path='/registrar' element={<Registrar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path='/productos/:id' element={<Productos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App;


 