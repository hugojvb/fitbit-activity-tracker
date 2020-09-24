import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const StepsModal = () => {
  const context = useContext(Context);
  const { showStepsModal, closeStepsModal } = context;
  const { summary } = context.activity;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showStepsModal}
        onClose={closeStepsModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Total Steps</p>
        <div className="modal_table">
          <p className="key">Steps</p>
          <p>{summary.steps}</p>
        </div>
      </Modal>
    </div>
  );
};

export default StepsModal;
