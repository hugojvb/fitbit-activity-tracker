import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const SleepModal = () => {
  const context = useContext(Context);
  const { showSleepModal, closeSleepModal } = context;

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
        <p>hello</p>
      </Modal>
    </div>
  );
};

export default SleepModal;
