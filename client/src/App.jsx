import 'bootstrap/dist/css/bootstrap.min.css';
import MyContext from './my-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

//Views
import Carrito from './views/Carrito';
import Registrar from './views/Registrar';
import Login from './views/Login';
import NewHome from './views/NewHome';

//Components
import Navbar2 from './components/Navbar2';

import './App.css'

function App() {
  const [market, setMarket] = useState([]);

  // const datos = async () => {
  //   const endpoint = './perros.json'; // .json
  //   const response = await fetch(endpoint);
  //   const data = await response.json();
  //   setMarket(data);
  // };

  const datos = async () => {
    const urlServidor = 'http://localhost:3000'
    const endpoint = '/productos'
    try {
      const { data } = await axios.get(urlServidor + endpoint)
      setMarket(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    datos();
  }, []);

  const globalState = { market };

  return (
    <>
      <MyContext.Provider value={globalState}>
        <BrowserRouter>
          <Navbar2 />
          <Routes>
            <Route path='/' element={<NewHome />} />
            <Route path='/registrar' element={<Registrar />} />
            <Route path='/login' element={<Login />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
         

        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
