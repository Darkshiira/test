//alert('hello world');
console.log(1);
//this is a comment

/* this is also a comment*/
//strings:
console.log("Hi everyone");

let email = "darkshiira@hotmail.com";

let firstName = "Hanna";
let lastName = "Arefi";
let fullName = firstName + " " + lastName;

//Single characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

let index = email.indexOf('@');
console.log(index);

let results = email.lastIndexOf('m');
console.log(results);

//slice

let chopped = email.slice(0,10);
console.log(chopped);

let chop = email.substr(4,10);
console.log(chop);
//it adds the second numbers amount of spots

let change = email.replace('i', "w");
console.log(change);

// -------------------------------------------------------------------------------------------Numbers

