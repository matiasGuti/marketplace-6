import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../my-context';
import Card from 'react-bootstrap/Card';

import '../styles/CardUno.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import '../styles/CardUno.css'

function CardUno({ market }) {
  const navigate = useNavigate();
  const { usuario } = useContext(MyContext);

  const agregarAlCarro = async (producto) => {
    // Revisar si inicio sesion, sino se manda a iniciar sesion
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }

    const urlServidor = 'http://localhost:3000';
    const endpoint = '/carro';

    // Revisar si el usuario ya tiene el producto en su carro
    try {
      const endpointMasQuery = `/check_carro?id_usuario=${usuario.id_usuario}&id_producto=${producto.id_producto}`;
      var { data: productoExiste } = await axios.get(
        urlServidor + endpointMasQuery
      );
    } catch (error) {
      console.log(error.message);
    }

    const informacionProducto = {
      id_usuario: usuario.id_usuario,
      precio: producto.precio,
      id_producto: producto.id_producto,
    };

    // Reviso primero si el producto ya esta agregado al carro, en ese caso sumo uno a la cantidad
    if (productoExiste) {
      const endpointSumar = '/sumar_uno';

      await axios.post(urlServidor + endpointSumar, informacionProducto);
      alert('Producto agregado al carro');
    } else {
      // En caso contrario agrego el producto al carro
      try {
        await axios.post(urlServidor + endpoint, informacionProducto);
        alert('Producto agregado al carro');
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    
    
    market &&
    market.map((producto) => (
      <div className='container-card'>
        <Card key={producto.id_producto} style={{ width: '20rem' }} className='p-1 m-1' >
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
      </div>

    ))
  

  );
}

export default CardUno;



/* <div class="card">
<Card.Img variant="top" src="https://placedog.net/500" />
    <div class="card-info">
      <h3>Título de la tarjeta</h3>
      <p>Precio: $19.99</p>
      <p>Descripción de la tarjeta</p>
      <div class="card-buttons">
        <button>Comprar</button>
        <button>Agregar al carrito</button>
        <button>Favorito</button>
      </div>
    </div>
  </div> */
      

