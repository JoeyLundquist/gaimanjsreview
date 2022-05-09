console.log('I am in script.js');

let myName = 'Joey';

console.log(`My name is ${myName}`)

/* let -- a keyword, are are about to declare a var

myName -- the name of variable

= --- the assignment operator 

'joey' --- the value

*/
// use camelCase 
//other types of casing(not to use)
//snake_case my_lsat_name

//SCREAMING SNAKE_CASE

//Use camelCase!!!!
let lastName = 'Lundquist';


/*

Expressions
    -Some code that evaluates to a single value

*/

console.log('My name is ' + myName + ' ' + lastName);


function add(n1, n2){
    return n1 + n2
}

let result = add(5, 7);

console.log(result);
//let result = 12;

if(8 > 7) {
    //if false {....}    
    //cdoe goes here
}

let isJamseBond = myName + ' ' + lastName === 'James Bond';
//let isJamesBond = 'Joey Lundquist' === 'James Bond'
//let isJamesBond = false;

console.log('isJamesBond', isJamseBond)



/*

When concatenating a string and a number it will mostly change all of it to a string.


NaN = Not a Number - You just did some bad math

undefined = variable hasnt been defined.

*/

let somethingMaybe;

console.log(somethingMaybe)


function subtract( n1, n2){
    console.log('n1, n2', n1, n2)
    
    return n1 - n2;
}

subtract(7);

//console.log('nothingMaybe', nothingMaybe);
//reference error nothingMaybe has not been defined. 
//null nothing, on purpose

let artistName = 'Prince';
let artistLastName = null;

/**
 * conditional
 */




let datOFTheWeek = 'Monday';

switch (datOFTheWeek){
    case 'Monday':
        console.log('JS Review')
        break;
    case 'Tuesday':
        console.log('object')
        break;
}

//Ternary: if/else, and resolves to a value
let height = 55;
let msg = height > 50 ?
    'You can ride this ride'
    :
    'Keep growing, try later'

let welcomeMsg = `Welcome to the amusement park, ${myName}~
    ${height > 50 ? 'You can right it!' : 'too short sorry'}`;

// if you want to use the results you need to return it lols 


function isTallEnoughToRide(yourHeight, dangerLevel){
    let minHeight;
    if(dangerLevel === 'kiddie'){
        minHeight = 28;
    }
    else if (dangerLevel === 'intense') {
        minHeight = 55;
    }

    return yourHeight > minHeight;     //boolean

}
let maybe = isTallEnoughToRide(50, 'kiddie');
console.log(maybe)

function stressRelease(){
    console.log('yaaaaahahahahahahahaha');
}

let stressLevel = 20;
while (stressLevel > 5) {
    stressRelease();
    stressLevel--
}

function welcomeVisitors(name, height){
    console.log(`Hello ${name}`);
    
    if (isTallEnoughToRide(height, 'kiddie')){
        console.log(`Have Fun!!`);
    }
    else {
        console.log(`Do you know hwere your parents are?`);
    }
}


//declaring a function
//function declaration
function makeASentence(words){
    return words.join(' ') + '.';
}

//Anonymous function
//function expression
let makeASentence2 = function(words) {
    return words.join(' ') + '.';
}
//arrow function dont forget they need to be defined before being called. NO HOISTING!
let makeASentence3 = (words) => {
    return words.join(' ') + '.';
}

//if you only have 1 argument
let makeASentence4 = words => {
    return words.join(' ') + '.';
}

//one liner -- if its only one line of code with a return statement!
let makeASentence5 = words => words.join(' ') + '.';

//Calling/invoke a function
let welcome = makeASentence(['Welcome','to','Gaiman']);

//log() is a method of the console object
console.log('Yolo');

let numbers = [1, 2, 3, 4, 5]
//push() is a method of the numbers array
numbers.push(6);


let divider = 2 / '2'
console.log(divider)


/*
Javascript is: a loose / dynamic typed languages
lther languages are: strongly / statically typed.
*/

/**
 
Arrays

 */


let animals = ['cat', 'dog', 'bunny'];

//access by index
let firstAnimal = animals[0]; //'cat'
let lastAnimal = animals[2];  // 'bunny'

//for..of
for (let animal of animals){
    //animal  = 'cat
    console.log('animal is', animal)
    if(animal === 'bunny'){
        console.log('Rabbit')
    }
}

//for loop
for (let i=0; i < animals.length; i++){
    console.log(animals[i])
}

//while loops 

let bigNumber = 2**20;
/*while(bigNumber > 1) {
    bigNumber = bigNumber / 2;
    console.log(bigNumber);
}*/

while(true) {
    bigNumber = bigNumber / 2;
    console.log(bigNumber);
    
    if(bigNumber <= 1){
        break;
    }
}

animals.push('newt', 'lion', 'tomato frog');
for (let animal of animals){
    //animal  = 'cat
    console.log('animal is', animal)
    if(animal === 'bunny'){
        console.log('Rabbit')
    }
}


console.log(animals.join(', '))

