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
        <p>Progress this Week</p>
        <div className="modal_table">
          <p>
            {bodyFat.fat.map((c) => (
              <li key={c.date}>{c.date.substring(5)}</li>
            ))}
          </p>
          <p>
            {bodyFat.fat.map((c) => (
              <li key={c.date}>{c.fat}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default BodyFatModal;
