import { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { IPost } from "../model/IPost";
import ModalComponent from "./ModalComponent";
import { Backdrop } from "../enums/modal";

function HomeComponent() {
  // inizializzare lo state con un array vuoto
  // dovendo cicle i post che ci tornano dalla response
  // potrebbe succedere
  // 1- nessun post disponibile
  // 2- la response non è ancora stata ricevuta e quindi cicleremo una lista di array vuoto
  const [posts, setPosts] = useState<IPost[]>([]);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [dataToEdit, setDataToEdit] = useState<IPost>();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  };

  const handleClose = () => setShow(false);

  const confirmModalAction = async (data: IPost) => {
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const fetchResponse = await fetch(
        `https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts/${data.id}`,
        settings
      );
      await fetchResponse.json();
      // modal hide
      setShow(false);
      // refresh data after delete record
      getData();
    } catch (e) {
      return e;
    }
  };

  const updatePost = (post: IPost) => {
    setModalTitle("Modifica Post");
    setModalBody("Compila i campi per modificare il Post");
    setShow(true);
    setDataToEdit(post);
  };

  return (
    <>
      {posts!.map((post, index) => {
        if (index === 0) {
          return (
            <Card key={post.id} className="mt-3 mb-3">
              <Card.Header>{post.id}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {post.title} </p>
                  <footer className="blockquote-footer">{post.body}</footer>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-between">
                {post.id} days ago
                <div>
                  <Button
                    variant="secondary me-2"
                    onClick={() => updatePost(post)}
                  >
                    Modifica
                  </Button>
                  <Button variant="danger">Elimina</Button>
                </div>
              </Card.Footer>
            </Card>
          );
        } else {
          return (
            <Card key={post.id} className="mb-3">
              <Card.Header>{post.id}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {post.title} </p>
                  <footer className="blockquote-footer">{post.body}</footer>
                </blockquote>
              </Card.Body>
              <Card.Footer className="text-muted d-flex justify-content-between">
                {post.id} days ago
                <div>
                  <Button
                    variant="secondary me-2"
                    onClick={() => updatePost(post)}
                  >
                    Modifica
                  </Button>
                  <Button variant="danger">Elimina</Button>
                </div>
              </Card.Footer>
            </Card>
          );
        }
      })}

      <ModalComponent
        show={show}
        handleClose={handleClose}
        confirmModal={confirmModalAction}
        animation={false}
        keyboard={false}
        backdrop={Backdrop.STATIC}
        modalTitle={modalTitle}
        modalBody={modalBody}
        modalData={dataToEdit}
      />
    </>
  );
}

export default HomeComponent;
