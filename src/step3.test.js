const { expect } = require("@jest/globals");
const { three } = require("./index");

test("test step 3", () => {
  expect(three()).toEqual([
    "Boo",
    "Fizz",
    13,
    "Foo",
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
    "Fizz",
    "Boo",
    23,
    "Fizz",
    "Buzz",
    26,
    "Fizz",
    "Foo",
    29,
    "FizzBuzz",
    31,
    32,
    "Fizz",
    34,
    "Buzz",
    "Fizz",
    37,
    38,
    "Fizz",
    "Buzz",
    41,
    "Fizz",
    43,
    "Boo",
  ]);
});