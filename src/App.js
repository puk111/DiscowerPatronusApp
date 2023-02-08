import { useEffect, useState } from "react";
import BackGround from "./components/BackGround/BackGround";
import QuestionAndAnswer from "./components/QNA/QuestionAndAnswer";
import styles from "./app.module.scss";
import Info from "./components/InfoCard/Info";
import Patronus from "./components/Patronus/Patronus";

const arr = [
  {
    id: 1,
    img: "/images/moon_and_sun.png",
    question: "moon, sun or stars",
    answers: [
      { answer: "moon", pkt: 1 },
      { answer: "sun", pkt: 2 },
      { answer: "stars", pkt: 3 },
    ],
  },
  {
    id: 2,
    img: "/images/dark_gray_white.png",
    question: "dark, white or gray",
    answers: [
      { answer: "dark", pkt: 1 },
      { answer: "white", pkt: 2 },
      { answer: "gray", pkt: 3 },
    ],
  },
  {
    id: 3,
    img: "/images/mountain_or_see.png",
    question: "mountain or see",
    answers: [
      { answer: "mountain", pkt: 1 },
      { answer: "see", pkt: 2 },
    ],
  },
  {
    id: 4,
    img: "/images/shadow_or_light.png",
    question: "shadow or light",
    answers: [
      { answer: "shadow", pkt: 1 },
      { answer: "light", pkt: 2 },
    ],
  },
  {
    id: 5,
    img: "/images/tree_or_flowers.png",
    question: "tree or flowers",
    answers: [
      { answer: "tree", pkt: 1 },
      { answer: "flowers", pkt: 2 },
    ],
  },
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(true);
  const [animatingInfoCard, setAnimatingInfoCard] = useState(false);
  const [points, setPoints] = useState(0);

  const currentQuestionHandler = (pkt) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setPoints((prev) => prev + pkt);
      setAnimating(false);
    }, 2000);
  };

  useEffect(() => {
    setAnimatingInfoCard(true);
  }, []);

  return (
    <div className={styles.mainContener}>
      {showInfoCard && <Info animatingInfoCard={animatingInfoCard} />}
      {arr.length > currentQuestion ? (
        <>
          <QuestionAndAnswer
            arr={arr}
            currentQuestion={currentQuestion}
            animating={animating}
            currentQ={currentQuestionHandler}
          />
          <BackGround
            arr={arr}
            animating={animating}
            currentQuestion={currentQuestion}
          />
        </>
      ) : (
        <>
          <Patronus points={points} />
        </>
      )}
    </div>
  );
}

export default App;
