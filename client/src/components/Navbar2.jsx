import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

// Estilos
import '../styles/Navbar.css'

function Navbar2() {
  return (
    <Navbar className='navbar' expand='lg'>
      <Container fluid>
        <Link className='text-light fs-1 text-bold text-decoration-none' to='/'>
          MarketPlace
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='nav-container'
            navbarScroll
          >
            <Link className='link-navbar fs-6 text-decoration-none' to='/registrar'>
              Crea tu cuenta
            </Link>
            <Link className='link-navbar fs-6 text-decoration-none' to='/login'>
              Ingresa
            </Link>
            <Link className='carro-navbar fs-5 text-decoration-none' to='/carrito'>
              🛒
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
