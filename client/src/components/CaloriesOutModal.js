import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const CaloriesOutModal = () => {
  const context = useContext(Context);
  const { showCaloriesOutModal, closeCaloriesOutModal } = context;
  const { summary } = context.activity;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showCaloriesOutModal}
        onClose={closeCaloriesOutModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Calories Burned Today</p>
        <div className="modal_table">
          <p>Calories Out</p>
          <p>{summary.caloriesOut} ckal</p>
        </div>
      </Modal>
    </div>
  );
};

export default CaloriesOutModal;
