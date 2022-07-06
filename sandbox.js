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

let radius = 10;
const pi = 3.14;

console.log(radius, pi);
// ** betyder upphöjt let calc = pi * radius**2;
//console.log(calc);

//order of operations: B I D M A S (B - brackets, I - square, D-division,  M - multiplication, A - addition, S - subtraction)

/*let likes = 10
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
console.log(likes); */

//NaN = Not a number

let together = "the blog has " + radius + " likes!"
console.log(together);

// ---------------------------------- Template string-----------------------------------

const title = "Best reads of 2019"
const author = "Mario"
const likes = 30;

//Concatenation way 

let book = "The book called " + title + " by " + author + " has " + likes + " likes."
console.log(book);

//Template string way

let tempbook = `The log called ${title} by ${author} has ${likes} likes.`
 console.log(tempbook);

//Creating html templates

let html = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes. </span>
`;

console.log(html);

// ------------------------------------- ARRAYS-----------------------

let ninjas = ["Hanna", "Mohammad", "Valle", "Loki"];

ninjas[3] = "LOKLOK";

console.log(ninjas[1]);

console.log(ninjas.length); 


//let ages [20, 25, 30, 35];



let togetherino = ninjas.join (",");
let position = ninjas.indexOf("Valle");
let jointhem = ninjas.concat(["mamma", "pappa"]);
let addin = ninjas.push( "mamma");
let popping = ninjas.pop();

// ---------------------- Null and undefined -----------------

let numb = null;

//Null = 0 in numbers, "null" in string

//-------------------Boolean and Comparisons-----------------------

console.log(true, false, "true", "false");

//methods can return booleans

let check = email.includes ("@");
console.log(check);

let preview = ninjas.includes("Loki");
console.log(preview);

//Comparison operators
let age = 30;
console.log(age == 25);
console.log(age != 30);
console.log(age > 24);
console.log(age < 25);
console.log(age <= 30);

console.log(firstName == "Hanna");
console.log(firstName > "Mohammad");

//---------------------------- Loose vs Strict ----------------

//Loose comparison
console.log(age == "30");
console.log(age != "30");

//strict comparison, different types cannot be equal

console.log(age === 25);
console.log(age!==25);
console.log(age === "30");

// ------------------- Type conversion ------------------------

let score = "100";
score = Number(score);
console.log(score + 1);
console.log(typeof score);

let makeastring = String(score);
console.log(typeof makeastring);

let blabla = Boolean(100);
console.log(blabla);

//Boolean, even numbers are true, odd numbers are false


// --------------------------------------------------------   CHAPTER 2 JAVASCRIPT BASIC --------------------------------------

//-------------------Controlflow basics ----------------------

// --------------- Loops----------------

//forloops

for(let i = 0; i < 5; i++){
console.log("in loop ", i)
}
console.log("loop finished");

const listing= ["shaun", "mario", "luigi"];

for (let i = 0; i < listing.length; i++){
    let htmlagain = `<div>${listing[i]}</div>`;
    console.log(htmlagain);
}

//Whileloop
let x = 0;
while(x < 5){
    console.log("in loop ", x);
    x++;
}

while(x < listing.length){
    console.log(listing[x]);
    x++;
}

//do while loop

do {
console.log("in loop ", x);
x++;}
while(x < 5);

//----------------conditional statements--------------

//if statement

const year = 2022;

if(year > 2022){
    console.log("you are in year 2022");
}

if(ninjas.length > 3)
{console.log("Thats alot of ninjas");
}

const password = "password";

if(password.length >= 12){
    console.log("That password is mighty strong");
}

else if(password.length >=8){
    console.log("That password is long enough");
}

else {
    console.log("Password is not long enough");
}

//logical operators or || and &&

if(password.length >= 12 || password.includes("@")){
    console.log("That password is mighty strong");
}

else if(password.length >=8){
    console.log("That password is long enough");
}

else {
    console.log("Password is not long enough");
}

