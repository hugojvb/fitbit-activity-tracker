import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const HeartRateModal = () => {
  const context = useContext(Context);
  const { showHeartRateModal, closeHeartRateModal, heartRate } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showHeartRateModal}
        onClose={closeHeartRateModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>HeartRate</p>
        <div className="modal_table">
          <p>
            {heartRate["activities-heart"][
              heartRate["activities-heart"].length - 1
            ].value.heartRateZones.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </p>
          <p>
            {heartRate["activities-heart"][
              heartRate["activities-heart"].length - 1
            ].value.heartRateZones.map((c) => (
              <li key={c.name}>{c.minutes} min</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default HeartRateModal;
