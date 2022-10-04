//functions: greeter
//parameters/arguments: name to greet
//return values: greeting

//parameter: is a variable let firstName = 'India';
// let lastName= 'Bowles'
function greeter(firstName, lastName) {
  // return "Hello " + firstName + " " + lastName;
  return `Hello ${firstName} ${lastName}`;
}

//call (argument)
let greeting = greeter("India", "Bowles");
console.log(greeting);

// console.log(greeter("India"));
