import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
/* import MyContext from '../my-context'; */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import '../styles/CardUno.css'

function CardUno({ market }) {
  const navigate = useNavigate();

  return (
    market &&
    market.map((producto) => (
      <Container className=' d-flex p-3 mb-4'>
        <Card key={producto.id_producto} style={{ width: '20rem' }} className='p-3 m-1' >
          <Card.Img variant='top' src={producto.imagen} className='cardUno-img' />
          <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Text>{producto.precio}</Card.Text>
            <Button
              variant="outline-success"
              onClick={() => navigate(`/producto/${producto.id_producto}`)}>
              Detalles
            </Button>
            <Button variant="outline-success">Al Carro</Button>
            <Button variant="outline-success">Favorito</Button>
          </Card.Body>
        </Card>
      </Container>
    ))
  );
}

export default CardUno;





