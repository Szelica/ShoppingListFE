import { useEffect, useState } from "react";
import Calls from "../middleware/calls";
import useDelayedStatus from "./useDelayedStatus";

export default function useShoppingListItems(shoppingListId) {
  const [items, setItems] = useState([]);
  const [rawStatus, setRawStatus] = useState("pending"); // 'pending' | 'ready' | 'error'
  const status = useDelayedStatus(rawStatus);
  const [error, setError] = useState(null);

  const [createStatus, setCreateStatus] = useState("idle");
  const [createError, setCreateError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState("idle");
  const [updateError, setUpdateError] = useState(null);
  const [deleteStatus, setDeleteStatus] = useState("idle");
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    if (!shoppingListId) return;

    setRawStatus("pending");
    setError(null);

    Calls.getItemsByShoppingListId({ shoppingListId })
      .then((data) => {
        setItems(data);
        setRawStatus("ready");
      })
      .catch((err) => {
        setError(err.message || "Nepodarilo sa načítať položky.");
        setRawStatus("error");
      });
  }, [shoppingListId]);

  const handleAddItem = (itemName) => {
    setCreateStatus("pending");
    setCreateError(null);
    const dtoIn = { itemName, shoppingListId };

    Calls.createItem(dtoIn)
      .then((newItem) => {
        setItems((prev) => [...prev, newItem]);
        setCreateStatus("ready");
      })
      .catch((err) => {
        setCreateError(err.message || "Chyba pri pridávaní položky.");
        setCreateStatus("error");
      });
  };

  const handleToggleItem = (itemId) => {
    setUpdateStatus("pending");
    setUpdateError(null);

    const item = items.find((i) => i.id === itemId);
    if (!item) return;
    const newState = item.state === "active" ? "completed" : "active";
    const dtoIn = { ...item, state: newState };

    Calls.updateItem(dtoIn)
      .then((updatedItem) => {
        setItems((prev) =>
          prev.map((i) => (i.id === itemId ? updatedItem : i))
        );
        setUpdateStatus("ready");
      })
      .catch((err) => {
        setUpdateError(err.message || "Chyba pri zmene stavu položky.");
        setUpdateStatus("error");
      });
  };

  const handleDeleteItem = (itemId) => {
    setDeleteStatus("pending");
    setDeleteError(null);

    Calls.deleteItem({ id: itemId })
      .then(() => {
        setItems((prev) => prev.filter((item) => item.id !== itemId));
        setDeleteStatus("ready");
      })
      .catch((err) => {
        setDeleteError(err.message || "Chyba pri mazaní položky.");
        setDeleteStatus("error");
      });
  };

  const handleEditItem = (itemId, newName) => {
    setUpdateStatus("pending");
    setUpdateError(null);

    const item = items.find((i) => i.id === itemId);
    if (!item) return;
    const dtoIn = { ...item, itemName: newName };

    Calls.updateItem(dtoIn)
      .then((updatedItem) => {
        setItems((prev) =>
          prev.map((i) => (i.id === itemId ? updatedItem : i))
        );
        setUpdateStatus("ready");
      })
      .catch((err) => {
        setUpdateError(err.message || "Chyba pri úprave položky.");
        setUpdateStatus("error");
      });
  };

  return {
    items,
    status,
    error,
    createStatus,
    createError,
    updateStatus,
    updateError,
    deleteStatus,
    deleteError,
    handleAddItem,
    handleToggleItem,
    handleDeleteItem,
    handleEditItem
  };
}
