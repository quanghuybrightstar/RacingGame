export const randomNumberExcept = (max, min, number) => {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === number ? randomNumberExcept(min, max) : num;
};
