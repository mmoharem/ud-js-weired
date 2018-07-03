// A) Objects and the Dot:

/*
var person = new Object();

person['firstname'] = 'Tony'; //[] the computed member access
person['lastname'] = 'Alicea';

var firstNameProperty = 'firstname';

console.log(person);

console.log(person[firstNameProperty]);
console.log(person['firstname']);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object;
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address);
console.log(person.address.street);
*/

///////////////////////////////////////////////////////////////////////////

// B) Object Literal {}:

/*
// var person = new Object; = var person = {};
var Tony = {
    firstname: 'Tony',
    lastname: 'Alice',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

console.log(Tony);

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony); //Hi Tony

//calling the greet() function and create object on the fly, using (object letral syntax)
greet({ firstname: 'Mary', lastname: 'Doe' }); //Hi Mary

greet(Tony); //Hi Tony

Tony.firstname = 'jane';
greet(Tony); //Hi jane
*/


///////////////////////////////////////////////////////////////////////////

// C) Framwork: Facking Namespaces:

/*
// Ex-1:
var greet = 'Hello';
var greet = "Hola!";

console.log(greet); // Hola

// To solve this problem
// Ex-2
var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!'; //Hola

console.log(english.greet); // Hello
console.log(spanish.greet); //Hola

//.....Note: dont forget the direction of Member Acces Operator(.) associativity L--->R.

// To add new properties on the fly:
// Ex-3:
var english = {
    greeting: {
        greet: 'Hello!'
    }
};

var spanish = {};

console.log(english.greeting.greet); // Hello

spanish.greeting = {};
spanish.greeting.greet = 'Hola!';
console.log(spanish.greeting.greet); // Hola
*/

////////////////////////////////////////////////////////////////////////////////

// D) Json and Object Literal
// var objectLiteral = {
//     firstname: 'Mary',
//     isAProgrammer: true
// }

// console.log(objectLiteral);

// In old day data was sent cross the inter as xml
// Ex:

//<Object>
//<firsname>Mary</firsname>
//<isAProgrammer>true</isAProgrammer>
//</Object>

// But now they send in jason, Which is look like object letral syntax but it must wrapped in ""
// Ex:

// {
//     "firstname": "Mary",
//     "isAProgrammer": true
// }

// So Jason is a subset of object letral context
// Ex:
/*
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jasonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }')

console.log(jasonValue);
*/

//////////////////////////////////////////////////////////////////////////

// E) Function are Objects: First class functions)

/*
function greet() {
    console.log('hi');
}

console.log(greet());

greet.language = 'english';
console.log(greet.language);
*/

//////////////////////////////////////////////////////////////////////////

// F) Function Statement and Function Expressions:

// Ex-1:
/*
var a;
console.log(a = 2); //retun 2 because = is an expresion
console.log(1 + 2); //retun 2 because + is an expresion

if (a === 3) { // if is statment and have expresion (a === 3)

}

// In js the function can be a statment or expresion because its object.

// Ex-2:
// function statment

greet(); // we can call greet before declaration becaus of hoesting

function greet() {
    console.log('hi');
}

//Ex-3:

Function as expression

console.log(annonymousGreet); //undefined

var annonymousGreet = function() { //it is anonymaous, they have no name
    console.log('hello')
}
*/

// annonymousGreet(); //hello // the function called by the name of the variable not yhr fun.

// Ex-4:
/*
function log(a) {
    console.log(a);
}

log(2);


log({
    greeting: 'hi'
});

log(function() {
    console.log('hi');
});
*/
/////
/*
// var b;

function log(b) {
    b();
}

log(function() {
    console.log('hi');
});
*/

//////////////////////////////////////////////////////////////////////////////

// G) By Value vs By Refrence:

/*
// 1- by value (primitives)
var a = 3;
var b;

// a = b; // undifined

b = a; // b = 3
a = 2; // b = 3
console.log(b);
*/
//////

// 2- by refrence (objects & fn)
/*
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); //{greeting: "hello"}
console.log(d); //{greeting: "hello"}

//even as parameter

function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); //{greeting: "Hola"}
console.log(d); //{greeting: "Hola"}
/////

c = { greeting: 'howdy' }; // with = operator c will initialized with new value and address.
console.log(c); //{greeting: "howdy"}
console.log(d); //{greeting: "Hola"}
*/

////////////////////////////////////////////////////////////////////////

