import React from "react";
import Item from "./Item";
import "./ItemList.css";

export default function ItemList({ items, onToggle, onDelete, onEdit, showCompleted }) {
  const visibleItems = items
    .filter(item => showCompleted || item.state !== "completed")
    .sort((a, b) => {
      if (a.state === "completed" && b.state !== "completed") return 1;
      if (a.state !== "completed" && b.state === "completed") return -1;
      return 0;
    });

  return (
    <ul className="item-list">
      {visibleItems.map(item => (
        <Item
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
