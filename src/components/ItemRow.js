import React from "react";
import "./ItemRow.css";

export default function ItemRow({ children, isCompleted = false }) {
  return (
    <li className={`item-row ${isCompleted ? "completed" : ""}`}>
      {children}
    </li>
  );
}
