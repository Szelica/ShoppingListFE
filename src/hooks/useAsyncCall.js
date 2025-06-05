import { useState, useEffect } from "react";

export default function useAsyncCall(asyncFn, args = [], autoTrigger = true) {
  const [status, setStatus] = useState("idle"); // idle | pending | ready | error
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const run = () => {
    setStatus("pending");
    setError(null);

    asyncFn(...args)
      .then((result) => {
        setData(result);
        setStatus("ready");
      })
      .catch((err) => {
        setError(err.message || "Neznáma chyba");
        setStatus("error");
      });
  };

  useEffect(() => {
    if (autoTrigger) run();
  }, []);

  return { status, data, error, run };
}
