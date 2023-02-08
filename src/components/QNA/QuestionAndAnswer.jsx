import React, { useEffect, useState } from "react";
import styles from "./QuestionAndAnswer.module.scss";

function QuestionAndAnswer({ arr, currentQuestion, animating, currentQ }) {
  const onAnswerClick = (pkt) => {
    currentQ(pkt);
  };

  return (
    <div
      className={`${styles.qnaContainer} ${animating ? styles.animating : ""}`}
    >
      <p>{arr[currentQuestion]?.question}</p>

      <div className={styles.btnContainer}>
        {arr[currentQuestion]?.answers.map((item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                onAnswerClick(item.pkt);
              }}
            >
              <p>{item.answer}</p>
            </button>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default QuestionAndAnswer;
