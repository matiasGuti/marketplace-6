import { Link } from 'react-router-dom';

function CardProducto({ producto }) {
  return (
    <div className='producto-card-container'>
      <div className='img-container'>
        <div className='producto-img'>
          <img src={producto.imagen} alt={producto.descripcion} />
        </div>
        <h2 className='img-title'>
          {producto.titulo.charAt(0).toUpperCase() + producto.titulo.slice(1)}
        </h2>
      </div>
      <div className='details-container'>
        <h2 className='detail-price'>
          $ {producto.precio.toLocaleString('es-CL')}
        </h2>
        <div className='detail-button-container'>
          <Link
            className='details-button'
            to={`/producto/${producto.id_producto}`}
          >
            Ver Más 👀
          </Link>
          <button className='cart-button'>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
}

export default CardProducto;