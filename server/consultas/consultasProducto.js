const DATABASE_URL =
  'postgresql://matias:@mrkt-latam-10806.7tt.cockroachlabs.cloud:26257/marketplace?sslmode=verify-full';

const { Client } = require('pg');

const pool = new Client(DATABASE_URL);

const obtenerProductos = async () => {
  pool.connect();
  const query = 'SELECT * FROM productos';
  const { rows } = await pool.query(query);
  pool.end();

  return rows
}

const agregarProducto = async (
  titulo,
  descripcion,
  precio,
  img,
  fav,
  id_usuario
) => {
  pool.connect();
  const query = 'INSERT INTO productos VALUES (DEFAULT, $1, $2, $3, $4, 0, $5)';
  const values = [titulo, descripcion, precio, img, id_usuario];
  const results = await pool.query(query, values);
  console.log('Producto agregado');
  pool.end();
};

const eliminarProducto = async (id) => {
  pool.connect();
  const query = 'DELETE FROM productos WHERE id_producto = $1';
  const value = [id];
  const result = await pool.query(query, value);
  console.log('Producto eliminado con exito');
  pool.end();
};

module.exports = { obtenerProductos, agregarProducto, eliminarProducto };
