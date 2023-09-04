import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { useGlobalModalContext } from "./context/ModalContext";

function ModalComponentContext() {
  const { hideModal, store } = useGlobalModalContext();

  const handleModalToggle = () => {
    hideModal();
  };

  return (
    <Modal
      show={store.show}
      onHide={handleModalToggle}
      animation={store.animation}
      backdrop={store.backdrop}
      keyboard={store.keyboard}
    >
      <Modal.Header className={`alert alert-${store.headerColor}`} closeButton>
        <Modal.Title>{store.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-4">
          <Col>{store.modalBody}</Col>
        </Row>
        <Row>
          <Col>children</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalToggle}>
          Chiudi
        </Button>
        <Button variant="danger" onClick={handleModalToggle}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponentContext;
