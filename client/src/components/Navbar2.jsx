import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Navbar2() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container fluid >
                <Link className="text-dark fs-1 text-bold text-decoration-none" to="/">MarketPlace</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 "
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Link className="justify-content-end text-dark fs-5 text-decoration-none p-1 " to="/registrar">Registráte!</Link>
                        <Link className="justify-content  text-dark fs-5 text-decoration-none p-1" to="/login">Ingresá!</Link>
                        <Link className="justify-content-end text-dark fs-5 text-decoration-none p-1" to="/carrito">Carro</Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar2;