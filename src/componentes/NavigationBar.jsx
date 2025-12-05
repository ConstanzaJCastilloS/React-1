import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavigationBar() {

  const total = 25000;
  const token = false;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
        <Nav className="me-auto">

          <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
            🍕 Home
          </Button>

          {token && (
            <>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                🔓 Profile
              </Button>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                🔒 Logout
              </Button>
            </>
          )}

          {!token && (
            <>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                🔐 Login
              </Button>
              <Button className="nav_button" variant="outline-light" style={{ marginRight: '5px' }}>
                📝 Register
              </Button>
            </>
          )}
        </Nav>

        {/* Total solo si hay token */}
        {!token && (
          <Button variant="outline-info">
            🛒 Total: ${total}
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

