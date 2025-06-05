import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import ListContainer from "./ListContainer";
import { Skeleton, Alert } from "@mui/material";
import useDelayedStatus from "../hooks/useDelayedStatus";
import { useLanguage } from "../i18n/LanguageContext";
import "./ItemSection.css";

export default function ItemSection({
  items,
  onAdd,
  onToggle,
  onDelete,
  onEdit,
  showCompleted,
  status,
  error
}) {
  const delayedStatus = useDelayedStatus(status, 1000);
  const { t } = useLanguage();

  return (
    <ListContainer>
      <div className="item-section-container">
        <AddItemForm onAdd={onAdd} />

        {delayedStatus === "pending" && (
          <div style={{ paddingTop: "1rem" }}>
            <Skeleton height={40} style={{ marginBottom: 12 }} />
            <Skeleton height={40} style={{ marginBottom: 12 }} />
            <Skeleton height={40} style={{ marginBottom: 12 }} />
          </div>
        )}

        {delayedStatus === "error" && (
          <Alert severity="error" style={{ marginTop: "1rem" }}>
            {error || t("loadItemsError")}
          </Alert>
        )}

        {delayedStatus === "ready" && items.length === 0 && (
          <p className="empty-items-message">
            {t("emptyShoppingList")}
          </p>
        )}

        {delayedStatus === "ready" && items.length > 0 && (
          <ItemList
            items={items}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </ListContainer>
  );
}
