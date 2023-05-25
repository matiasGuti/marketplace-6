import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
/* import MyContext from '../my-context'; */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardUno({ market }) {
  const navigate = useNavigate();

  return (
    market &&
    market.map((producto) => (
      <Card key={producto.id_producto} style={{ width: '18rem' }}>
        <Card.Img variant='top' src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.titulo}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
          <Button
            variant='primary'
            onClick={() => navigate(`/producto/${producto.id_producto}`)}
          >
            Detalles
          </Button>
          <Button variant='primary'>Al Carro</Button>
          <Button variant='primary'>Favorito</Button>
        </Card.Body>
      </Card>
    ))
  );
}

export default CardUno;
