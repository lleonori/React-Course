import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { IPost } from "../model/IPost";
import ModalComponent from "./ModalComponent";
import { Backdrop, ModalType } from "../enums/modal";
import EditPostComponent from "./EditPostComponent";
import { ModalContext } from "../context/ModalContext";
import DeletePostComponent from "./DeletePostComponent";

function HomeComponent() {
  // variabile per utilizzo modale
  const animation: boolean = false;
  const keyboard: boolean = false;
  const backdrop: Backdrop = Backdrop.STATIC;
  // inizializzare lo state con un array vuoto
  // dovendo cicle i post che ci tornano dalla response
  // potrebbe succedere
  // 1- nessun post disponibile
  // 2- la response non è ancora stata ricevuta e quindi cicleremo una lista di array vuoto
  const [posts, setPosts] = useState<IPost[]>([]);
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.UPDATE);
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

  const handleSubmit = (postData: IPost) => {
    if (modalType === ModalType.UPDATE) {
      submitUpdate(postData);
    } else if (modalType === ModalType.DELETE) {
      submitDelete(postData.id);
    }
  };

  const submitUpdate = async (postData: IPost) => {
    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };
    try {
      const fetchResponse = await fetch(
        `https://64ce4c350c01d81da3eeac17.mockapi.io/api/posts/${postData.id}`,
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

  const submitDelete = async (id: number) => {
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

  const updatePost = (post: IPost) => {
    setModalType(ModalType.UPDATE);
    setModalTitle("Modifica Post");
    setModalBody("Compila i campi per modificare il Post");
    setShow(true);
    setDataToEdit(post);
  };

  const deletePost = (post: IPost) => {
    setModalType(ModalType.DELETE);
    setModalTitle("Elimina Post");
    setModalBody("Sicuro di voler eliminare il Post?");
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
                  <Button variant="danger" onClick={() => deletePost(post)}>
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
                    onClick={() => updatePost(post)}
                  >
                    Modifica
                  </Button>
                  <Button variant="danger" onClick={() => deletePost(post)}>
                    Elimina
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          );
        }
      })}

      <ModalContext.Provider
        value={{
          show,
          handleClose,
          animation,
          keyboard,
          backdrop,
          modalType,
          modalTitle,
          modalBody,
        }}
      >
        <ModalComponent>
          {modalType === ModalType.UPDATE ? (
            <EditPostComponent
              dataToEdit={dataToEdit!}
              onSubmit={handleSubmit}
            />
          ) : (
            <DeletePostComponent
              dataToEdit={dataToEdit!}
              onSubmit={handleSubmit}
            />
          )}
        </ModalComponent>
      </ModalContext.Provider>
    </>
  );
}

export default HomeComponent;
