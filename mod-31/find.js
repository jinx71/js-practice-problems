const findArray = [33, 50, 79, 78, 90, 101, 30];
let a = findArray.find(num => {
    if (num % 10 == 0) {
        return num;
    }

})
console.log(a);