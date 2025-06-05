import { useEffect, useState } from "react";
import usersMock from "../data/usersData";

export default function useUserLoader() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("pending"); // 'pending' | 'ready' | 'error'
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    setError(null);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(usersMock);
      }, 1000);
    })
      .then((data) => {
        setUser(data[0]);
        setStatus("ready");
      })
      .catch((err) => {
        setError(err.message || "Unknown error while loading user.");
        setStatus("error");
      });
  }, []);

  return { user, status, error };
}
