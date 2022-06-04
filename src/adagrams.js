// import { random } from "core-js/core/number";

const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomCharacter;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = [];
  let count = 1;
  let letterPoolCopy = { ...LETTER_POOL };
  while (count <= 10) {
    let randomLetter = generateRandomLetter();
    if (letterPoolCopy[randomLetter] == 0) {
      continue;
    } else {
      letters.push(randomLetter);
      count += 1;
      letterPoolCopy[randomLetter] -= 1;
    }
  }
  return letters;
};

const counter = (list1) => {
  const dict1 = {};
  for (let elem of list1) {
    if (dict1[elem]) {
      dict1[elem] += 1;
    } else {
      dict1[elem] = 1;
    }
  }
  return dict1;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordFreq = counter(input.toUpperCase());
  const lettersFreq = counter(lettersInHand);
  for (let letter of input) {
    if (!lettersInHand.includes(letter.toUpperCase())) {
      return false;
    }
  }
  for (let char in wordFreq) {
    if (wordFreq[char] > lettersFreq[char]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
