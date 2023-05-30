import NewCard from '../components/NewCard';
import MyContext from '../my-context';
import { useContext, useEffect } from 'react';

// Estilos
import '../styles/CardProducto.css';

const Productos = () => {
  const { market, usuario } = useContext(MyContext);

  useEffect(() => {
    // Debe estar con sesion iniciada para entrar a esta view (por si tipea la url a mano)
    const usuarioSinIniciarSesion = () => {
      if (!localStorage.getItem('token')) {
        navigate('/error');
      }
    };

    usuarioSinIniciarSesion();
  }, []);

  const productosFiltrados = market.filter(
    (prod) => prod.id_usuario === usuario.id_usuario
  );

  return (
    <>
      <div className='cards-container'>
        <NewCard market={productosFiltrados} />
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> 68ce54f25e18b6e026d67a321c9938b47321a8f0
    </>
  );
};

export default Productos;
