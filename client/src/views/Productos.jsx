import CardUno from '../components/CardUno';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from '../my-context';
import { useContext } from 'react';


const Productos = () => {
  const { market, usuario } = useContext(MyContext);

  const productosFiltrados = market.filter(
    (prod) => prod.id_usuario === usuario.id_usuario
  );

  return (
    <Container fluid>
      <h1>Productos</h1>
      <Row>
        <Col>
          <CardUno market={productosFiltrados} />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Productos;
