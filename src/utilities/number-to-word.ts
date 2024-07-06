const numbers: Record<number, string> = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

const words: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
};

export const numberToWord = (figure: number) => {
  if (!figure) {
    return "";
  }

  return numbers[figure];
};

export const wordToNumber = (word: string) => {
  if (!word) {
    return 0;
  }

  return words[word];
};
