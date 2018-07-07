console.log('--------------------Script Start-----');
// 1- Object.keys(obj) – returns an array of keys.
//Object.values(obj) – returns an array of values.
//Object.entries(obj) – returns an array of [key, value] pairs.

////////////////////////////////////////////////////////////////////////////////
var library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    },
]

var i;
var j;
var arr1 = [];
var arr2 = [];

// for (i in library) {
//     arr.push()
//         // console.log(library[1]);
//     for (j = 0; j < arr.length; J++) {
//         console.log(Object.values(Array.values(arr)));
//     }
// }
// console.log(arr);
// console.log(arr.entries());
function loop1(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        // console.log(arr1[i]);
        arr2.push(arr1[i])
        console.log(Object.values(arr2));
    }

}

// function loop2(arr1) {
//     for (i in ) {
//         console.log(arr1[i]);
//         arr2.push(arr1[i])
//         console.log(arr2);
//     }
// }

loop1(library);