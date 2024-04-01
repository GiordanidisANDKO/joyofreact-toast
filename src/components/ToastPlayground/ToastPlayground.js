import React from "react";

import Button from "../Button";

import Toast from "../Toast";

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

  const [toastVisibility, setToastVisibility] = React.useState(false);
  function handleButtonClick() {
    setToastVisibility(true);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        {toastVisibility && (
          <Toast
            message={message}
            variant={variant}
            setToastVisibility={setToastVisibility}
          />
        )}
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
                defaultValue={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
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
              <Button onClick={handleButtonClick}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToastPlayground;
