import React, { createContext, useContext, useState } from "react";
import shoppingListsData from "../data/shoppinglists";

const ShoppingListsContext = createContext();

export function ShoppingListsProvider({ children }) {
  const [shoppingLists, setShoppingLists] = useState(shoppingListsData);

  return (
    <ShoppingListsContext.Provider value={{ shoppingLists, setShoppingLists }}>
      {children}
    </ShoppingListsContext.Provider>
  );
}

export function useShoppingLists() {
  return useContext(ShoppingListsContext);
}
