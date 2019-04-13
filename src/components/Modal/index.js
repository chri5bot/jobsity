import React, { useContext, useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";

import "../../styles/react-datepicker.css";

import ModalContext from "../../context/ModalContext";
import EventContext from "../../context/EventContext";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "500px",
    width: "500px",
    zIndex: "9999"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function CustomModal() {
  const { modalIsOpen, handleCloseModal } = useContext(ModalContext);
  const { handleAddEvent } = useContext(EventContext);

  const title = useFormInput("");
  const color = useFormInput("");
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
        <input {...title} />
        <br />
        <label>Color: </label>
        <input {...color} />
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
            disabled={!title.value || !color.value}
            onClick={() => {
              if (!title.value || !color.value) {
                return;
              }

              handleAddEvent({
                start: startDate,
                end: endDate,
                title: title.value
              });

              handleCloseModal();
            }}
          >
            Save Event
          </button>
          <button onClick={handleCloseModal}>close modal</button>
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

export default CustomModal;
