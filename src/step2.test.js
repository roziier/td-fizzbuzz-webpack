const { expect } = require("@jest/globals");
const { two } = require("./index");

test("test step 2", () => {
  expect(two(21, 25)).toEqual(["Fizz", 22, 23, "Fizz", "Buzz"]);
});
