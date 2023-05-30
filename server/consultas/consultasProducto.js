const pool = require('../database/clientConnect')
const { eliminarFavoritoTotal } = require('./consultasFavoritos')
const { eliminarProductoDeLosCarros } = require('./consultasCarro')

const obtenerProductos = async () => {
  const consulta = 'SELECT * FROM productos';
  const { rows } = await pool.query(consulta);

  return rows
}

const agregarProducto = async (titulo, descripcion, precio, img, id_usuario) => {
  const consulta = 'INSERT INTO productos VALUES (DEFAULT, $1, $2, $3, $4, 0, $5)';
  const valores = [titulo, descripcion, precio, img, id_usuario];
  const results = await pool.query(consulta, valores);
  console.log('Producto agregado');
};

const eliminarProducto = async (id_producto, id_usuario) => {
  try {
    await eliminarFavoritoTotal(id_producto)
  } catch(err) {
    console.log('No existe producto en la tabla favoritos');
  }
  
  try {
    await eliminarProductoDeLosCarros(id_producto)
  } catch(err) {
    console.log('No existe producto en la tabla carro');
  }

  const consulta = 'DELETE FROM productos WHERE id_producto = $1 AND id_usuario = $2';
  const valores = [id_producto, id_usuario];
  const result = await pool.query(consulta, valores);
  console.log('Producto eliminado con exito');
};


module.exports = { obtenerProductos, agregarProducto, eliminarProducto };
