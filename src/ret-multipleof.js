// CREATE ARRAY WITH DESIRE NUMBERS
const multipleOf = function (range, num, string) {
  range.map((x, i, arr) => {
    if (x % num === 0) {
      return (arr[i] = string);
    }
  });
};

export default multipleOf;
