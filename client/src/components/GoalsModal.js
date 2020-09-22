import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const GoalsModal = () => {
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
        styles="modal:{border: 1px solid #111;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(45deg, #333, #111);
          border-radius: 5px;
          padding: 25px;}"
      >
        <p>hello</p>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default GoalsModal;
