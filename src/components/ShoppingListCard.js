import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ConfirmActionModal from "./ConfirmActionModal";
import ItemCountBadge from "./ItemCountBadge";
import { useLanguage } from "../i18n/LanguageContext";
import "./ShoppingListCard.css";

export default function ShoppingListCard({
  list,
  currentUserId,
  onToggleArchive,
  onDelete,
  onLeave,
  completedCount = 0,
  activeCount = 0
}) {
  const { t } = useLanguage();
  const isOwner = list.ownerId === currentUserId;
  const isArchived = list.state === "archived";
  const isInvitedUser = list.invitedUsers.includes(currentUserId);

  const [showActions, setShowActions] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(null);

  const toggleActions = () => setShowActions(prev => !prev);

  const cardClass = [
    "shopping-list-card",
    showActions && "show-actions",
    isArchived && "archived"
  ]
    .filter(Boolean)
    .join(" ");

  const handleConfirm = () => {
    if (showConfirmModal === "delete") {
      onDelete(list.id);
    } else if (showConfirmModal === "leave") {
      onLeave(list.id);
    } else if (showConfirmModal === "archive") {
      onToggleArchive(list.id);
    }
    setShowConfirmModal(null);
  };

  const getConfirmModalProps = () => {
    switch (showConfirmModal) {
      case "delete":
        return {
          title: t("deleteTitle"),
          message: `${t("deleteMessage")} "${list.shoppingListName}"?`,
          confirmLabel: t("delete")
        };
      case "leave":
        return {
          title: t("leaveTitle"),
          message: `${t("leaveMessage")} "${list.shoppingListName}"?`,
          confirmLabel: t("leave")
        };
      case "archive":
        return {
          title: isArchived ? t("unarchiveTitle") : t("archiveTitle"),
          message: isArchived
            ? `${t("unarchiveMessage")} "${list.shoppingListName}"?`
            : `${t("archiveMessage")} "${list.shoppingListName}"?`,
          confirmLabel: isArchived ? t("unarchive") : t("archive")
        };
      default:
        return {};
    }
  };

  return (
    <div className={cardClass}>
      <div className="shopping-list-header">
        <Link to={`/list/${list.id}`} className="shopping-list-name">
          {list.shoppingListName}
        </Link>
        <ItemCountBadge completed={completedCount} active={activeCount} />
      </div>

      {(isOwner || isInvitedUser) && (
        <>
          <Button
            type="icon"
            onClick={toggleActions}
            className="btn-icon-dots"
            data-tooltip={t("moreActions")}
          >
            ⋯
          </Button>

          {showActions && (
            <div className="shopping-list-actions visible">
              {isOwner && (
                <>
                  {isArchived && (
                    <Button
                      type="danger-outline"
                      onClick={() => setShowConfirmModal("delete")}
                      className="btn-icon"
                      data-tooltip={t("deleteListTooltip")}
                    >
                      ✖
                    </Button>
                  )}
                  <Button
                    type="outline"
                    onClick={() => setShowConfirmModal("archive")}
                    className="btn-icon"
                    data-tooltip={isArchived ? t("unarchiveListTooltip") : t("archiveListTooltip")}
                  >
                    {isArchived ? "⬆" : "⬇"}
                  </Button>
                </>
              )}

              {!isOwner && isInvitedUser && (
                <Button
                  type="danger-outline"
                  onClick={() => setShowConfirmModal("leave")}
                  className="btn-icon"
                  data-tooltip={t("leaveListTooltip")}
                >
                  ➡
                </Button>
              )}
            </div>
          )}

          {showConfirmModal && (
            <ConfirmActionModal
              title={getConfirmModalProps().title}
              message={getConfirmModalProps().message}
              confirmLabel={getConfirmModalProps().confirmLabel}
              cancelLabel={t("cancel")}
              onCancel={() => setShowConfirmModal(null)}
              onConfirm={handleConfirm}
            />
          )}
        </>
      )}
    </div>
  );
}
