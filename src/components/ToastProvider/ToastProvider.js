import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function removeToast(toastKey) {
    const newToasts = [...toasts];

    // Find the index of the element with the provided key
    const index = newToasts.findIndex((item) => item.key === toastKey);

    // If the element is found, remove it from the array
    if (index !== -1) {
      newToasts.splice(index, 1);
    }

    setToasts(newToasts);
  }

  function createToast(message, variant) {
    const newToast = {
      key: crypto.randomUUID(),
      message,
      variant,
    };

    const newToasts = [...toasts, newToast];

    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, removeToast, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
