import { createContext, useContext, useState } from "react";
import ModalComponentContext from "../ModalComponentContext";
import { Backdrop, ModalType } from "../../enums/modal";
import { Color } from "../../enums/color";

export interface IModal {
  modalType?: ModalType;
  show: boolean;
  animation?: boolean;
  keyboard?: boolean;
  backdrop?: Backdrop;
  headerColor?: Color;
  modalTitle: string;
  modalBody: string;
}

type GlobalModalType = {
  showModal: (modalProps: IModal) => void;
  hideModal: () => void;
  store: IModal;
};

const initalState: GlobalModalType = {
  showModal: () => {},
  hideModal: () => {},
  store: {
    modalType: ModalType.CREATE,
    show: false,
    animation: false,
    keyboard: false,
    backdrop: Backdrop.STATIC,
    modalTitle: "",
    modalBody: "",
  },
};

const GlobalModalContext = createContext(initalState);

export const useModal = () => {
  return useContext(GlobalModalContext);
};

export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal = ({ children }: { children?: React.ReactNode }) => {
  const [store, setStore] = useState<IModal>({
    modalType: ModalType.CREATE,
    show: false,
    animation: false,
    keyboard: false,
    backdrop: Backdrop.STATIC,
    modalTitle: "",
    modalBody: "",
  });

  const showModal = (modalProps: IModal) => {
    setStore(modalProps);
  };

  const hideModal = () => {
    setStore({
      show: false,
      modalTitle: "",
      modalBody: "",
    });
  };

  // const renderComponent = () => {
  //   return <ModalComponentContext />;
  // };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      <ModalComponentContext />
      {children}
    </GlobalModalContext.Provider>
  );
};
