const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("\nIngredients while loop:")
let x = 0; 
while (x < ingredients.length) {
  console.log(ingredients[x]); // DON'T forget to include the [x] when console logging. 
  x++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("\nIngredients for loop:")
for(y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nIngredients in reverse:")
for(let z = ingredients.length - 1; z > 0; z--) { // I added the -1 to .length because arrays have indexes that start at 0 instead of 1
  //The last value in the array would have a value 1 less than if you were to count the elements
  console.log(ingredients[z]);
}