// Ex-1:
/*
console.log(this); //window object

function a() {
    console.log(this);
}

a(); //window object
*/

// Ex-2: Using Function
/*

function a() {
    console.log(this);
    this.newvariable = 'hello';
}

a(); //window object

console.log(newvariable);
*/

// Ex2: Using object method
/*
var c = {
    name: 'The c object',
    type: 'Object',
    log: function() {
        this.type = 'updated type';
        console.log(this); //this refer to the object c
    }
}

c.log(); //{name: "updated type", type: "Object", log: ƒ}

 */

// Ex2: Using method inside method
/*
var c = {
        name: 'The c object',
        type: 'Object',
        log: function() {
            var self = this; // For solving this broblem we set new variable (self) = to (this)
            this.type = 'updated type';
            console.log(this); //this refer to the object c

            var setName = function(newName) {
                self.name = newName;
            }
            setName('Updated name');
            console.log(this);
        }
    }
    // So when setName invoked and the parser didnt find value for (self) they go to the outer env (obj c) find and set the value of self

c.log(); //{name: "updated type", type: "Object", log: ƒ}

*/

//////////////////////////////////////////////////////////////////
// I) Arrays - collection of anythings:

//To inialize array:
// var arr = new Array();
// var arr = [];

/*
//Js array is dynamicly typed
var arr = [
    1,
    2,
    3,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    'hello'
]

console.log(arr); //[1, 2, 3, false, {…}, ƒ, "hello"]

arr[5](arr[4].name);
*/

////////////////////////////////////////////////////////////////

// J) Argument and Spread:
// Ex-1:

/*
function greet(firstname, lastname, language) {

    // language = language || 'spanish'; //Setting default value.

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('------');
}

greet(); //undefined, undefined, undefined
//If start to pass argument they proccessed fron left-to-right
greet('john', ); //john, undefined, undefined
greet('john', 'Doe'); //john, Doe, undefined
greet('john', 'Doe', 'en'); //john, Doe, En
*/

// Ex-1:

/*
function greet(firstname, lastname, language) {

    language = language || 'spanish'; //Setting default value.

    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); // return a like array of all the function arg
    console.log('arg 0:' + arguments[0]);
    console.log('------');
}

greet(); //undefined, undefined, undefined
//If start to pass argument they proccessed fron left-to-right
greet('john', ); //john, undefined, undefined
greet('john', 'Doe'); //john, Doe, undefined
greet('john', 'Doe', 'en'); //john, Doe, En
*/

//////////////////////////////////////////////////////////////////////////////

// F) Framwork Aside: Function Overloading:

/*
function greet(firstName, lastName, language) {
    language = language || 'eng';

    if (language === 'eng') {
        console.log('Hello ' + firstName + ' ' + lastName);
    }

    if (language === 'esp') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }
}

greet('john', 'doe', 'eng');
greet('john', 'doe', 'esp');

function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'eng');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'esp');
}

greetEnglish('john', 'doe');
greetSpanish('john', 'doe');
*/

////////////////////////////////////////////////////

// L) Immeditely Invoked Function Expression (IIFE):

// Ex-1:
/*
var greeting = function(name) {
    console.log('Hello ' + 'john');
}();

// console.log(greeting);

// Ex-2:

//To have a function expressin without putting it in a var us paranthes ()
// to cheet the parser

var firstName = 'Moh';

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name)
}(firstName)); // It can be invoked inside the parenthisis or out
*/

/////////////////////////////////////////////////////////////////

// M) Framwork Aside: IIFE and safe code:
// It safe to run your code into paranathis to not get conflict with other code and then immediatly invoke the.
// But if you want to over write the global object

/*
var greeting = 'Hola';

(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello'; // over-wright hola in the global object.
    console.log(greeting + ' ' + name);
})(window, 'John');

console.log(greeting);
*/

//////////////////////////////////////////////////////////////////

// N) Understanding Closures:

// 1- Part-1:
/*
function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}

var sayHi = greet('Hi'); //clousr is that the js engine close-in the execution context to its outer variables that it has any refrence even his context has goen. 
sayHi('Tony');

greet('Hi')('Tony');
*/

// 2- Part-2:   
/*
function buildFunctions() {
    var arr = [];

    for (i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    return arr;
}

var fs = buildFunctions();
console.log(fs); // [ƒ, ƒ, ƒ]

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3 This is because the value of i is what it is at the moment that i execute the function

//...... Note: free variablse: is the variables that outside the function but you have access to
*/

