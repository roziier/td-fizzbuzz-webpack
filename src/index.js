// import "./css/back.scss";
import myRange from "./my-range";
import multipleOf from "./ret-multipleof";
import doubleMultipleOf from "./ret-2multipleof";

// STEP 1
const stepOne = () => {
  const numFromTo = myRange(1, 100);
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepOne());

// STEP 2
const stepTwo = (val1, val2) => {
  const numFromTo = myRange(val1, val2);
  doubleMultipleOf(numFromTo, 3, 5, "FizzBuzz");
  multipleOf(numFromTo, 3, "Fizz");
  multipleOf(numFromTo, 5, "Buzz");
  return numFromTo;
};

console.log(stepTwo(21, 25));

// STEP 3
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

const allSteps = {
  one: stepOne,
  two: stepTwo,
  three: stepThree,
};

module.exports = allSteps;
