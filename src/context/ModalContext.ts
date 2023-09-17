import { createContext } from "react";
import { IModal } from "../model/IModal";

export const ModalContext = createContext<IModal | undefined>(undefined);
