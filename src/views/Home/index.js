import React, { useContext } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import Modal from "../../components/Modal";
import EventContext from "../../context/EventContext";
import ModalContext from "../../context/ModalContext";

import "../../styles/react-big-calendar.css";
import {
  HomeContainer,
  ButtonsContainer,
  DeleteEventsButton,
  AddEventButton
} from "./style";

const localizer = BigCalendar.momentLocalizer(moment);

function Home() {
  const { events, handleAddEvent, handleDeleteEvents } = useContext(
    EventContext
  );

  const { handleOpenModal } = useContext(ModalContext);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event name");

    if (title) {
      handleAddEvent({
        start,
        end,
        title
      });
    }
  };

  return (
    <HomeContainer>
      <Modal />
      <ButtonsContainer>
        <AddEventButton onClick={handleOpenModal}>Add Event</AddEventButton>
        <DeleteEventsButton onClick={handleDeleteEvents}>
          Delete Events
        </DeleteEventsButton>
      </ButtonsContainer>
      <BigCalendar
        popup
        selectable
        events={events}
        localizer={localizer}
        defaultDate={new Date()}
        onSelectSlot={handleSelectSlot}
        views={{ month: true, week: true }}
        defaultView={BigCalendar.Views.MONTH}
        scrollToTime={new Date(1970, 1, 1, 6)}
        onSelectEvent={event => alert(event.title)}
      />
    </HomeContainer>
  );
}

export default Home;
