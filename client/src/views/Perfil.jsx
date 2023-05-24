import { useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MyContext from '../my-context';

//Estilos
import '../styles/Perfil.css';

const Perfil = () => {
  const { usuario } = useContext(MyContext);
  const navigate = useNavigate();

  const usuarioSinIniciarSesion = () => {
    if (!localStorage.getItem('token')) {
      navigate('/error');
    }
  };

  useEffect(() => {
    usuarioSinIniciarSesion();
  }, []);

  return (
    <div className='perfil-container'>
      <h2>Bienvenido {usuario.nombre} a tu perfil</h2>
      <div className='opciones-perfil'>
        <div className='ver-productos'>
          <p className='titulo-perfil'>Ver mis productos</p>
          <Link className='btn-perfil' to='/productos'>
            Ver
          </Link>
        </div>
        <div className='crea-producto'>
          <p className='titulo-perfil'>Subir un producto</p>
          <Link className='btn-perfil' to='/subir'>
            Subir
          </Link>
        </div>
        <div className='ver-favoritos'>
          <p className='titulo-perfil'>Ir a favoritos</p>
          <Link className='btn-perfil' to='/favoritos'>
            Ir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
