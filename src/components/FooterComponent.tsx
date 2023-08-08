import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function FooterComponent() {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand>Versione 1.0.0</Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default FooterComponent;
