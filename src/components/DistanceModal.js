import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const DistanceModal = () => {
  const context = useContext(Context);
  const { showDistanceModal, closeDistanceModal, activity } = context;

  const formatKey = (key) => {
    switch (key) {
      case "total":
        return;
      case "lightlyActive":
        return "Light";
      case "moderatelyActive":
        return "Moderate";
      case "veryActive":
        return "Intense";
      case "sedentaryActive":
        return;
      case "loggedActivities":
        return;
      case "tracker":
        return;
      default:
        return key;
    }
  };

  const formatValue = (key, value) => {
    switch (key) {
      case "total":
        return;
      case "lightlyActive":
        return value + " km";
      case "moderatelyActive":
        return value + " km";
      case "veryActive":
        return value + " km";
      case "sedentaryActive":
        return;
      case "loggedActivities":
        return;
      case "tracker":
        return;
      default:
        return value + " km";
    }
  };

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
              <li key={c.activity}>{formatKey(c.activity)}</li>
            ))}
          </p>
          <p>
            {activity.summary.distances.map((c) => (
              <li key={c.activity}>{formatValue(c.activity, c.distance)}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default DistanceModal;
