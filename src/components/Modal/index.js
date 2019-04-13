import React, { useContext } from "react";
import Modal from "react-modal";

import ModalContext from "../../context/ModalContext";

const customStyles = {
  content: {
    top: "15%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function CustomModal() {
  const { modalIsOpen, handleCloseModal } = useContext(ModalContext);
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Insert your event"
    >
      <div>Insert your event</div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
        <button onClick={handleCloseModal}>close modal</button>
      </form>
    </Modal>
  );
}

export default CustomModal;
