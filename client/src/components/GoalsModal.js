import React, { useContext } from "react";
import Context from "../context/context";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../style/modals.css";

const GoalsModal = () => {
  const context = useContext(Context);
  const { showGoalsModal, closeGoalsModal } = context;
  const { goals, summary } = context.activity;

  const formatKey = (key) => {
    switch (key) {
      case "caloriesOut":
        return "Calories";
      case "activeMinutes":
        return "Activity";
      case "distance":
        return "Distance";
      case "steps":
        return "Steps";
      case "floors":
        return "Floors";
      default:
        return key;
    }
  };

  const goalProgress = (value) => {
    if (goals["caloriesOut"] === value) {
      return (
        <span>
          {summary.caloriesOut}
          <span className="minify">ckal</span>
        </span>
      );
    } else if (goals["activeMinutes"] === value) {
      return (
        <span>
          {summary.veryActiveMinutes}
          <span className="minify">min</span>
        </span>
      );
    } else if (goals["distance"] === value) {
      return (
        <span>
          {summary.distances.find((c) => c.activity === "total")["distance"]}
          <span className="minify">km</span>
        </span>
      );
    } else if (goals["steps"] === value) {
      return <span>{summary.steps}</span>;
    } else if (goals["floors"] === value) {
      return <span>{summary.floors}</span>;
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
        <p>Goals for Today</p>
        <div className="modal_table">
          <p>
            {Object.keys(goals).map((key) => (
              <li key={key}>{formatKey(key)}</li>
            ))}
          </p>
          <p>
            {Object.values(goals).map((value) => (
              <li key={value}>
                <span className="goals_progress">{goalProgress(value)} / </span>
                {value}
              </li>
            ))}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default GoalsModal;
