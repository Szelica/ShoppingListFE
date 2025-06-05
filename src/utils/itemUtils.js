export function getItemCountsByList(items) {
  const counts = {};

  for (const item of items) {
    // Only count active and completed items
    if (!["active", "completed"].includes(item.state)) continue;

    const listId = String(item.shoppingListId); // force consistent key

    if (!counts[listId]) {
      counts[listId] = { active: 0, completed: 0 };
    }

    if (item.state === "completed") {
      counts[listId].completed++;
    } else {
      counts[listId].active++;
    }
  }

  return counts;
}
