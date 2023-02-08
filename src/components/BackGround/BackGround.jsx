import React from "react";
import styles from "./BackGround.module.scss";

function BackGround({ arr, animating, currentQuestion }) {
  return (
    <>
      {arr.map((bg, idx) => {
        return (
          <img
            key={idx}
            src={bg.img}
            alt=""
            className={`${styles.img} ${
              idx === currentQuestion ? styles.active : ""
            }`}
          />
        );
      })}
    </>
  );
}

export default BackGround;
