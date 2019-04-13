import React, { useContext, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import Select from "react-select";

import "../../../styles/react-datepicker.css";

import ModalContext from "../../../context/ModalContext";
import EventContext from "../../../context/EventContext";

import { customStyles } from "../style";

import { colorOptions, useFormInput } from "../";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditModal({ eventSelected }) {
  const { editModalIsOpen, handleCloseEditModal } = useContext(ModalContext);
  const { handleEditEvent, handleDeleteEvent } = useContext(EventContext);

  const title = useFormInput("");
  const [color, setColor] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Modal
      isOpen={editModalIsOpen}
      contentLabel="Edit your event"
      overlayClassName="Overlay"
      style={customStyles}
    >
      <div>Edit this event</div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Title ({eventSelected && eventSelected.title}): </label>
        <input {...title} placeholder="New Title" />
        <br />
        <label>Color ({eventSelected && eventSelected.color}): </label>
        <Select value={color} onChange={setColor} options={colorOptions} />

        <br />
        <label>
          Start Date ({eventSelected && eventSelected.start.toString()}):
        </label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        <br />
        <label>
          End Date ({eventSelected && eventSelected.end.toString()}):
        </label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={() => {
              handleEditEvent(eventSelected, {
                title: title.value ? title.value : eventSelected.title,
                color: color.value ? color.value : eventSelected.color,
                start: startDate ? startDate : eventSelected.start,
                end: endDate ? endDate : eventSelected.end
              });

              handleCloseEditModal();
            }}
          >
            Edit Event
          </button>
          <button
            style={{ margin: "0 1rem" }}
            onClick={() => {
              handleDeleteEvent(eventSelected);
              handleCloseEditModal();
            }}
          >
            Delete Event
          </button>
          <button onClick={handleCloseEditModal}>Close modal</button>
        </div>
      </form>
    </Modal>
  );
}

export default EditModal;
