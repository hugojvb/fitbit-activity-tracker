import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const StepsModal = () => {
  const context = useContext(Context);
  const { showModal, closeModal } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showModal}
        onClose={closeModal}
        closeOnEsc
        closeOnOverlayClick
        center
      >
        <p>hello</p>
        <button onClick={closeModal}>is this the same?</button>
      </Modal>
    </div>
  );
};

export default StepsModal;
