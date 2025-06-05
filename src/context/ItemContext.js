// src/context/ItemContext.js
import { createContext, useContext, useState } from "react";
import initialItems from "../data/itemsList";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  // Add a new item
  const addItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
  };

  // Delete an item by ID
  const deleteItem = (itemId) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Toggle completion state
  const toggleItem = (itemId) => {
    setItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, state: item.state === "completed" ? "active" : "completed" }
          : item
      )
    );
  };

  // Edit item name
  const editItem = (itemId, newName) => {
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, itemName: newName } : item
      )
    );
  };


  const removeItemsByListId = (listId) => {
    setItems(prev => prev.filter(item => item.shoppingListId !== listId));
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        deleteItem,
        toggleItem,
        editItem,
        removeItemsByListId
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}
