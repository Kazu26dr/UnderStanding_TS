function adds(n1: number, n2: number, showReslut: boolean, phrase: string) {
  const result = n1 + n2;
  if (showReslut) {
    console.log(phrase + result);
  } else {
    return result;
  }

}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result';

adds(number1, number2, printResult, resultPhrase);



