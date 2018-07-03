//C) The global enviroment and the global object

/*
var a = 'Hellow World';

function b() {

}
*/

// check the window object on the browser cosole you will find a & b.
// When creating variales and function in js outside a funct they wiil attached to the global object. 
// By typing a and window.a you will get the same value 'Hellow World'

////////////////////////////////

/*
//D) The execution context: Creation and Hoisting

// var a = 'Hello World';

// function b() {
//     console.log('Called b!')
// }

// b();
// console.log(a);

b();
console.log(a);

var a = 'Hello World';

function b() {
    console.log('Called b!')
}
*/

// In other program languages it will not work because it will execute the code line by line
// In js: it will output
//value: Called b!
//value: undefined
// if i remove var a = 'Hello World', i will get error///this is clled (Hoisting)

//This is because the excution context is made in two phases,
// 1- The Creation Phase
//which setting up (global object, this & outer Env) in the memory
//In that phase the parser run throw code and begins to set up whats written for translation and
//sets up memory space for var and func +++ which not (Hoisting)
// So after execut phase all func & var will exesit in memory+++ 
// but For:
// functions they set them after execution
// variable they set them as place holder with undifined without looking in thier values


////////////////////////////////////////////////////////////////////////

// F) The execution context: Code Execution phase

/*
function b() {
    console.log('Called b!');
}

b();
console.log(a);

var a = 'Hello World!';

console.log(a);
*/

///////////////////////////////////////////////////////////////////////

// I) Functions context and variable environments:

/*
function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
*/

//1
//2
//undifined
//1

//////////////////////////////////////////////////////////////////

// j) The Scope Chain:

/*
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}


var myVar = 1;
a();
b();
*/

// :1
// :1
//Lexical Environment: Js cares about lexical env when it comes the outer refrence
// Refrence to uter environement: every execution context have a refrence to its outer invironment


/*
function a() {
    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    b();
}


var myVar = 1;
a();
b();
*/

// :1
// :error b is not defined

/////////////////////////////////////////////////////////////////////////////////////

// l) What about asynchronous callbacks ?

//Long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

//output: press click while the page load
// finished function
// finished execution
// click event