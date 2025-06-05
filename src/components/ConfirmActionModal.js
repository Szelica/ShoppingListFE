import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import Footer from "./Footer";
import { useLanguage } from "../i18n/LanguageContext";
import "./Modal.css";

export default function ConfirmActionModal({
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}) {
  const { t } = useLanguage();

  return (
    <Modal title={title} onClose={onCancel}>
      <div className="modal-body">
        <p>{message}</p>
      </div>

      <Footer
        leftContent={
          <Button type="secondary" onClick={onCancel}>
            {cancelLabel || t("cancel")}
          </Button>
        }
        rightContent={
          <Button type="danger" onClick={onConfirm}>
            {confirmLabel || t("confirm")}
          </Button>
        }
      />
    </Modal>
  );
}
