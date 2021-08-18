const smallBig = function (range, num1, num2, string1, string2) {
  range.map((x, i, arr) => {
    if (x < num1) {
      return (arr[i] = string1);
    } else if (x > num2) {
      return (arr[i] = string2);
    }
  });
};

export default smallBig;
