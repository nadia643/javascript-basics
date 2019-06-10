const getNthElement = (index, array) => {
  if (array <= 4) {
    return array[index];
  }
}; // need to work on this one

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(array)
};

const numbersToStrings = (numbers) => {
  return numbers.toString();
};

const uppercaseWordsInArray = (strings) => {
  return strings.toUpperCase(strings);
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  if (numbers % 2 === 0) {
    return onlyEven;
  }
};

const removeNthElement2 = (index, array) => {
  array.remove[index, 2];
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
