import NewCard from '../components/NewCard';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from '../my-context';
import { useContext, useEffect } from 'react';

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
<<<<<<< HEAD
    <Container className='text-center'>
      <h1>Mis productos !</h1>
      <Row>
        <Col>
          <CardUno market={productosFiltrados} />
        </Col>
      </Row>
    </Container>
=======
    <>
      <div className='cards-container'>
        <NewCard market={productosFiltrados} />
      </div>
      <Footer />
    </>
>>>>>>> a4d046aeceedb612e7b8842de3dae1877684ca84
  );
};

export default Productos;
