// A)Classical vs Prototypal Inhertance

/*
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Dont do this ever beacause it dramaticlly decreas the speed of procees the code
john.__proto__ = person;
console.log(john.getFullName()); //John Doe

var jane = {
    firstName: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName()); //Jane Default
*/

/////////////////////////////////////////////////////////////////

// C) Reflection and Extend:
/*
var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// Dont do this ever
john.__proto__ = person;
// console.log(john.getFullName());

for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

console.log('------------------');
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}


///Using Underscore;
var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function() {
        return firstName;
    }
}

_.extend(john, jane, jim);
console.log(john);

*/

//////////////////////////////////////////////////////////////////////

// D) fn constructor and (new) keyword:
/*
function Person(firstName, lastName) {
    console.log(this);
    this.firstNmae = firstName;
    this.lastName = lastName;
    console.log('this fn invoked.')
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Smith');
console.log(jane);
*/

//////////////////////////////////////////////////////////////////////////////

// E) fn constructor and .Prototype:

// /*
function Person(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('this fn invoked.')
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Smith');
console.log(jane.getFullName());
// */