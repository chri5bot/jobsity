import React, { useContext, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "../../../styles/react-datepicker.css";

import ModalContext from "../../../context/ModalContext";
import EventContext from "../../../context/EventContext";

import { customStyles } from "../style";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function EditModal({ eventSelected }) {
  const { editModalIsOpen, handleCloseEditModal } = useContext(ModalContext);

  const { handleEditEvent } = useContext(EventContext);

  const title = useFormInput("");

  const color = useFormInput("");
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
        <input {...color} placeholder="New Color" />
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
            Save Event
          </button>
          <button onClick={handleCloseEditModal}>close modal</button>
        </div>
      </form>
    </Modal>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default EditModal;
