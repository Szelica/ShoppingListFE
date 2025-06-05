import { useEffect, useState } from "react";

/**
 * Custom hook to delay the rendering of status like "pending" for better UX (e.g. show skeletons longer).
 * @param {string} status - The actual status (e.g., 'pending', 'ready', 'error')
 * @param {number} delay - Delay in milliseconds before applying the status (default: 250ms)
 * @returns {string} delayedStatus
 */
export default function useDelayedStatus(status, delay = 250) {
  const [delayedStatus, setDelayedStatus] = useState(status);

  useEffect(() => {
    let timeout;
    if (status === "pending") {
      timeout = setTimeout(() => setDelayedStatus("pending"), delay);
    } else {
      setDelayedStatus(status);
    }

    return () => clearTimeout(timeout);
  }, [status, delay]);

  return delayedStatus;
}
