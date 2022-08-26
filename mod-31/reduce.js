const numArray = [1, 9, 17, 22];
let total = 0;
for (num of numArray) {
    total = num + total;

}
console.log(total);
let total2 = 0;
let totalReduced = numArray.reduce((total2, num) => total2 + num);

console.log(totalReduced);