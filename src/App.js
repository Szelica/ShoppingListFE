import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ListPage from "./pages/listpage";
import ProfilePage from "./pages/profilePage";
import Header from "./components/Header";

import { UserProvider } from "./components/User";
import { ShoppingListsProvider } from "./components/ShoppingListsContext";
import { ThemeProvider } from "./components/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ItemProvider } from "./context/ItemContext";

import "./App.css";
import "./theme.css";
import "./typography.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <ShoppingListsProvider>
            <ItemProvider>
              <div className="app-container">
                <Header />
                <Routes>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/list/:id" element={<ListPage />} />
                </Routes>
              </div>
            </ItemProvider>
          </ShoppingListsProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
