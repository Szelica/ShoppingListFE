import React, { createContext, useContext, useEffect, useState } from "react";
import usersMock from "../data/usersData";
import { useLanguage } from "../i18n/LanguageContext";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    setStatus("pending");
    setError(null);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(usersMock);
      }, 1000);
    })
      .then((data) => {
        setUser(data[0]);
        setStatus("ready");
      })
      .catch((err) => {
        setError(err.message || t("loadUserError"));
        setStatus("error");
      });
  }, [t]);

  return (
    <UserContext.Provider value={{ user, setUser, status, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUser() {
  return useUserContext().user;
}

export function UserSelector() {
  const { user, setUser } = useUserContext();

  return (
    <select
      className="user-selector"
      value={user?.id}
      onChange={(e) =>
        setUser(usersMock.find((u) => u.id === e.target.value))
      }
    >
      {usersMock.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
