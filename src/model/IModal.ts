import { Backdrop, ModalType } from "../enums/modal";

export interface IModal {
  show: boolean;
  handleClose: () => void;
  animation: boolean;
  keyboard: boolean;
  backdrop: Backdrop;
  modalType: ModalType;
  modalTitle: string;
  modalBody: string;
}
