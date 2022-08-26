let odd = [1, 3, 5, 7, 9];

// Even by for of loop;

function even(numArray) {
    let evenArray = [];
    for (num of numArray) {
        evenArray.push(num + 1);
    }
    return evenArray;
}

console.log(even(odd));

// even by for loop
function even2(numArray) {
    let evenArray = [];
    for (let i = 0; i <= (numArray.length - 1); i++) {
        evenArray.push(numArray[i] + 1);
    }
    return evenArray;
}
console.log(even2(odd));

// even by arrow function & for of loop
const even3 = numArray => {
    let evenArray = [];
    for (num of numArray) {
        evenArray.push(num + 1);
    }
    return evenArray;
}

console.log(even3(odd));

// Even by arrow function & for loop

const even4 = numArray => {
    let evenArray = [];
    for (let i = 0; i <= (numArray.length - 1); i++) {
        evenArray.push(numArray[i] + 1);
    }
    return evenArray;
}

console.log(even4(odd));

// even by map method and arrow function

const even5 = odd.map(num => num + 1);
console.log(even5);

