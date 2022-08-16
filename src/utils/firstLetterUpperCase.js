export const firstLetterUpperCase = string => {
  return string
    .split('')
    .map((letter, i) => {
      if (i === 0) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join('');
};
