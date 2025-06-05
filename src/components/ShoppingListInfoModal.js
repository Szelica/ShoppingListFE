import React, { useState } from "react";
import Modal from "./Modal";
import OwnerInfo from "./OwnerInfo";
import InvitedUsers from "./InvitedUsers";
import InviteUser from "./InviteUser";
import Button from "./Button";
import Footer from "./Footer";
import ConfirmActionModal from "./ConfirmActionModal";
import { useUser } from "./User";
import { useLanguage } from "../i18n/LanguageContext";
import users from "../data/usersData";
import "./Modal.css";

export default function ShoppingListInfoModal({ list, onClose, onSave, onLeaveListAndExit }) {
  const { t } = useLanguage();
  const user = useUser();
  const [editedList, setEditedList] = useState({ ...list });
  const invitedUserIds = Array.isArray(editedList.invitedUsers) ? editedList.invitedUsers : [];
  const isOwner = user.id === editedList.ownerId;
  const [showConfirmLeave, setShowConfirmLeave] = useState(false);

  const handleRemoveUser = (userId) => {
    const updated = {
      ...editedList,
      invitedUsers: invitedUserIds.filter(id => id !== userId),
    };
    setEditedList(updated);
  };

  const requestLeaveList = () => {
    setShowConfirmLeave(true);
  };

  const confirmLeaveList = () => {
    const updated = {
      ...editedList,
      invitedUsers: invitedUserIds.filter(id => id !== user.id),
    };
    onLeaveListAndExit(updated);
    setShowConfirmLeave(false);
  };

  const handleInviteUser = (newUser) => {
    const updated = {
      ...editedList,
      invitedUsers: [...invitedUserIds, newUser.id],
    };
    setEditedList(updated);
  };

  const handleNameChange = (e) => {
    setEditedList({ ...editedList, shoppingListName: e.target.value });
  };

  return (
    <>
      <Modal title={t("shoppingListSettings")} onClose={onClose}>
        <div className="modal-body">
          {isOwner && (
            <div className="modal-section">
              <label className="modal-label">{t("editListNameLabel")}</label>
              <input
                className="modal-input"
                value={editedList.shoppingListName}
                onChange={handleNameChange}
              />
            </div>
          )}

          <div className="modal-user-grid">
            <div className="modal-grid">
              <div className="modal-flex-box">
                <OwnerInfo ownerId={editedList.ownerId} />
              </div>
              <div className="modal-flex-box">
                <InvitedUsers
                  list={editedList}
                  onRemoveUser={handleRemoveUser}
                  onLeaveList={requestLeaveList}
                />
              </div>
            </div>

            {isOwner && (
              <div className="modal-invite-section">
                <InviteUser
                  allUsers={users}
                  invitedUserIds={editedList.invitedUsers}
                  listOwnerId={editedList.ownerId}
                  onInvite={handleInviteUser}
                />
              </div>
            )}
          </div>
        </div>

        <Footer
          leftContent={
            <Button type="secondary" onClick={onClose}>
              {t("cancel")}
            </Button>
          }
          rightContent={
            <Button type="primary" onClick={() => onSave(editedList)}>
              {t("save")}
            </Button>
          }
        />
      </Modal>

      {showConfirmLeave && (
        <ConfirmActionModal
          title={t("leaveListTitle")}
          message={`${t("leaveListMessage")} "${editedList.shoppingListName}"?`}
          confirmLabel={t("leaveListConfirm")}
          cancelLabel={t("cancel")}
          onConfirm={confirmLeaveList}
          onCancel={() => setShowConfirmLeave(false)}
        />
      )}
    </>
  );
}
