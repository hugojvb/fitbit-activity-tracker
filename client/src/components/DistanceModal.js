import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const DistanceModal = () => {
  const context = useContext(Context);
  const { showDistanceModal, closeDistanceModal, activity } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showDistanceModal}
        onClose={closeDistanceModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Distances Today</p>
        <div className="modal_table">
          <p>
            {activity.summary.distances.map((c) => (
              <li key={c.activity}>{c.activity}</li>
            ))}
          </p>
          <p>
            {activity.summary.distances.map((c) => (
              <li key={c.activity}>{c.distance} km</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DistanceModal;
