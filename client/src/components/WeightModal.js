import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const WeightModal = () => {
  const context = useContext(Context);
  const { showWeightModal, closeWeightModal, bodyWeight } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showWeightModal}
        onClose={closeWeightModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Progress This Week</p>
        <div className="modal_table">
          <p>
            {bodyWeight.weight.map((c) => (
              <li key={c.date}>{c.date.substring(5)}</li>
            ))}
          </p>
          <p>
            {bodyWeight.weight.map((c) => (
              <li key={c.date}>{c.weight}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default WeightModal;
