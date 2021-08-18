// CREATE SMALL AND BIG
const multipleOf = function (range, num, string) {
  range.map((x, i, arr) => {
    if (x % num === 0) {
      return (arr[i] = string);
    }
  });
};

export default multipleOf;
