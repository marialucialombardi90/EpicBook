import { useState, createContext } from "react";

export const ModalContext = createContext(null)

export function ModalContextProvider({children}) {

    const [alert, setAlert] = useState(null)
    const [modal, setModal] = useState(false)
    const closeModal = () => {
        setModal(false)
      }
    const value = {alert, setAlert, modal, setModal, closeModal};
    
    
    return (
        <ModalContext.Provider value = {value}>{children}</ModalContext.Provider>
    )
}