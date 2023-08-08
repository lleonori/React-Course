import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Social WALL</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
