import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

import { ToastContext } from "../ToastProvider";

function Toast({ children, toastKey, variant }) {
  const Tag = ICONS_BY_VARIANT[variant];

  const { removeToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <VisuallyHidden>{styles[variant]} - </VisuallyHidden>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => {
          removeToast(toastKey);
        }}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
