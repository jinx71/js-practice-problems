const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const b = nums.filter(g);

function g(num) {
    return num > 10;
}

console.log(b);