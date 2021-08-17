// CREATE ARRAY WITH DESIRE NUMBERS
const myRange = function (min, max) {
  let array = [];
  for (let index = min; index < max + 1; index++) {
    array.push(index);
  }
  return array;
};

export default myRange;
