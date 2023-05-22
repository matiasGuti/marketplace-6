import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import MyContext from '../my-context';
import Container from 'react-bootstrap/Container';

function CardUno() {
  const { market } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <Container className='container bg-success m-6'>
      <Row md={2} lg={3} className='g-5 m-5'>
        {market.map((perro) => (
          <Col className='d-flex justify-content-center' key={perro.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img src={perro.img} />
              <Card.Body>
                <Card.Title className='text-center'>{`${perro.name}`}</Card.Title>
              </Card.Body>
              <ListGroup className='list-group-flush'></ListGroup>
              <Card.Body>
                <h3 className='text-center'>$ {`${perro.price}`}</h3>
                <Row className='d-flex flex-column text-center'>
                  <Col>
                    <Button
                      variant='outline-success m-1'
                      onClick={() => navigate(`/perro/${perro.id}`)}
                    >
                      Ver más
                    </Button>
                  </Col>
                  <Col>
                    <Button variant='outline-success m-1'>
                      Añadir al carro
                    </Button>
                  </Col>
                  <Col>
                    <Button variant='outline-success m-1'>Favorito</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardUno;
