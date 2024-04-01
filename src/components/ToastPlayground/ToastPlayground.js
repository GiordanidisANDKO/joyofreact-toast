import React from "react";

import Button from "../Button";

import Toast from "../Toast";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");

  function handleMessageChange(e) {
    const newValue = e.target.value;
    setMessage(newValue);
  }

  const [variant, setVariant] = React.useState("notice");

  function handleVariantChange(e) {
    const newValue = e.target.value;
    setVariant(newValue);
  }

  const [toasts, setToasts] = React.useState([]);

  const [toastVisibility, setToastVisibility] = React.useState(false);
  function handleFormSubmit(e) {
    e.preventDefault();

    const newToast = {
      key: crypto.randomUUID(),
      message,
      variant,
    };

    const newToasts = [...toasts, newToast];

    setToasts(newToasts);

    setMessage("");
    setVariant("notice");
  }

  function removeToast(toastKey) {
    console.log(toastKey);
    const newToasts = [...toasts];

    // Find the index of the element with the provided key
    const index = newToasts.findIndex((item) => item.key === toastKey);

    // If the element is found, remove it from the array
    if (index !== -1) {
      newToasts.splice(index, 1);
    }

    setToasts(newToasts);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {toasts.length > 0 && (
          <ToastShelf toasts={toasts} removeToast={removeToast} />
        )}
        <form onSubmit={handleFormSubmit}>
          <div className={styles.controlsWrapper}>
            <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: "baseline" }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message"
                  className={styles.messageInput}
                  onChange={handleMessageChange}
                  value={message}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label}>Variant</div>
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                {VARIANT_OPTIONS.map((option) => (
                  <label
                    key={`variant-${option}`}
                    htmlFor={`variant-${option}`}
                  >
                    <input
                      id={`variant-${option}`}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option ? true : false}
                      onChange={handleVariantChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label} />
              <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                <Button>Pop Toast!</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ToastPlayground;
