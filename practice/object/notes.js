console.log('--------------------Notes Start-----');
// 1- Object.keys(obj) – returns an array of keys.
//    Object.values(obj) – returns an array of values.
//    Object.entries(obj) – returns an array of [key, value] pairs.
// /*
// Ex:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student)); //["name", "sclass", "rollno"]
console.log(Object.values(student)); //["name", "sclass", "rollno"]
console.log(Object.entries(student)); //["name", "sclass", "rollno"]

// 2- typeOf(), join(), toString();
console.log('-----2-----');
/*

console.log(typeof student); //object
console.log(Object.keys(student).join(", ")); //name, sclass, rollno
console.log(Object.keys(student).toString()); //name,sclass,rollno
*/

// 3- Delete...................
console.log('-----3-----');
/*

console.log(student);
delete(student.rollno);
console.log(student);
*/

// 4- For in, hasOwnProperty:....
console.log('-----4-----');
/*

var count = 0;
var i;

for (i in student) {
    if (student.hasOwnProperty(i)) {
        count++;
    }
}
console.log(count);
*/

// 5- Object length:....
console.log('-----4-----');
/*

var objectLength = Object.keys(student).length;
console.log('Object Length = ' + objectLength);
*/
///
console.log('----------------------Notes End-----');