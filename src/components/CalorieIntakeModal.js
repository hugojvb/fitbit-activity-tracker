import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const CalorieIntakeModal = () => {
  const context = useContext(Context);
  const { showCalorieIntakeModal, closeCalorieIntakeModal, food } = context;

  const formatKey = (key) => {
    switch (key) {
      case "calories":
        return "Calories";
      case "carbs":
        return "Carbs";
      case "fat":
        return "Fat";
      case "fiber":
        return "Fiber";
      case "protein":
        return "Protein";
      case "sodium":
        return "Sodium";
      case "water":
        return "Water";
      default:
        return key;
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showCalorieIntakeModal}
        onClose={closeCalorieIntakeModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Nutrition</p>
        <div className="modal_table">
          <p className="key">
            {Object.keys(food.summary).map((key) => (
              <li key={key}>{formatKey(key)}</li>
            ))}
          </p>
          <p>
            {Object.values(food.summary).map((value) => (
              <li key={value}>{value}g</li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default CalorieIntakeModal;
