import React, { useState } from "react";

import { GlobalStyle } from "./styles/reset.css";
import Routes from "./routes";
import ModalContext from "./context/ModalContext";
import EventContext from "./context/EventContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const initialEvents = JSON.parse(
    window.localStorage.getItem("events") || "[]"
  );

  const parseDateInitialEvents =
    initialEvents &&
    initialEvents.map(event => {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
      return event;
    });

  const [events, setEvents] = useState(parseDateInitialEvents);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenEditModal = () => {
    setEditModalIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalIsOpen(false);
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

  const handleEditEvent = (lastevent, newEvent) => {
    let newEvents = events.filter(ev => ev !== lastevent);

    newEvents = [...newEvents, newEvent];

    setEvents(newEvents);

    window.localStorage.setItem("events", JSON.stringify(newEvents));
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
        editModalIsOpen,
        handleOpenEditModal,
        handleCloseEditModal
      }}
    >
      <EventContext.Provider
        value={{
          events,
          handleAddEvent,
          handleDeleteEvents,
          handleEditEvent
        }}
      >
        <GlobalStyle />
        <Routes />
      </EventContext.Provider>
    </ModalContext.Provider>
  );
}

export default App;
