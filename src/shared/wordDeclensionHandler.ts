export const wordDeclensionHandler = (count: number, words: { single: string; double: string; multiply: string }): string => {
  count %= 100;

  if (5 <= count && count <= 20) {
    return words.multiply;
  } else {
    switch (count % 10) {
      case 1:
        return words.single;

      case 2:
      case 3:
      case 4:
        return words.double;

      default:
        return words.multiply;
    }
  }
};
