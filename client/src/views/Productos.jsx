import CardUno from '../components/CardUno';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from '../my-context';
import { useContext, useEffect} from 'react';

const Productos = () => {
  const { market, usuario } = useContext(MyContext);

  // Debe estar con sesion iniciada para entrar a esta view (por si tipea la url a mano)
  const usuarioSinIniciarSesion = () => {
    if (!localStorage.getItem('token')) {
      navigate('/error');
    }
  };

  useEffect(() => {
    usuarioSinIniciarSesion();
  }, []);

  const productosFiltrados = market.filter(
    (prod) => prod.id_usuario === usuario.id_usuario
  );

  return (
    <Container className='text-center'>
      <h1>Mis productos !</h1>
      <Row>
        <Col>
          <CardUno market={productosFiltrados} />
        </Col>
      </Row>
    </Container>
  );
};

export default Productos;
