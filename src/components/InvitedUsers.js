import React, { useState } from "react";
import users from "../data/usersData";
import DeleteItemButton from "./DeleteItemButton";
import { useUser } from "./User";
import ConfirmActionModal from "./ConfirmActionModal";
import "./InvitedUsers.css";
import Button from "./Button";
import { useLanguage } from "../i18n/LanguageContext";

export default function InvitedUsers({ list, onRemoveUser, onLeaveList }) {
  const { t } = useLanguage();
  const { invitedUsers = [], ownerId } = list;
  const currentUser = useUser();
  const isOwner = currentUser.id === ownerId;

  const [selectedUser, setSelectedUser] = useState(null);

  const filteredInvited = invitedUsers.filter(id => id !== ownerId);
  const invitedUserObjects = filteredInvited
    .map(id => users.find(user => user.id === id))
    .filter(Boolean);

  return (
    <div className="invited-users-container">
      <h4 className="invited-users-title">{t("invitedUsers")}</h4>

      {invitedUserObjects.length === 0 ? (
        <p>{t("noUsersInvited")}</p>
      ) : (
        <ul className="invited-users-list">
          {invitedUserObjects.map((user) => (
            <li key={user.id} className="invited-user-item">
              <strong>{user.name}</strong>
              {isOwner && (
                <DeleteItemButton onClick={() => setSelectedUser(user)} />
              )}
            </li>
          ))}
        </ul>
      )}

      {!isOwner && invitedUsers.includes(currentUser.id) && (
        <Button
          type="danger"
          className="invited-users-leave-button"
          onClick={onLeaveList}
        >
          {t("leaveList")}
        </Button>
      )}

      {selectedUser && (
        <ConfirmActionModal
          title={t("removeUserTitle")}
          message={
            <>
              {t("removeUserMessage")}{" "}
              <strong style={{ color: "var(--color-danger)" }}>{selectedUser.name}</strong>?
            </>
          }
          confirmLabel={t("remove")}
          cancelLabel={t("cancel")}
          onCancel={() => setSelectedUser(null)}
          onConfirm={() => {
            onRemoveUser(selectedUser.id);
            setSelectedUser(null);
          }}
        />
      )}
    </div>
  );
}
