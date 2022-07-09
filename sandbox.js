
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

let html2 = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes. </span>
`;

console.log(html2);

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

// logical NOT (!)
let user = false;
//user not log in
if(!user){
console.log("You must be logged in to continue");
}

console.log(!true);
console.log(!false);

// break and continue

const scor = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scor.length; i++){
    
 if(scor[i] === 0)
{

 continue;}

 console.log("Your score ", scor[i]);

 if (scor[i] === 100){ 
        console.log("Congrats, you got max score")
        break;
    }
}

const grade = "P";

switch(grade){
    case "A":
        console.log("You got an A");
        break; 
    case "B":
        console.log("You got an B");
        break;

    case "C":
        console.log("You got an C");
        break;

    case "D":
        console.log("You got an D");
        break;

    case "E":
        console.log("You got an E");
         break;

    default:
        console.log("not a valid grade");

}
// Variables and block scopes
if(true){
    let year = 2023;
    console.log("it is now :", year);
if(true){
    let year = 2024;
 console.log(year);
}}
console.log(year);


// --------------------------------------------------------   CHAPTER 4 Functions and methods --------------------------------------
//function declaration - is hoisted = can be defined anywhere on the site.
function greet(){
console.log("hello there");
}

//function expression - with semicolons (a function stored inside a variable) - is not hoisted
// A better way to code?
const speak = function(name = "luigi", time = "night"){
console.log(`Good ${time} ${name}`);
};


greet();
speak("Hanna", "morning");

// ------ Returning a value

const calcArea = function(radius){
    return area = 3.14 * radius**2;
    
};

const a = calcArea(5);
console.log(a);

const calcVol = function(area){
    
};


// ----------------- Arrowfunction-------- with one peremiter doesnt need ()

const calAr = (radius) => 3.14 * radius**2;

calAr(5);
console.log(area);

const great = () => "Hello, world";

great();
console.log(great());

/*const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length, i++)(
        total += products[i] + products[i]*tax;)
        return total;
    )

}
*/
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
return total;
}

    console.log(bill([10,15,30], 0.2));

// -------------- functions vs methods ------------ 

    // function

const hellow = () => "Hellow";

let resultOne = hellow();
console.log(resultOne);

    //methods - essentially functions that you call to do something

    let resultTwo = fullName.toUpperCase();

    console.log(resultTwo);

// --------------------------- CALLBACK FUNCTIONS ------------
// Passes in another function as an argument
    // -------------------------- Scrolls through each name --------------



const logPerson = (ninja, index) => 
{console.log(`${index} - hellow ${ninja} `)}

ninjas.forEach(logPerson);


const ul = document.querySelector(".people");

let html= ``;

ninjas.forEach((person) => {
    html += `<li style= "color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

//------------------------------------------------------CHAPTER 5 - OBJECT LITERALS------------------------------
//Objects have properties(email, username, gender) and things they can do(methods; ex login logout)
//or properties in blog: title, content, author, and things it can do: publish, unpublish, delete.

//Defining properties:
let useri = {
    name:"crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: ["Why mac & cheese rules", "20 things to do with marmite"],
    login: function(){
        console.log("the user is logged in");
    },
    logout: function(){
        console.log("the user log out");
    },
    logBlogs: function(){
        console.log("This user has written: ");
        this.blogs.forEach(blog => {
            console.log(blog);

        })
    }
};

console.log(useri.name);
//anotherway of doing it:
console.log(useri["name"]);

//changing the properties:
useri.age = 35;
useri["name"] = "Mario";
console.log(useri.age);
console.log(useri.name);

console.log(typeof useri);


//---------------- Adding Methods------

useri.login();
useri.logout();

//------------------------------This-------------------------

//it is a context object (Works within the block)
//This cannot be used with arrowfunctions

console.log(this);
useri.logBlogs();
