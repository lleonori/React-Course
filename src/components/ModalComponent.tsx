import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalType } from "../enums/modal";

function ModalComponent({
  show,
  handleClose,
  confirmModal,
  animation,
  keyboard,
  backdrop,
  modalTitle,
  modalBody,
  modalType,
}: any) {
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
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="alert alert-primary mb-4">
              {modalBody}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <Button variant="primary" onClick={confirmModal}>
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
            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="alert alert-danger mb-4">
              {modalBody}
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
  } else {
    return null;
  }
}

export default ModalComponent;
