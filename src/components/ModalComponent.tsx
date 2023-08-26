// @src/components/Modal.tsx
import { useState, Dispatch, SetStateAction } from "react";
import ReactPortal from "./ReactPortal";
import { Modal, Button } from "react-bootstrap";
// Define the props of Modal.
type ModalProps = {
  isOpen: boolean;
  setOn: Dispatch<SetStateAction<boolean>>;
  title?: string;
  promptText?: JSX.Element;
  handleDelete?: Function;
};
// Modal component.
const ModalComponent = ({
  isOpen,
  setOn,
  title,
  promptText,
  handleDelete,
}: ModalProps) => {
  // Manage button enabled/disabled state.
  const [disabled, setDisabled] = useState<boolean>(false);
  // Return null if isOpen props from parent is false.
  if (!isOpen) return null;
  // Run when delete is confirmed.
  const confirmDelete = (): void => {
    // Disable the buttons (this could also be anything).
    setDisabled(true);
    // Execute delete comment or reply.
    if (handleDelete) handleDelete();
  };
  // Run when modal is closed.
  const closeModal = (): void => {
    setOn(false);
  };
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <Modal
        show={isOpen}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{promptText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal} disabled={disabled}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmDelete} disabled={disabled}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ReactPortal>
  );
};
export default ModalComponent;
