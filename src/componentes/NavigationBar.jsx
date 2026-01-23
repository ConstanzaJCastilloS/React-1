import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavigationBar() {

  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía</Navbar.Brand>
        <Nav className="me-auto">

          <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
            <Link to="/">🍕 Home</Link>
          </Button>

          {token && (
            <>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                <Link to="/profile"> 🔓 Profile </Link>
              </Button>
              
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                🔒 Logout
              </Button>
            </>
          )}

          {!token && (
            <>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                <Link to="/login">🔐 Login </Link>
              </Button>
             
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                <Link to="/registro">📝 Register </Link>
              </Button>
            
            </>
          )}
        </Nav>


        {!token && (
          <Button variant="outline-info">
            <Link to="/cart">🛒 Total: ${total}</Link>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

