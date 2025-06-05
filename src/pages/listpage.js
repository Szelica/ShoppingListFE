import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ListTitleBar from "../components/ListTitleBar";
import Footer from "../components/Footer";
import ItemSection from "../components/ItemSection";
import ShoppingListInfoModal from "../components/ShoppingListInfoModal";
import { useShoppingLists } from "../components/ShoppingListsContext";
import { useLanguage } from "../i18n/LanguageContext";
import { useItems } from "../context/ItemContext";
import ItemPieChart from "../components/ItemPieChart";
import "./listpage.css";

export default function ListPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { shoppingLists, setShoppingLists } = useShoppingLists();
  const { t } = useLanguage();

  const currentList = shoppingLists.find((list) => list.id === id);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const {
    items,
    addItem,
    toggleItem,
    deleteItem,
    editItem
  } = useItems();

  const listItems = items.filter(
    (item) =>
      item.shoppingListId === id &&
      (item.state === "active" || item.state === "completed")
  );

  const completedCount = listItems.filter(i => i.state === "completed").length;
  const activeCount = listItems.filter(i => i.state === "active").length;

  if (!currentList) {
    return (
      <div className="listpage-container">
        <h2>{t("listNotFoundTitle")}</h2>
        <p>
          {t("listNotFoundMessage")} <code>{id}</code>.
        </p>
      </div>
    );
  }

  // ✅ FIXED: create full item object from itemName
  const handleAddItem = (itemName) => {
    const newItem = {
      id: crypto.randomUUID(), // unique ID
      itemName,
      shoppingListId: id,
      state: "active"
    };
    addItem(newItem);
  };

  const handleSaveList = (updatedList) => {
    setShoppingLists(prev =>
      prev.map(list => (list.id === updatedList.id ? updatedList : list))
    );
    setShowSettings(false);
  };

  const handleLeaveListAndExit = (updatedList) => {
    setShoppingLists(prev =>
      prev.map(list => (list.id === updatedList.id ? updatedList : list))
    );
    navigate("/");
  };

  return (
    <div className="listpage-container">
      <ListTitleBar
        title={currentList.shoppingListName}
        showCompleted={showCompleted}
        onToggleShow={() => setShowCompleted(prev => !prev)}
      />

      <ItemPieChart completed={completedCount} active={activeCount} />

      <ItemSection
        items={listItems}
        showCompleted={showCompleted}
        onAdd={handleAddItem}
        onToggle={toggleItem}
        onDelete={deleteItem}
        onEdit={editItem}
        status="ready"
        error={null}
      />

      <Footer
        leftContent={
          <Button type="primary" onClick={() => navigate("/")}>
            {t("back")}
          </Button>
        }
        rightContent={
          <Button type="primary" onClick={() => setShowSettings(true)}>
            {t("settings")}
          </Button>
        }
      />

      {showSettings && (
        <ShoppingListInfoModal
          list={currentList}
          onClose={() => setShowSettings(false)}
          onSave={handleSaveList}
          onLeaveListAndExit={handleLeaveListAndExit}
        />
      )}
    </div>
  );
}

