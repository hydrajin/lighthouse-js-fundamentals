/* 1st 

const sayHello  = function () {
  console.log("Hello, world");
}

sayHello(); */


const sayHello  = function (name) { // We can think of parameters ex. (name) as variables that can be used 
  // - only in the function. And whos values vary and are set when we call the function
  console.log("Hello, " + name);
}
sayHello("Suliman");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

