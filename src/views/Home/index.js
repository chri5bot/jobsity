import React, { useState } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import "../../styles/react-big-calendar.css";
import {
  HomeContainer,
  DeleteButtonContainer,
  DeleteEventsButton
} from "./style";

const localizer = BigCalendar.momentLocalizer(moment);

function Home() {
  const initialEvents = JSON.parse(
    window.localStorage.getItem("events") || "[]"
  );
  const [events, setEvents] = useState(initialEvents);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      const newEvents = [
        ...events,
        {
          start,
          end,
          title
        }
      ];

      setEvents(newEvents);

      window.localStorage.setItem("events", JSON.stringify(newEvents));
    }
  };

  const handleDeleteEvents = () => {
    window.localStorage.clear();
    window.location.reload();
  };
  return (
    <HomeContainer>
      <DeleteButtonContainer>
        <DeleteEventsButton onClick={handleDeleteEvents}>
          Delete Events
        </DeleteEventsButton>
      </DeleteButtonContainer>
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
