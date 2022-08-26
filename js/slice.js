// // // const a = [41, 42, 43, 44, 45, 78, 90, 87, 65, 43];
// // // // let b = a.slice(0, 2);
// // // // console.log(b);

// // // const c = a.splice(2, 5, 77, 76, 777);

// // // console.log(c);
// // const names = ['a', 'b', 'c', 'd', 'a', 'a', 'c', 'c', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// // // console.log(names.includes('a'));
// // // const temp = [];
// // // console.log(!temp.includes('a'));
// // function removeDuplicates(names) {
// //     const temp = [];
// //     for (let i = 0; i < (names.length - 1); i++) {
// //         const nList = names[i];
// //         if (!temp.includes(nList)) {
// //             temp.push(nList);
// //         }
// //         // console.log(nList);
// //     }
// //     return temp;
// // }
// // const original = removeDuplicates(names);
// // console.log(original);
// function printFoo(num) {
//     console.log('foo', num);
// }
// function printBar(num) {
//     console.log('bar', num);
// }
// function printFoobar(num) {
//     console.log('FooBar', num);
// }
// function division(num) {
//     if ((num % 3 == 0) && (num % 5 == 0)) {
//         return (printFoobar(num));
//     }
//     else if ((num % 3 == 0)) {
//         return (printFoo(num));
//     }
//     else if ((num % 5 == 0)) {
//         return (printBar(num));
//     }
// }
// for (let i = 1; i <= 10000; i++) {
//     division(i);
// }
const mobilePhone = [
    { name: 'samsung', price: 50000 },
    { name: 'pixel', price: 70000 },
    { name: 'iPhone', price: 130000 },
    { name: 'walton', price: 30000 },
    { name: 'xiaomi', price: 350000 },
    { name: 'redmi', price: 15000 },
    { name: 'Nokia', price: 5000 },

]
function cheapPhone(phone) {
    let myPhone = phone[0];
    for (let i = 0; i <= phone.length - 1; i++) {
        if (phone[i].price < phone[0].price) {
            myPhone = phone[i];
        }
    }
    return myPhone;
}
console.log(cheapPhone(mobilePhone));