// So To make that work:

//option-1: Using ES6 let
/*
function buildFunctions() {
    var arr = [];

    for (i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        );
    }
    return arr;
}

var fs = buildFunctions();
console.log(fs); // [ƒ, ƒ, ƒ]

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
*/

//option-2: Using old js
/*
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(i) {
                return function() {
                    console.log(i);
                }
            }(i))
        )
    }
    return arr;
}

var fs = buildFunctions();
// console.log(fs); // [ƒ, ƒ, ƒ]

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
*/

// My Anser:
/*
function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(console.log(i))
    }
    return arr;
}

var fs = buildFunctions();
// console.log(fs); // [ƒ, ƒ, ƒ]

fs[0]; // 3
fs[1]; // 3
fs[2]; // 3
*/

//////////////////////////////////////////////////////////////////

// O) Framwork Aside: Function Factories:
/*
function greeting(language) {
    return function greet(firstName, lastName) {


        if (language === 'eng') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if (language === 'esp') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }
    }
}
greeting('eng')('Moh', 'Moharram');

var greetSpanish = greeting('esp');
greetSpanish('Moh', 'Moharram');
*/

////////////////////////////////////////////////////////////////

// P) Closures and Callbacks:
/*
// Ex-1:
function sayHiLater() {
    var greeting = 'Hi!';
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// Ex-2: 
// Jquery using function expression and first-class
// $("button").click(function() { // here we use a first class function (.click), and function expression.

// });

// Ex-3:
function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;

    callback(); // the (callback), it runs the function i give it.
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('I am done!');
});
*/

///////////////////////////////////////////////////////////////////////////////

// Q) Call(), Apply() and Bind():

// 1- Bind:
// Ex-1:
/*
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();


// Ex-2:
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}.bind(person);


logName();


// Ex-3: Passin Arguments
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}

var logPersonName = logName.bind(person); //bind create a copy of the fn which we can pass arguments later
logPersonName('languag:', 'english');
*/


// 2- Call:
// Ex-1:
/*
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}

// logName.call(person);

//unlike the (.bind), The (.call) not create a copy of the function
//It actuly execute the function and call the required method as given argument.
//the function argument must be call on the call execution,
var logPersonName = logName.call(person, 'languag:', 'english');
*/


// 1- Apply:
// Ex-1:
/*
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}

// logName.call(person);

//The (.apply) is like the (.call), But the defferance is that it pass and array not string.
var logPersonName = logName.apply(person, ['languag:', 'english']);
*/


// Ex-2:
/*
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}).apply(person, ['languag:', 'english']);
*/

// Ex-2: // Function Borrowing:
/*
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}

var person2 = {
    firstName: 'Jane',
    lastName: 'Waise'
}

var borrowPerson = person.getFullName.apply(person2);
console.log(borrowPerson);
*/

// Ex-3: // Function Currying:
/*
function multiply(a, b) {
    return a * b;
}

var multipeByTwo = multiply.bind(this, 2); // bind the value of (var a = 2;)

console.log(multipeByTwo(3)); //2*3: 6

var multipeByTwo = multiply.bind(this, 2, 2); // bind the value of both (var a = 2;) and (var b = 2;)

console.log(multipeByTwo(3, 6)); //2*2: 4
*/

///////////////////////////////////////////////////////////////////////////////////

// R) Functional Programing:

// Ex-1: without functional prrograming 
/*
var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

console.log(arr2);


// Ex-1: with functional prrograming 
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(fn(arr[i])); // item = arr[i]
    }
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);


/// --> Case:1
var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

console.log(arr2);

///--> Case:2
var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});

console.log(arr3);

///--> Case:3
var z = function(x) {
    return arr4 = mapForEach(arr1, function(item) {
        return item > x;
    });
    // console.log(arr4);
}

z(2);
console.log(arr4);


var checkWithLimit = function(limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1, checkWithLimit.bind(this, 1))

console.log(arr5);

// /--> Case:5
var passLimiter = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr6 = mapForEach(arr1, passLimiter(1));

console.log(arr6);


*/
///////////////////////////////////////////////////

// /--> Case:5 Using Underscorejs Library:

// var arr7 = _.map(arr1, function(item) { return item * 2 });
// console.log(arr7);