import { useEffect, useState } from "react";
import { ModalType } from "../enums/modal";
import { Card, Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function HomeComponent() {
  // inizializzare lo state con un array vuoto
  // dovendo cicle i post che ci tornano dalla response
  // potrebbe succedere
  // 1- nessun post disponibile
  // 2- la response non è ancora stata ricevuta e quindi cicleremo una lista di array vuoto
  const [posts, setPosts] = useState<Post[]>([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [modalType, setModalType] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => setShow(false);

  const deletePost = (id: number) => {
    setModalType(ModalType.DELETE);
    setModalTitle("Elimina Post");
    setModalBody("Sicuro di voler eliminare il Post?");
    setShow(true);
    setId(id);
  };

  const updatePost = (id: number) => {
    setModalType(ModalType.UPDATE);
    setModalTitle("Modifica Post");
    setModalBody("Compila i campi per modificare il Post");
    setShow(true);
    setId(id);
  };

  const getData = () => {
    fetch("https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      });
  };

  const confirmModalAction = () => {
    if (modalType === ModalType.UPDATE) {
      submitUpdate();
    } else if (modalType === ModalType.DELETE) {
      submitDelete();
    }
  };

  const submitUpdate = async () => {
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts/${id}`,
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

  const submitDelete = async () => {
    const settings = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    try {
      const fetchResponse = await fetch(
        `https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts/${id}`,
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
                    onClick={() => updatePost(post.id)}
                  >
                    Modifica
                  </Button>
                  <Button variant="danger" onClick={() => deletePost(post.id)}>
                    Elimina
                  </Button>
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
                    onClick={() => updatePost(post.id)}
                  >
                    Modifica
                  </Button>
                  <Button variant="danger" onClick={() => deletePost(post.id)}>
                    Elimina
                  </Button>
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
        backdrop="static"
        modalTitle={modalTitle}
        modalBody={modalBody}
        modalType={modalType}
      />
    </>
  );
}

export default HomeComponent;
