import CardProducto from './CardProducto';

function NewCard({ market }) {
  return (
    market &&
    market.map((producto) => (
      <CardProducto producto={producto} key={producto.id_producto} />
    ))
  );
}

export default NewCard;
