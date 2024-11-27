let first = 'Aldo';
let last = 'Mancilla';
let third = 'Ignacio';
let forth = 'Huertas'

//function declaration
function fullname1 (first, last) {
    return `${first} ${last}`;
}

function thirdForth (third, forth){
    return `${third} ${forth}`;
}

// function expression
const fullName = function (first, last) {
    return `${first} ${last}`;
}

//arrow function expression
const fullName2 = (firsName, lastName) => `${firsName} ${lastName}`;


//expression
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);