import { useContext } from "react";
import { Button } from "react-bootstrap";
import { IPost } from "../model/IPost";
import { ModalContext } from "../context/ModalContext";

interface ChildComponentProps {
  dataToEdit: IPost;
  onSubmit: (dataToEdit: IPost) => void; // Define the type of the onClick prop function
}

function DeletePostComponent(props: ChildComponentProps) {
  const modalProps = useContext(ModalContext)!;

  const handleSubmit = () => {
    props.onSubmit(props.dataToEdit);
  };

  return (
    <div className="form-footer mt-5">
      <Button variant="secondary me-2" onClick={modalProps.handleClose}>
        Chiudi
      </Button>
      <Button variant="danger" onClick={handleSubmit}>
        Elimina
      </Button>
    </div>
  );
}

export default DeletePostComponent;
