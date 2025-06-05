import React, { useState } from "react";
import DeleteItemButton from "./DeleteItemButton";
import ItemRow from "./ItemRow";
import CheckboxWithLabel from "./CheckboxWithLabel";
import "./Item.css";

export default function Item({ item, onToggle, onDelete, onEdit }) {
  const isCompleted = item.state === "completed";
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.itemName);

  const handleEditConfirm = () => {
    if (editedName.trim() && editedName !== item.itemName) {
      onEdit(item.id, editedName.trim());
    }
    setIsEditing(false);
  };

  return (
    <ItemRow isCompleted={isCompleted}>
      <div className="item-content">
        <CheckboxWithLabel
          checked={isCompleted}
          onChange={() => onToggle(item.id)}
          isCompleted={isCompleted}
          id={`item-${item.id}`}
        >
          {isEditing ? (
            <input
              className="item-input"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={handleEditConfirm}
              onKeyDown={(e) => e.key === "Enter" && handleEditConfirm()}
              autoFocus
            />
          ) : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="item-name"
            >
              {item.itemName}
            </span>
          )}
        </CheckboxWithLabel>
      </div>

      <div className="item-actions">
        <DeleteItemButton onClick={() => onDelete(item.id)} />
      </div>
    </ItemRow>
  );
}
