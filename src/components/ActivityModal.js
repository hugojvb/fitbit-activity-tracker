import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const ActivityModal = () => {
  const context = useContext(Context);
  const { showActivityModal, closeActivityModal, activity } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showActivityModal}
        onClose={closeActivityModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Activities Today</p>
        <div className="modal_table">
          <p>
            {activity.activities.map((c) => (
              <li className="key" key={c.startTime}>
                {c.startTime}
              </li>
            ))}
          </p>
          <p>
            {activity.activities.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ActivityModal;
