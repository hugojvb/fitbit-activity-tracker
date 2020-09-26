import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const SleepModal = () => {
  const context = useContext(Context);
  const { showSleepModal, closeSleepModal, sleep } = context;

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showSleepModal}
        onClose={closeSleepModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Sleep this Week</p>
        <div className="modal_table">
          <p>
            {sleep.sleep.map((c) => (
              <li key={c.dateOfSleep}>{c.dateOfSleep.substring(5)}</li>
            ))}
          </p>
          <p>
            {sleep.sleep.map((c) => (
              <li key={c.dateOfSleep}>{c.minutesAsleep}</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default SleepModal;
