const DATABASE_URL =
  'postgresql://matias:@mrkt-latam-10806.7tt.cockroachlabs.cloud:26257/marketplace?sslmode=verify-full';

const { Client } = require('pg');

const pool = new Client(DATABASE_URL)

//Codigo ejemplo
const obtenerUsuarios = async () => {
  pool.connect()
  const query = 'SELECT * FROM usuarios';
  const { rows } = await pool.query(query);
  console.log(rows);
  pool.end();  
};

obtenerUsuarios()

