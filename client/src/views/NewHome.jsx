import CardUno from '../components/CardUno';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyContext from '../my-context';
import { useContext } from 'react';

function NewHome() {
  const { market } = useContext(MyContext);
  
  return (
    <Container className='text-center'>
      <h1>Productos</h1>
      <Row>
        <Col>
          <CardUno market={market}/>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default NewHome;