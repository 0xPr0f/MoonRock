import React from "react";
import styles from "./Info.module.scss";

export const Info = ({ text }) => {
  return (
    <div className={styles.Header}>
      <span className={styles.Info}>{text}</span>
    </div>
  );
};
