import { Button } from "react-bootstrap";
import { Backdrop, ModalType } from "../enums/modal";
import { Color } from "../enums/color";
import { useModal } from "./context/ModalContext";

function HomeComponent2() {
  const { showModal } = useModal();
  // const { showModal } = useGlobalModalContext();

  const createModal = () => {
    showModal({
      modalType: ModalType.CREATE,
      show: true,
      animation: true,
      keyboard: false,
      backdrop: Backdrop.STATIC,
      headerColor: Color.PRIMARY,
      modalTitle: "Crea",
      modalBody: "Crea il tuo post",
    });
  };

  const updateModal = () => {
    showModal({
      modalType: ModalType.UPDATE,
      show: true,
      animation: true,
      keyboard: false,
      backdrop: Backdrop.STATIC,
      headerColor: Color.WARNING,
      modalTitle: "Modifica",
      modalBody: "Modifica il tuo post",
    });
  };

  const deleteModal = () => {
    showModal({
      modalType: ModalType.DELETE,
      show: true,
      animation: true,
      keyboard: false,
      backdrop: Backdrop.STATIC,
      headerColor: Color.DANGER,
      modalTitle: "Elimina",
      modalBody: "Elimina il tuo post",
    });
  };

  return (
    <>
      <Button variant="primary me-2 mt-3" onClick={createModal}>
        Crea
      </Button>
      <Button variant="warning me-2 mt-3" onClick={updateModal}>
        Modifica
      </Button>
      <Button variant="danger mt-3" onClick={deleteModal}>
        Elimina
      </Button>
    </>
  );
}

export default HomeComponent2;
