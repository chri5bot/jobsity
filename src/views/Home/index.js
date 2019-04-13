import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import "../../styles/react-big-calendar.css";
import { HomeContainer } from "./style";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

function Home() {
  const events = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date(2019, 4, 1),
      end: new Date(2019, 4, 2)
    },
    {
      id: 1,
      title: "Long Event",
      start: new Date(2015, 3, 7),
      end: new Date(2015, 3, 10)
    }
  ];
  return (
    <HomeContainer>
      <BigCalendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={BigCalendar.Views.MONTH}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        onSelectEvent={event => alert(event.title)}
      />
    </HomeContainer>
  );
}

export default Home;
