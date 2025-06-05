import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import SectionTitleBar from "../components/SectionTitleBar";
import ShoppingListCard from "../components/ShoppingListCard";
import ListContainer from "../components/ListContainer";
import ItemBarChart from "../components/ItemBarChart";
import useShoppingList from "../hooks/useShoppingList";
import useDelayedStatus from "../hooks/useDelayedStatus";
import useUserLoader from "../hooks/useUserLoader";
import { Skeleton, Alert } from "@mui/material";
import { useLanguage } from "../i18n/LanguageContext";
import { useItems } from "../context/ItemContext";
import "./dashboard.css";

// 🔧 Skeleton placeholder component for shopping list card
function ShoppingListCardSkeleton() {
  return (
    <li className="dashboard-item" style={{ padding: "1rem" }}>
      <Skeleton variant="rounded" width="40%" height={20} style={{ marginBottom: 6 }} />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </li>
  );
}

// 📊 Item counting utility
function getItemCountsByList(items) {
  const counts = {};
  for (const item of items) {
    if (item.state === "deleted") continue;

    const listId = String(item.shoppingListId);
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

export default function Dashboard() {
  const { t } = useLanguage();
  const { user, status: userStatus, error: userError } = useUserLoader();
  const { items } = useItems();

  const listHook = useShoppingList(user);
  const {
    visibleLists,
    showArchived, setShowArchived,
    showCreateModal, setShowCreateModal,
    newListName, setNewListName,
    inputError, setInputError,
    inputRef,
    createStatus, createError,
    listStatus: rawListStatus, listError,
    handleCreateList,
    handleToggleArchive,
    handleLeave,
    handleDelete
  } = listHook;

  const listStatus = useDelayedStatus(rawListStatus, 250);
  const itemCountsByList = getItemCountsByList(items);

  const chartData = visibleLists.map((list) => ({
    name: list.shoppingListName,
    completed: itemCountsByList[list.id]?.completed || 0,
    active: itemCountsByList[list.id]?.active || 0
  }));

  if (userStatus === "pending") {
    return (
      <div className="dashboard-container">
        <SectionTitleBar title={t("dashboardTitle")} />
        <ListContainer>
          <ul className="dashboard-list">
            {[...Array(3)].map((_, index) => (
              <ShoppingListCardSkeleton key={index} />
            ))}
          </ul>
        </ListContainer>
      </div>
    );
  }

  if (userStatus === "error") {
    return (
      <Alert severity="error" style={{ margin: "2rem" }}>
        {userError || t("loadUserError")}
      </Alert>
    );
  }

  return (
    <div className="dashboard-container">
      <SectionTitleBar
        title={t("dashboardTitle")}
        rightContent={
          <label className="section-toggle">
            <input
              type="checkbox"
              checked={showArchived}
              onChange={() => setShowArchived(prev => !prev)}
            />
            {t("showArchived")}
          </label>
        }
      />

      <section className="dashboard-section">
        {listStatus === "pending" && (
          <ListContainer>
            <ul className="dashboard-list">
              {[...Array(3)].map((_, index) => (
                <ShoppingListCardSkeleton key={index} />
              ))}
            </ul>
          </ListContainer>
        )}

        {listStatus === "error" && (
          <Alert severity="error" style={{ margin: "1rem 0" }}>
            {listError || t("loadListsError")}
          </Alert>
        )}

        {listStatus === "ready" && visibleLists.length > 0 && (
          <>
            {/* ✅ Chart moved above list */}
            <div className="dashboard-chart-wrapper" style={{ marginBottom: "2rem" }}>
              <ItemBarChart data={chartData} />
            </div>

            <ListContainer>
              <ul className="dashboard-list">
                {visibleLists.map((list) => (
                  <li key={list.id} className="dashboard-item">
                    <ShoppingListCard
                      list={list}
                      currentUserId={user.id}
                      onToggleArchive={handleToggleArchive}
                      onDelete={handleDelete}
                      onLeave={handleLeave}
                      completedCount={itemCountsByList[list.id]?.completed || 0}
                      activeCount={itemCountsByList[list.id]?.active || 0}
                    />
                  </li>
                ))}
              </ul>
            </ListContainer>
          </>
        )}

        {listStatus === "ready" && visibleLists.length === 0 && (
          <p className="dashboard-empty">{t("noListsFound")}</p>
        )}
      </section>

      <Footer
        rightContent={
          <Button type="primary" onClick={() => setShowCreateModal(true)}>
            {t("createShoppingList")}
          </Button>
        }
      />

      {showCreateModal && (
        <Modal title={t("createShoppingList")} onClose={() => setShowCreateModal(false)}>
          <div className="modal-body">
            <div className="modal-section">
              <label className="modal-label">{t("listNameLabel")}</label>
              <input
                className="modal-input"
                value={newListName}
                onChange={(e) => {
                  setNewListName(e.target.value);
                  if (inputError) setInputError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateList();
                }}
                placeholder={t("enterListName")}
                ref={inputRef}
              />
              {inputError && <p className="error-message">{t("listNameRequired")}</p>}
              {createStatus === "pending" && <p className="info-message">{t("creatingList")}</p>}
              {createStatus === "error" && <p className="error-message">{createError}</p>}
            </div>
          </div>

          <Footer
            leftContent={
              <Button type="ghost" onClick={() => setShowCreateModal(false)}>
                {t("cancel")}
              </Button>
            }
            rightContent={
              <Button type="primary" onClick={handleCreateList}>
                {t("create")}
              </Button>
            }
          />
        </Modal>
      )}
    </div>
  );
}
