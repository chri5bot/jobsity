import React, { useState } from "react";
import { GlobalStyle } from "./styles/reset.css";
import Routes from "./routes";
import ModalContext from "./context/ModalContext";
import EventContext from "./context/EventContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const initialEvents = JSON.parse(
    window.localStorage.getItem("events") || "[]"
  );
  const [events, setEvents] = useState(initialEvents);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleAddEvent = event => {
    const newEvents = [...events, event];

    setEvents(newEvents);

    window.localStorage.setItem("events", JSON.stringify(newEvents));
  };

  const handleDeleteEvents = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
    >
      <EventContext.Provider
        value={{ events, handleAddEvent, handleDeleteEvents }}
      >
        <GlobalStyle />
        <Routes />
      </EventContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
