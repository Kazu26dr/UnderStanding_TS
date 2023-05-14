type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combines(
  input1: Combinable ,
   input2: Combinable ,
   resultConversion: ConversionDescriptor,
   ) {
  let result;
  if(
    (typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  }else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // }
  // if(resultConversion === 'as-number') {
  //   result +result;
  // }else {
  //   return result.toString();
  // }

}

const combineAge = combines(30,26, 'as-number');
console.log(combineAge);

const combineStringAge = combines('30','26', 'as-number');
console.log(combineStringAge);


const combineName = combines('Max', 'Anna', 'as-text'); 
console.log(combineName);