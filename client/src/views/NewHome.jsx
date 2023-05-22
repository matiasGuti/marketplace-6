import CardUno from '../components/CardUno';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NewHome() {
  return (

    <Container className='text-center' >

      <h1>Productos</h1>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row >
        <Col><CardUno/></Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default NewHome;