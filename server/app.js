const { obtenerProductos, agregarProducto, eliminarProducto } = require('./consultas/consultasProducto');
const { registrarUsuario, verificarCredenciales } = require('./consultas/consultasUsuario')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(3000, console.log('SERVIDOR ENCENDIDO'));

app.use(express.json());

//Rutas producto
app.get('/productos', async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos)
  } catch(error) {
    res.status(500).send(error);
  }
})

app.post('/productos', async (req, res) => {
  try {
    //ojo con este, revisar si en vez del id_usuario pasar el email y con el email despues buscar el id?
    const { titulo, descripcion, precio, img, id_usuario } = req.body;
    await agregarProducto(titulo, descripcion, precio, img, id_usuario)
    res.send('Producto agregado con exito')
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/productos/:id', async (req, res) => {
  try {
    const { id } = req.params
    await eliminarProducto(id)
    res.send('Producto eliminado con exito')
  } catch(err) {
    res.status(500).send(err)
  }
})

//Rutas usuarios
app.post('/usuarios', async (req, res) => {
  try {
      const usuario = req.body
      await registrarUsuario(usuario)
      res.send('Usuario creado con éxito!')
  }
  catch (error) {
      res.status(500).send(error)
  }
})

app.post('/login', async (req, res) => {
  try {
      const {email, password} = req.body
      await verificarCredenciales(email, password)
      const token = jwt.sign({ email }, "az_AZ")
      res.send(token)
  } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
  }
})


