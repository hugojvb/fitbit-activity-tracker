import React, { useState, useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";

const Modals = (props) => {
  const context = useContext(Context);

  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = (e) => {
    setOpen(false);
  };

  return (
    <Modal isOpen={props.openModal} onClose={props.closeModal} center>
      <p>{context.activity.summary.caloriesOut}</p>
    </Modal>
  );
};

export default Modals;
