import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

function Registrar() {
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
        <Container>
            <Form onSubmit={registrarUsuario}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresá tu nombre" value={usuario.nombre}
        onChange={handleSetUsuario} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresá tu email"  value={usuario.email}
        onChange={handleSetUsuario} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ingresá tu Password" value={usuario.password}
        onChange={handleSetUsuario} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Creá tu cuenta
                </Button>
            </Form>
        </Container>
    );
}

export default Registrar;