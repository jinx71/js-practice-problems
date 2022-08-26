const filterArray = [33, 50, 79, 78, 90, 101, 30];
let a = filterArray.filter(num => {
    if (num % 10 == 0) {
        return num
    }
})
console.log(a);