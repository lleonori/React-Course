import Modal from "react-bootstrap/Modal";
import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ModalType } from "../enums/modal";
import { ModalContext } from "../context/ModalContext";

function ModalComponent({ children }: { children: React.ReactNode }) {
  const modalProps = useContext(ModalContext)!;

  if (modalProps.modalType === ModalType.UPDATE) {
    return (
      <Modal
        show={modalProps.show}
        onHide={modalProps.handleClose}
        animation={modalProps.animation}
        backdrop={modalProps.backdrop}
        keyboard={modalProps.keyboard}
      >
        <Modal.Header className="alert alert-primary" closeButton>
          <Modal.Title>{modalProps.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Row className="mb-4">
            <Col>{modalProps.modalBody}</Col>
          </Row>
          <Row>{children}</Row>
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal
        show={modalProps.show}
        onHide={modalProps.handleClose}
        animation={modalProps.animation}
        backdrop={modalProps.backdrop}
        keyboard={modalProps.keyboard}
      >
        <Modal.Header className="alert alert-danger" closeButton>
          <Modal.Title>{modalProps.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Row className="mb-4">
            <Col>{modalProps.modalBody}</Col>
          </Row>
          <Row>{children}</Row>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModalComponent;
