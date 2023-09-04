import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
// import HomeComponent from "./components/HomeComponent";
import HomeComponent2 from "./components/HomeComponent2";
import { GlobalModal } from "./components/context/ModalContext";

function App() {
  return (
    <>
      <GlobalModal>
        <NavbarComponent />
        <Container className="pt-5 pb-5" fluid>
          <Row>
            <Col>
              <HomeComponent2 />
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </GlobalModal>
    </>
  );
}

export default App;
