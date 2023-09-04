import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalType } from "../enums/modal";
import { Row, Col } from "react-bootstrap";
import { IModal } from "../model/Imodal";

function ModalComponent({
  show,
  handleClose,
  confirmModal,
  animation,
  keyboard,
  backdrop,
  modalType,
  modalTitle,
  modalBody,
  children,
}: IModal) {
  if (modalType === ModalType.UPDATE) {
    return (
      <>
        {
          <Modal
            show={show}
            onHide={handleClose}
            animation={animation}
            backdrop={backdrop}
            keyboard={keyboard}
          >
            <Modal.Header className="alert alert-primary" closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="mb-4">
                <Col>{modalBody}</Col>
              </Row>
              <Row>
                <Col>{children}</Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="danger" onClick={confirmModal}>
                Salva
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </>
    );
  } else if (modalType === ModalType.DELETE) {
    return (
      <>
        {
          <Modal
            show={show}
            onHide={handleClose}
            animation={animation}
            backdrop={backdrop}
            keyboard={keyboard}
          >
            <Modal.Header className="alert alert-danger" closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalBody}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="danger" onClick={confirmModal}>
                Salva
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </>
    );
  } else {
    return null;
  }
}

export default ModalComponent;
