const DATABASE_URL =
    'postgresql://matias:@mrkt-latam-10806.7tt.cockroachlabs.cloud:26257/marketplace?sslmode=verify-full';

const { Client } = require('pg');

const pool = new Client(DATABASE_URL);


const registrarUsuario = async (nombre, email, password) => {
    pool.connect();
    const consulta = 'INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3)'
    const passwordEncriptado = bcrypt.hashSync(password)
    const values = [nombre, email, passwordEncriptado]
    await pool.query(consulta, values)
    pool.end();
}

const verificarCredenciales = async (email, password) => {
    pool.connect();
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows: [usuario], rowCount } = await pool.query(consulta, values)
    const { password: passwordEncriptado } = usuario
    const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptado)
    if (!passwordEsCorrecta || !rowCount) throw { code: 401, message: "Email y/o contraseña incorrecta" }
    pool.end();
}


module.exports = { registrarUsuario, verificarCredenciales }