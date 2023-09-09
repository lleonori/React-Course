import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Form } from "react-bootstrap";
import { IModal } from "../model/IModal";
import { useEffect, useState } from "react";
import { IPost } from "../model/IPost";

function ModalComponent({
  show,
  handleClose,
  confirmModal,
  animation,
  keyboard,
  backdrop,
  modalTitle,
  modalBody,
  modalData,
}: IModal) {
  const [editedData, setEditedData] = useState<IPost>({
    id: 0,
    title: "",
    body: "",
  });

  useEffect(() => {
    if (modalData) {
      setEditedData(modalData);
    }
  }, [modalData]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData((prevData: IPost) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData((prevData: IPost) => ({
      ...prevData,
      body: event.target.value,
    }));
  };

  return (
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
          <Form>
            <Form.Group className="mb-3" controlId="postTitle">
              <Form.Label>
                <strong>Titolo del Post:</strong>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Titolo del Post"
                value={editedData.title}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="postContent"></Form.Group>
            <Form.Label>
              <strong>Contenuto del Post:</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Contenuto del Post"
              value={editedData.body}
              onChange={handleBodyChange}
            />
          </Form>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={() => confirmModal(editedData)}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
