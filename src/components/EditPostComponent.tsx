import { Form } from "react-bootstrap";
import { IPost } from "../model/IPost";
import { useState } from "react";

function EditPostComponent({ id, title, body }: IPost) {
  const [editedData, setEditedData] = useState<IPost>({
    id,
    title,
    body,
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData((prevData: IPost) => ({
      ...prevData,
      title: event.target.value,
    }));
    
    console.log("New Title: ", editedData);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedData((prevData: IPost) => ({
      ...prevData,
      body: event.target.value,
    }));

    console.log("New body: ", editedData);
  };

  return (
    <>
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
    </>
  );
}

export default EditPostComponent;
