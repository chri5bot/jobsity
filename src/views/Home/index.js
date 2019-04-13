import React, { useContext, useState } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import CreateEvent from "../../components/Modal/CreateEvent";
import EditEvent from "../../components/Modal/EditEvent";
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

  const { handleOpenModal, handleOpenEditModal } = useContext(ModalContext);

  const [eventSelected, setEventSelected] = useState();

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

  const handleSelectEvent = event => {
    setEventSelected(event);
    handleOpenEditModal();
  };

  const handleEventPropGetter = event => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor: backgroundColor
    };
    return {
      style
    };
  };

  return (
    <HomeContainer>
      <CreateEvent />
      <EditEvent eventSelected={eventSelected} />
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
        onSelectEvent={handleSelectEvent}
        eventPropGetter={handleEventPropGetter}
      />
    </HomeContainer>
  );
}

export default Home;
