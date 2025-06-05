import React, { useState } from "react";
import Button from "./Button";
import "./InviteUser.css";
import { useLanguage } from "../i18n/LanguageContext";

export default function InviteUser({ allUsers, invitedUserIds, listOwnerId, onInvite }) {
  const { t } = useLanguage();
  const [selectedUserId, setSelectedUserId] = useState("");

  const availableUsers = allUsers.filter(
    (user) => !invitedUserIds.includes(user.id) && user.id !== listOwnerId
  );

  const handleInvite = () => {
    if (selectedUserId) {
      const user = allUsers.find((u) => u.id === selectedUserId);
      if (user) {
        onInvite(user);
        setSelectedUserId("");
      }
    }
  };

  return (
    <div className="invite-user">
      <h4>{t("inviteUserTitle")}</h4>
      <div className="invite-user-row">
        <select
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          className="invite-user-select"
        >
          <option value="">{t("selectUserPlaceholder")}</option>
          {availableUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <Button
          type="primary"
          onClick={handleInvite}
          disabled={!selectedUserId}
          className="invite-user-button"
        >
          {t("inviteUserButton")}
        </Button>
      </div>
    </div>
  );
}
