// CREATE ARRAY WITH DESIRE NUMBERS
const doubleMultipleOf = function (range, num1, num2, string) {
  range.map((x, i, arr) => {
    if (x % num1 === 0 && x % num2 === 0) {
      return (arr[i] = string);
    }
  });
};

export default doubleMultipleOf;
