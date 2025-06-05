import { useRef, useState, useEffect } from "react";
import { useShoppingLists } from "../components/ShoppingListsContext";
import Calls from "../middleware/calls";
import useDelayedStatus from "./useDelayedStatus";

export default function useShoppingList(user) {
  const { shoppingLists, setShoppingLists } = useShoppingLists();

  const [showArchived, setShowArchived] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [inputError, setInputError] = useState(false);
  const inputRef = useRef(null);

  const [listStatus, setListStatus] = useState("ready");
  const [listError, setListError] = useState(null);
  const delayedListStatus = useDelayedStatus(listStatus);

  const [createStatus, setCreateStatus] = useState("idle");
  const [createError, setCreateError] = useState(null);

  const [deleteStatus, setDeleteStatus] = useState("idle");
  const [deleteError, setDeleteError] = useState(null);

  const [leaveStatus, setLeaveStatus] = useState("idle");
  const [leaveError, setLeaveError] = useState(null);

  const [archiveStatus, setArchiveStatus] = useState("idle");
  const [archiveError, setArchiveError] = useState(null);

  useEffect(() => {
    if (!user) return;
    if (showCreateModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showCreateModal, user]);

  const handleCreateList = () => {
    const trimmed = newListName.trim();
    if (!trimmed) {
      setInputError(true);
      inputRef.current?.focus();
      return;
    }

    const dtoIn = {
      shoppingListName: trimmed,
      ownerId: user.id,
      invitedUsers: [],
      state: "active",
    };

    setCreateStatus("pending");
    setListStatus("pending");
    setCreateError(null);

    Calls.createShoppingList(dtoIn)
      .then((res) => {
        const createdList = res.data || res;
        setTimeout(() => {
          setShoppingLists((prev) => [...prev, createdList]);
          setNewListName("");
          setShowCreateModal(false);
          setInputError(false);
          setCreateStatus("ready");
          setListStatus("ready");
        }, 1000);
      })
      .catch((error) => {
        const msg = error.message || "Nepodarilo sa vytvoriť zoznam.";
        setCreateError(msg);
        setCreateStatus("error");
        setListError(msg);
        setListStatus("error");
      });
  };

  const handleDelete = (listId) => {
    setDeleteStatus("pending");
    setListStatus("pending");
    setDeleteError(null);

    Calls.deleteShoppingList({ id: listId })
      .then(() => {
        setTimeout(() => {
          setShoppingLists((prev) => prev.filter((list) => list.id !== listId));
          setDeleteStatus("ready");
          setListStatus("ready");
        }, 1000);
      })
      .catch((error) => {
        const msg = error.message || "Chyba pri mazaní.";
        setDeleteError(msg);
        setDeleteStatus("error");
        setListError(msg);
        setListStatus("error");
      });
  };

  const handleLeave = (listId) => {
    setLeaveStatus("pending");
    setListStatus("pending");
    setLeaveError(null);

    Calls.leaveShoppingList({ id: listId, userId: user.id })
      .then(() => {
        setTimeout(() => {
          setShoppingLists((prev) =>
            prev.map((list) =>
              list.id === listId
                ? { ...list, invitedUsers: list.invitedUsers.filter((id) => id !== user.id) }
                : list
            )
          );
          setLeaveStatus("ready");
          setListStatus("ready");
        }, 1000);
      })
      .catch((error) => {
        const msg = error.message || "Chyba pri opústaní zoznamu.";
        setLeaveError(msg);
        setLeaveStatus("error");
        setListError(msg);
        setListStatus("error");
      });
  };

  const handleToggleArchive = (listId) => {
    setArchiveStatus("pending");
    setListStatus("pending");
    setArchiveError(null);

    const list = shoppingLists.find((l) => l.id === listId);
    const newState = list?.state === "archived" ? "active" : "archived";

    Calls.archiveShoppingList({ id: listId, state: newState })
      .then(() => {
        setTimeout(() => {
          setShoppingLists((prev) =>
            prev.map((list) =>
              list.id === listId ? { ...list, state: newState } : list
            )
          );
          setArchiveStatus("ready");
          setListStatus("ready");
        }, 1000);
      })
      .catch((error) => {
        const msg = error.message || "Chyba pri archivácii.";
        setArchiveError(msg);
        setArchiveStatus("error");
        setListError(msg);
        setListStatus("error");
      });
  };

  const visibleLists = user
    ? shoppingLists
        .filter((list) =>
          (list.ownerId === user.id || (list.invitedUsers ?? []).includes(user.id)) &&
          (showArchived || list.state !== "archived")
        )
        .sort((a, b) => {
          if (a.state === "archived" && b.state !== "archived") return 1;
          if (a.state !== "archived" && b.state === "archived") return -1;
          return a.shoppingListName.localeCompare(b.shoppingListName);
        })
    : [];

  return {
    visibleLists,
    showArchived,
    setShowArchived,
    showCreateModal,
    setShowCreateModal,
    newListName,
    setNewListName,
    inputError,
    setInputError,
    inputRef,
    createStatus,
    createError,
    deleteStatus,
    deleteError,
    leaveStatus,
    leaveError,
    archiveStatus,
    archiveError,
    listStatus: delayedListStatus,
    listError,
    handleCreateList,
    handleDelete,
    handleLeave,
    handleToggleArchive,
  };
}
