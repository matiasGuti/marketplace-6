import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../my-context';
import Card from 'react-bootstrap/Card';

import '../styles/CardUno.css'

function CardUno() {
  const { market } = useContext(MyContext);
  const navigate = useNavigate();

  console.log(market);

  return (
    

<div class="card">
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
  </div>
      

   
  );
}

export default CardUno;
