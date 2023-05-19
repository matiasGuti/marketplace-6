const pool = require('../database/clientConnect');

const obtenerCarroUsuario = async (id_usuario) => {
  const consulta = 'SELECT * FROM carro WHERE id_usuario = $1'
  const valor = [id_usuario]
  const { rows: carro } = await pool.query(consulta, valor)
  
  return carro
}

const agregarProductoAlCarro = async (id_usuario, precio, id_producto) => {
  const consulta = 'INSERT INTO carro VALUES (DEFAULT, $1, 1, $2, $3)';
  const valores = [id_usuario, precio, id_producto];
  const result = await pool.query(consulta, valores);
  console.log('Producto agregado al carro con exito');
};

const eliminarProductoDelCarro = async (id_usuario, id_producto) => {
  const consulta = 'DELETE FROM carro WHERE id_usuario = $1 AND id_producto = $2';
  const valor = [id_usuario, id_producto];
  const result = await pool.query(consulta, valor);
  console.log('Producto eliminado del carro con exito');
};

const sumarCantidadProducto = async (precio, id_usuario, id_producto) => {
  const consulta =
    'UPDATE carro SET cantidad_total = cantidad_total + 1, precio_total= precio_total + $1  WHERE id_usuario = $2 AND id_producto = $3';
  const valores = [precio, id_usuario, id_producto];
  const result = await pool.query(consulta, valores);
  console.log('Cantidad sumada con exito');
};

const restarCantidadProducto = async (precio, id_usuario, id_producto) => {
  //Revisar si la cantidad total de productos del mismo tipo que tiene en el carro es = 1 para eliminar
  const consulta = 'SELECT cantidad_total FROM carro WHERE id_usuario = $1 AND id_producto = $2'
  const valores = [id_usuario, id_producto]
  const { rows: producto } = await pool.query(consulta, valores)

  if(producto.cantidad_total === 1) {
    await eliminarProductoDelCarro(id_usuario, id_producto)
    console.log('producto eliminado con exito');
    return
  }

  const consulta2 =
    'UPDATE carro SET cantidad_total = cantidad_total - 1, precio_total= precio_total - $1  WHERE id_usuario = $2 AND id_producto = $3';
  const valores2 = [precio, id_usuario, id_producto];
  const result = await pool.query(consulta2, valores2);
  console.log('Cantidad restada con exito');
};

module.exports = { obtenerCarroUsuario, agregarProductoAlCarro, eliminarProductoDelCarro, sumarCantidadProducto, restarCantidadProducto };
