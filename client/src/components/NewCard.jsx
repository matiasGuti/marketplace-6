import CardProducto from './CardProducto';

function NewCard({ market }) {

  const dataFormateada = market.map((item) => {
    return {
      ...item,
      precio: Number(item.precio)
    };
  });


  return (
    dataFormateada &&
    dataFormateada.map((producto) => (
      <CardProducto producto={producto} key={producto.id_producto} />
    ))
  );
}

export default NewCard;
