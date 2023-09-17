import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { IPost } from "../model/IPost";
import { ModalContext } from "../context/ModalContext";

interface ChildComponentProps {
  dataToEdit: IPost;
  onSubmit: (dataToEdit: IPost) => void; // Define the type of the onClick prop function
}

function EditPostComponent(props: ChildComponentProps) {
  const modalProps = useContext(ModalContext)!;
  const [editedData, setEditedData] = useState<IPost>(props.dataToEdit!);

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

  const handleSubmit = () => {
    props.onSubmit(editedData);
  };

  return (
    <>
      <Row>
        <Col>
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
        </Col>
      </Row>
      <div className="form-footer mt-5">
        <Button variant="secondary me-2" onClick={modalProps.handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salva
        </Button>
      </div>
    </>
  );
}

export default EditPostComponent;
