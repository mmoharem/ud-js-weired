// d) Operators Precedence and associativity.

//////Ex-1:
/*
var a = 2,
    b = 3,
    c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
*/

//answer
//: 4
//: 4
//: 4
//So how this work: the code will run from the right because the associativity of = is R-to-L, so the b = c, (= 4),
//then a = b, (4)

//////Ex-2:
/*
var a = 3 + 4 * 5;
var b = (3 + 4) * 5;

console.log(a);
console.log(b);
*/

//answer
//: 23
//: 35
// because the braket have the highter precedence

///////////////////////////////////////////////////////////////////

// E) Coercion:

// Ex-1;
/*
var a = 1 + 2;
var b = 1 + '2';

console.log(a);
console.log(b);
*/

//answer
//: 3
//: 12 //the js coercie the num 1 to string 1.

////////////////////////////////////////////////////////////////////////

// F) comparison Operators:

/*
console.log(1 < 2 < 3); // true
//Why: because the code run (1 < 2 = true) then (true < 3 = true)

console.log(3 < 2 < 1); // true
//Why: because the code run (3 < 2 = false) then (false < 1 = true)
// the false value = 0 & true value = 1,
// to check the number value use the (Number()) function.
console.log(Number('2')); //: 2
console.log(Number(false)); //: 0
console.log(Number(true)); //: 1
console.log(Number(undefined)); //: NaN
console.log(Number(null)); //: 0
*/

//// Equality (==): This is not safe to use beacuse it coerce the type  
// Ex:

/*
console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(false == 0); // true
console.log('' == 0); // true
console.log('' == false); // true

//// Strict Equality (===): This is safer beacuse it is not coerce the type
// Ex:

console.log(3 === 3); // true
console.log(3 === '3'); // false    
console.log(false === 0); // false
console.log('' === 0); // false
console.log('' === false); // false
*/

/////////////////////////////////////////////////////////////////
// H) Default Value:

// Ex-1:
/*
function greet(name) {
    console.log('Hello ' + name);
}

greet('Tony'); // Hello Tony

greet(); // Hello undefined
*/

// Ex-2: using default value
// /*
function greet(name) {
    name = name || '<You name here>';
    console.log('Hello ' + name);
}

greet('Tony'); // Hello Tony
greet(0); // Hello <You name here>

greet(); // Hello <You name here>
// */