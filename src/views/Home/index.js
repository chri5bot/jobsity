import React, { useState } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import "../../styles/react-big-calendar.css";
import { HomeContainer } from "./style";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

function Home() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title
        }
      ]);
    }
  };
  return (
    <HomeContainer>
      <BigCalendar
        popup
        selectable
        localizer={localizer}
        events={events}
        defaultView={BigCalendar.Views.MONTH}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelectSlot}
      />
    </HomeContainer>
  );
}

export default Home;
