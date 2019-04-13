import React, { useState } from "react";
import { GlobalStyle } from "./styles/reset.css";
import Routes from "./routes";
import ModalContext from "./context/ModalContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
    >
      <GlobalStyle />
      <Routes />
    </ModalContext.Provider>
  );
}

export default App;
