/* 1
const isEven = function (num) {
  return num % 2 === 0;
}
isEven(5); // NOTHING is returned to console but (false) would be returned in function
console.log(isEven(5)); //False is returned to console. 
*/

const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);