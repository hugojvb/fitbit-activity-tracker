import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const HeartRateModal = () => {
  const context = useContext(Context);
  const { showHeartRateModal, closeHeartRateModal } = context;

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
        <p>hello</p>
      </Modal>
    </div>
  );
};

export default HeartRateModal;
