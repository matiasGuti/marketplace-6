import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

// Estilos
import '../styles/Login.css'

function Login() {
  return (
    <Container className='container-login'>
      <h2>Ingresar</h2>
      <Form className='form-container'>
        <Form.Group className='input-container' controlId='formBasicEmail'>
          <Form.Label className='input-label'>Email</Form.Label>
          <Form.Control type='email' placeholder='Ingresa tu email' />
        </Form.Group>

        <Form.Group className='input-container' controlId='formBasicPassword'>
          <Form.Label className='input-label'>Password</Form.Label>
          <Form.Control type='password' placeholder='Ingresa tu Password' />
        </Form.Group>
        <Button variant='success' className='btn-login'>
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
