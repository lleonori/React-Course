import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container className="pt-5 pb-5" fluid>
        <Row>
          <Col>
            <HomeComponent />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
}

export default App;
