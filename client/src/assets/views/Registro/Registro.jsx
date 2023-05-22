import { useState } from 'react';
import axios from 'axios';
import './Registro.css';

const Registro = () => {
  const [usuario, setUsuario] = useState('');

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServidor = 'http://localhost:3000';
    const endpoint = '/usuarios';
    try {
      await axios.post(urlServidor + endpoint, usuario)
      alert('Usuario registrado con exito')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='form-registro-container' onSubmit={registrarUsuario}>
      <h2>Registrarte</h2>
      <input
        type='text'
        name='nombre'
        placeholder='Nombre'
        value={usuario.nombre}
        onChange={handleSetUsuario}
      />
      <input
        type='email'
        name='email'
        placeholder='Correo'
        value={usuario.email}
        onChange={handleSetUsuario}
      />
      <input
        type='password'
        name='password'
        placeholder='Contraseña'
        value={usuario.password}
        onChange={handleSetUsuario}
      />
      <button className='btn-registro'>Crear cuenta</button>
    </form>
  );
};

export default Registro;
