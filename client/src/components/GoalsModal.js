import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const GoalsModal = () => {
  const context = useContext(Context);
  const { showGoalsModal, closeGoalsModal } = context;
  const { goals, summary } = context.activity;

  const formatKey = (key) => {
    switch (key) {
      case "caloriesOut":
        return "Calories Out (Kcal)";
      case "activeMinutes":
        return "Minutes Active (Minutes)";
      case "distance":
        return "Distance (Km)";
      case "steps":
        return "Steps";
      case "floors":
        return "Floors";
    }
  };

  const goalProgress = (value) => {
    for (const [key, value] of Object.entries(goals)) {
      if (value === goals["caloriesOut"]) {
        return <span>{summary.caloriesOut} </span>;
      } else if (value === goals["activeMinutes"]) {
        return <span>{summary.lightlyActiveMinutes}</span>;
      } else if (value === goals["distance"]) {
        return (
          <span>
            {summary.distances.find((c) => c.activity === "total")["distance"]}{" "}
          </span>
        );
      } else if (value === goals["steps"]) {
        return <span>{summary.steps}</span>;
      } else if (value === goals["floors"]) {
        return <span>{summary.floors}</span>;
      }
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        open={showGoalsModal}
        onClose={closeGoalsModal}
        closeOnEsc
        closeOnOverlayClick
        center
        classNames={{ modal: "modal_container", closeButton: "close_button" }}
      >
        <p>Daily Goals</p>
        <div className="modal_table">
          <p>
            {Object.keys(goals).map((key) => (
              <li>{formatKey(key)}</li>
            ))}
          </p>
          <p>
            {Object.values(goals).map((value) => (
              <li>
                {goalProgress(value)} / {value}
              </li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default GoalsModal;
