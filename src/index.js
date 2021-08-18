// import "./css/back.scss";
import myRange from "./my-range";
import multipleOf from "./ret-multipleof";
import doubleMultipleOf from "./ret-2multipleof";
import smallBig from "./small-big";

// STEP 1
// Write a program that returns array of numbers from 1 to 100, while multiples of three return "Fizz" instead of the number, multiples of five return "Buzz". Multiples of both three and five return "FizzBuzz".
const stepOne = () => {
  const numFromTo = myRange(1, 100);
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepOne());

// STEP 2
// Add a way to change range, instead of printing numbers from 1 to 100. Examples: numbers from 1 to 20, from 15 to 50.
const stepTwo = (val1, val2) => {
  const numFromTo = myRange(val1, val2);
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepTwo(21, 25));

// STEP 3
// Add rules for 7 and 11: 7 returns "Foo", 11 returns "Boo" and multiples of both return "FooBoo".
const stepThree = () => {
  const numFromTo = myRange(11, 44);
  doubleMultipleOf(numFromTo, 7, 11, "FooBoo");
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  multipleOf(numFromTo, 7, "Foo");
  multipleOf(numFromTo, 11, "Boo");
  return numFromTo;
};

console.log(stepThree());

// STEP 4
// Add new rule for numbers smaller than 16 which return "Small" and a rule for numbers bigger than 95 which return "Big".
const stepFour = () => {
  const numFromTo = myRange(11, 97);
  smallBig(numFromTo, 16, 95, "Small", "Big");
  doubleMultipleOf(numFromTo, 7, 11, "FooBoo");
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  multipleOf(numFromTo, 7, "Foo");
  multipleOf(numFromTo, 11, "Boo");
  return numFromTo;
};

console.log(stepFour());

// STEP 5
// Add ability to change rules for initial requirement, instead of "Fizz" (multiples of 3) return "Buzz", and instead of "Buzz" (multiples of 5) return "Fizz"
const stepFive = () => {
  const numFromTo = myRange(1, 100);
  multipleOf(numFromTo, 3, "Buzz");
  multipleOf(numFromTo, 5, "Fizz");
  return numFromTo;
};

console.log(stepFive());

// STEP 6
// Add new rule for "multiples of 3 and 5" return "FTW", and for "multiples of 3 or 5" return "GG"
const stepSix = () => {
  const numFromTo = myRange(24, 50);
  doubleMultipleOf(numFromTo, 3, 5, "FTW");
  multipleOf(numFromTo, 3, "GG");
  multipleOf(numFromTo, 5, "GG");
  return numFromTo;
};

console.log(stepSix());

const allSteps = {
  one: stepOne,
  two: stepTwo,
  three: stepThree,
  four: stepFour,
  five: stepFive,
  six: stepSix,
};

module.exports = allSteps;
