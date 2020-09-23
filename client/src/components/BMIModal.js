import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const BMIModal = () => {
  const context = useContext(Context);
  const { showBMIModal, closeBMIModal, bodyWeight } = context;

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
        <p>Body Mass Index</p>
        <div className="modal_table">
          <p className="key">BMI</p>
          <p>{bodyWeight.weight[bodyWeight.weight.length - 1]["bmi"]}</p>
        </div>
      </Modal>
    </div>
  );
};

export default BMIModal;
