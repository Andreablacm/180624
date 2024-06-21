// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const addition = number => {
  //   let operation = number + 2;
  //   console.log(operation);
  return number + 2;
};

const resulSum = addition(3);
console.log(resulSum);

const double = b => {
  return b * 2;
  console.log(multiply);
};

double(10);

const longWord = word => {
  return word.length;
};
const lettersWord = longWord('keko-locón');
console.log(lettersWord);

const wordMayus = wordTwo => {
  console.log(wordTwo.toUpperCase());
};

wordMayus('keko-locón');

const twoWords = (word1, word2) => {
  if (word1 === word2) {
    console.log('Estas palabras son iguales');
  } else {
    console.log('Estas palabras no son iguales');
  }
};

twoWords('Hola', 'Hola');

const twoNumbers = (a, b) => {
  return a * b;
};

const returnTwoNumbers = twoNumbers(2, 3);
console.log(returnTwoNumbers);

const sumDigits = num => {
  const operation = Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2));

  return operation;
};

const returnOperation = sumDigits('200');
console.log(returnOperation);

const longestWord = (word1, word2) => {
  if (word1.length > word2.length) {
    return word1;
  } else {
    return word2;
  }
};
const returnLongestWord = longestWord('Andrea', 'Celi');
console.log(returnLongestWord);

const getFirstElement = array => {
  return array[0];
};

const returnGetFirstElement = getFirstElement([2, 3, 4]);
console.log(returnGetFirstElement);

const getArrayElement = (array, position) => {
  return array[position];
};

const returnGetArrayElement = getArrayElement([2, 3, 5, 6], 3);
console.log(returnGetArrayElement);

const shortestWord = (wordOne, wordTwo) => {
  if (wordOne.length < wordTwo.length) {
    return wordOne;
  } else {
    return wordTwo;
  }
};

const returnShortestWord = shortestWord('hoja', 'arbol');
console.log(returnShortestWord);

const onlyEven = (num1, num2, num3) => {
  if (num1 % 2 == 0) {
    console.log(num1);
  }

  if (num2 % 2 == 0) {
    console.log(num2);
  }

  if (num3 % 2 == 0) {
    console.log(num3);
  }
};

onlyEven(10, 11, 20);

const twoOperations = number => {
  console.log(Math.pow(number, 2), Math.pow(number, 3));
};

twoOperations(2);

// EJERCICIOS CALLBACKS

// 1 - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbersMultiplyForIndex = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

numbersMultiplyForIndex([1, 2, 3, 4, 5]);

// 2 - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice en el array más 2, es decir index + 2

const numbersIndexDivision = array => {
  const results = array.map((number, index) => {
    return number * (index + 2);
  });

  return results;
};

const resultsDivided = numbersIndexDivision([1, 2, 3, 4, 5]);
console.log(resultsDivided);

// 3 - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const upperWords = words => {
  const newWords = words.map(word => {
    return word.toUpperCase();
  });
  return newWords;
};

const resultNewWords = upperWords(['tonto', 'imbécil', 'estúpido']);
console.log(resultNewWords);
