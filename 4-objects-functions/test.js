// Ex-1: Argument spread

function greet(firstname, lastname, language) {

    // language = language || 'spanish'; //Setting default value.

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('------');
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'eng');
}

greetEnglish('Moh', 'Moharram');

//////////////////

// Ex-2: Function Closure
(function() {
    function greet(firstname, lastname, language) {

        // language = language || 'spanish'; //Setting default value.

        console.log(firstname);
        console.log(lastname);
        console.log(language);
        console.log('------');
    }

    function greetEnglish(firstname, lastname) {
        greet(firstname, lastname, 'eng');
    }

    greetEnglish('Moh', 'Moharram')
})();


// Ex-3 Function return fn or (Factory function)
function greet(firstname, lastname, language) {

    // language = language || 'spanish'; //Setting default value.

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log('------');
}

function greeting(language) {
    return function greet(firstName, lastName) {


            if (language === 'eng') {
                console.log('Hello ' + firstName + ' ' + lastName);
            }

            if (language === 'esp') {
                console.log('Hola ' + firstName + ' ' + lastName);
            }
        }
        // greet(firstName, lastName);
}

greeting('eng')('Moh', 'Moharram');

var greetSpanish = greeting('esp');
greetSpanish('Moh', 'Moharram');