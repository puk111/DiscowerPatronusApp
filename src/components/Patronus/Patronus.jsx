import React from "react";
import styles from "./Patronus.module.scss";

const arr = [
  {
    id: 1,
    img: "/images/patronus/bear.png",
    name: "Bear",
    desctiption:
      "Bear: Congratulations! You now have a bear patronus who is ready to protect you from anything bad. Don't worry if you're not a fan of mountain life - Patronus bears are able to protect their owners without having to roam the forest. Be proud and don't be intimidated by other, less brave patronus. The bear is the biggest animal in the forest and will always be ready to fight for its owner!",
  },
  {
    id: 2,
    img: "/images/patronus/cat.png",
    name: "Cat",
    desctiption:
      "Cat: Congratulations! Now you are the owner of a feline Patronus that will protect you from all evil. Don't worry if you're not a fan of tree-climbing - Patronus cats are able to protect their owners without having to climb rooftops. Be proud and don't be intimidated by other, less brave patronus. The cat is the master of trees and will always have a careful but effective approach to defending its owner!",
  },
  {
    id: 3,
    img: "/images/patronus/kon.png",
    name: "Horse",
    desctiption:
      "Horse: Congratulations! Now you are the owner of a mounted patronus that will protect you from all evil. Don't worry if you're not a fan of galloping riding - Patronus horses are able to protect their owners without having to run around the field. Be proud and don't be intimidated by other, less brave patronus. The horse is the king of the pastures and will always have powerful and graceful moves to defend its owner!",
  },
  {
    id: 4,
    img: "/images/patronus/łasica.png",
    name: "Weasel",
    desctiption:
      "Well, it looks like your patronus is a weasel! Congratulations, you now have speed and agility in your patronus. Fear not, you won't be stealing food from the fridge now, but you can rest assured that you'll be able to escape danger with this agility. Now is the time to show off your predatory style!",
  },
  {
    id: 5,
    img: "/images/patronus/lew.png",
    name: "Lion",
    desctiption:
      "Lion: Congratulations! Your patronus is a lion - king of the jungle! You will now have the courage and strength to face any challenge. Be ready to take the lead in any situation and keep your royal composure in any situation.",
  },
  {
    id: 6,
    img: "/images/patronus/tigger.png",
    name: "Tiger",
    desctiption:
      "Tiger: Oh, your patronus is a tiger! You will now look like a real cat of the gods, full of elegance and strength. You will surely be able to survive in any situation and come out victorious.",
  },
  {
    id: 7,
    img: "/images/patronus/wolf.png",
    name: "Wolf",
    desctiption:
      "Wolf: Congratulations, your patronus is a wolf! You will now have the instinct and strength to help you in any situation. Be ready to act with cold blood and courage, just like a real wolf, when the need arises.",
  },
];

function Patronus({ points }) {
  const getPatronus = () => {
    if (points < 6) {
      return arr[0];
    }
    if (points < 7) {
      return arr[1];
    }
    if (points < 8) {
      return arr[2];
    }
    if (points < 9) {
      return arr[3];
    }
    if (points < 10) {
      return arr[4];
    }
    if (points < 12) {
      return arr[5];
    }
    if (points < 13) {
      return arr[6];
    }
  };

  const patronus = getPatronus();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img src={patronus.img} alt={patronus.name} />
        </div>
        <h3>{patronus.name}</h3>
        <p>{patronus.desctiption}</p>
      </div>
    </div>
  );
}

export default Patronus;
