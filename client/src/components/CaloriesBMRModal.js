import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const CaloriesBMRModal = () => {
  const context = useContext(Context);
  const { showCaloriesBMRModal, closeCaloriesBMRModal } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showCaloriesBMRModal}
        onClose={closeCaloriesBMRModal}
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

export default CaloriesBMRModal;
