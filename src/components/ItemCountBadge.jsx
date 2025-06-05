import React from "react";
import "./ItemCountBadge.css";

export default function ItemCountBadge({ completed = 0, active = 0 }) {
  const total = completed + active;
  const display = `(${completed}✓/${total})`;

  return (
    <span className="item-count-badge">
      {display}
    </span>
  );
}
