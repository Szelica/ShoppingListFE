import React from "react";
import "./Checkbox.css";

export default function Checkbox({ id, checked, onChange, isCompleted }) {
  return (
    <span className={`custom-checkbox-wrapper ${isCompleted ? "completed" : ""}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="custom-checkbox"
      />
      <span className="checkbox-checkmark" />
    </span>
  );
}
