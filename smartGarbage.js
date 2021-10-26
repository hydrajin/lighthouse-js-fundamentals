/*
Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.
Objects in JavaScript
We will need to access the proper value in the bins object using the `trash` as the key. If you're having trouble with this, take a look online to see how to use square bracket notation to access values in a JavaScript object.

Note: When we’re referencing a variable in the bracket notation, we can skip the quotes.

For example, say we called the function with the following arguments.

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
The smartGarbage function should return the object:

{
  waste: 4,
  recycling: 3,
  compost: 5
}
*/

// The function will take 2 arguments
// 1st argument: trash takes a string and compares it to determine what item is added
// 2nd argument: bins is an object that contains 3 properties {waste, recylcling, compost} of numerical value
// The function uses if statements to compare trash input string and adds it to one of 3 bin properties.



function smartGarbage(trash, bins) { // Given function with 2 parameters
  if (trash === "waste") {
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
