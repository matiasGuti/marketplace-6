import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

import '../styles/CardProducto.css'

function CardProducto() {
  return (
    <Container className='container'>
      <Card style={{ width: '40rem' }} className='p-3 m-1'>
      <Card.Body >
          <Card.Text>Titulo</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src="https://placedog.net/501" className='cardProducto-img' />
        <Card.Body>
          <Card.Text>DescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripciónDescripción</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Text>Precio</Card.Text>
        </Card.Body>
        <Button variant="outline-success">A Favoritos</Button>{' '}
        <br/>
        <Button variant="outline-success">Añadir al carro</Button>{' '}
      </Card>
      <br />
    </Container>
  );
}

export default CardProducto;