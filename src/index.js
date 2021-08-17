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

module.exports = stepOne;
