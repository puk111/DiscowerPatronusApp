import React from "react";
import styles from "./Info.module.scss";

function Info({ animatingInfoCard }) {
  return (
    <div
      className={`${styles.card} ${animatingInfoCard ? styles.animating : ""}`}
    >
      Dont thing just pick
    </div>
  );
}

export default Info;
