import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const GoalsModal = () => {
  const context = useContext(Context);
  const { showGoalsModal, closeGoalsModal } = context;
  const { goals } = context.activity;

  console.log(context.activity.goals);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showGoalsModal}
        onClose={closeGoalsModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Goals</p>
        <div className="modal_table">
          <p>
            {Object.keys(goals).map((key) => (
              <li>{key}</li>
            ))}
          </p>
          <p>
            {Object.values(goals).map((value) => (
              <li>{value}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default GoalsModal;
