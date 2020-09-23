import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const BodyFatModal = () => {
  const context = useContext(Context);
  const { showBodyFatModal, closeBodyFatModal, bodyFat } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showBodyFatModal}
        onClose={closeBodyFatModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Body Fat Percentage</p>
        <div className="modal_table">
          <p className="key">Body Fat</p>
          <p>{bodyFat.fat[bodyFat.fat.length - 1]["fat"]}</p>
        </div>
      </Modal>
    </div>
  );
};

export default BodyFatModal;
