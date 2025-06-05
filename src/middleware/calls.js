import users from "../data/usersData";
import shoppingLists from "../data/shoppinglists";
import itemsList from "../data/itemsList";

let mockShoppingLists = [...shoppingLists];
let mockItemsList = [...itemsList];

const IS_SERVER = false;

const Calls = {
  call(method, url, dtoIn) {
    if (IS_SERVER) {
      return fetch(url, {
        method,
        body: method !== "GET" ? JSON.stringify(dtoIn) : undefined,
        headers: { "Content-Type": "application/json" }
      }).then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      });
      
    } else {

      // --- MOCK IMPLEMENTATION ---

      if (url.endsWith("/user/list")) return Promise.resolve(users);

      if (url.endsWith("/list/create")) {
        const newList = {
          ...dtoIn,
          id: Date.now().toString()
        };
        mockShoppingLists.push(newList);
        return Promise.resolve(newList);
      }

      if (url.endsWith("/list/delete")) {
        mockShoppingLists = mockShoppingLists.filter((l) => l.id !== dtoIn.id);
        mockItemsList = mockItemsList.filter((i) => i.shoppingListId !== dtoIn.id);
        return Promise.resolve({ success: true });
      }

      if (url.endsWith("/list/leave")) {
        mockShoppingLists = mockShoppingLists.map((list) =>
          list.id === dtoIn.id
            ? {
                ...list,
                invitedUsers: list.invitedUsers.filter((uid) => uid !== dtoIn.userId)
              }
            : list
        );
        return Promise.resolve({ success: true });
      }

      if (url.endsWith("/list/archive")) {
        mockShoppingLists = mockShoppingLists.map((list) =>
          list.id === dtoIn.id ? { ...list, state: dtoIn.state } : list
        );
        return Promise.resolve({ success: true });
      }

      if (url.endsWith("/item/create")) {
        const newItem = {
          id: Date.now().toString(),
          itemName: dtoIn.itemName,
          shoppingListId: dtoIn.shoppingListId,
          state: "active"
        };
        mockItemsList.push(newItem);
        return Promise.resolve(newItem);
      }

      if (url.endsWith("/item/update")) {
        mockItemsList = mockItemsList.map((item) =>
          item.id === dtoIn.id ? { ...item, ...dtoIn } : item
        );
        return Promise.resolve(dtoIn);
      }

      if (url.endsWith("/item/delete")) {
        mockItemsList = mockItemsList.filter((i) => i.id !== dtoIn.id);
        return Promise.resolve({ success: true });
      }

      if (url.endsWith("/item/list")) {
        const result = mockItemsList.filter((i) => i.shoppingListId === dtoIn.shoppingListId);
        return Promise.resolve(result);
      }

      return Promise.reject({ message: "Neznáme mock URL: " + url });
    }
  },

  // --- API calls ---
  listUsers(dtoIn) {
    return this.call("GET", "/user/list", dtoIn);
  },
  createShoppingList(dtoIn) {
    return this.call("POST", "/list/create", dtoIn);
  },
  deleteShoppingList(dtoIn) {
    return this.call("POST", "/list/delete", dtoIn);
  },
  leaveShoppingList(dtoIn) {
    return this.call("POST", "/list/leave", dtoIn);
  },
  archiveShoppingList(dtoIn) {
    return this.call("POST", "/list/archive", dtoIn);
  },
  createItem(dtoIn) {
    return this.call("POST", "/item/create", dtoIn);
  },
  updateItem(dtoIn) {
    return this.call("POST", "/item/update", dtoIn);
  },
  deleteItem(dtoIn) {
    return this.call("POST", "/item/delete", dtoIn);
  },
  getItemsByShoppingListId(dtoIn) {
    return this.call("GET", "/item/list", dtoIn);
  }
};

export default Calls;
