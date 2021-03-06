import React, { useContext, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import Select from "react-select";

import "../../../styles/react-datepicker.css";
import { customStyles } from "../style";
import ModalContext from "../../../context/ModalContext";
import EventContext from "../../../context/EventContext";

import { colorOptions, useFormInput } from "../";

Modal.setAppElement("#root");

function CustomModal() {
  const { modalIsOpen, handleCloseModal } = useContext(ModalContext);
  const { handleAddEvent } = useContext(EventContext);

  const title = useFormInput("");
  const [color, setColor] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Insert your event"
      overlayClassName="Overlay"
      style={customStyles}
    >
      <div>Insert your event</div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Title: </label>
        <input {...title} placeholder="Title" />
        <br />
        <label>Color: </label>
        <Select value={color} onChange={setColor} options={colorOptions} />
        <br />
        <label>Start Date: </label>
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
        <label>End Date: </label>
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
            disabled={!title.value || !color}
            onClick={() => {
              if (!title.value || !color.value) {
                return;
              }

              handleAddEvent({
                start: startDate,
                end: endDate,
                title: title.value,
                color: color.value
              });

              handleCloseModal();
            }}
          >
            Save Event
          </button>
          <button onClick={handleCloseModal}>Close modal</button>
        </div>
      </form>
    </Modal>
  );
}

export default CustomModal;
