const { expect } = require("@jest/globals");
const { six } = require("./index");

test("test step 2", () => {
  expect(six()).toEqual([
    "GG",
    "GG",
    26,
    "GG",
    28,
    29,
    "FTW",
    31,
    32,
    "GG",
    34,
    "GG",
    "GG",
    37,
    38,
    "GG",
    "GG",
    41,
    "GG",
    43,
    44,
    "FTW",
    46,
    47,
    "GG",
    49,
    "GG",
  ]);
});
