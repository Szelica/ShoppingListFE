import React from "react";
import Checkbox from "./Checkbox";
import Label from "./Label";
import "./CheckboxWithLabel.css";

export default function CheckboxWithLabel({ checked, onChange, children, id, isCompleted }) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2)}`;

  return (
    <div className="checkbox-container">
      <Checkbox id={checkboxId} checked={checked} onChange={onChange} isCompleted={isCompleted} />
      <div className="checkbox-label-content">{children}</div>
    </div>
  );
}
