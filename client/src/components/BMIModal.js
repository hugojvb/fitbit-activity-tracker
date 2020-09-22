import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const BMIModal = () => {
  const context = useContext(Context);
  const { showBMIModal, closeBMIModal } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showBMIModal}
        onClose={closeBMIModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>hello</p>
      </Modal>
    </div>
  );
};

export default BMIModal;
