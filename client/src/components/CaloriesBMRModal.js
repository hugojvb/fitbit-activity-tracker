import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const CaloriesBMRModal = () => {
  const context = useContext(Context);
  const { showCaloriesBMRModal, closeCaloriesBMRModal } = context;
  const { summary } = context.activity;

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
        <p>Base Metabolic Rate</p>
        <div className="modal_table">
          <p>BMR</p>
          <p>{summary.caloriesBMR}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CaloriesBMRModal;
