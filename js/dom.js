// const liCollection = document.getElementsByTagName('li');
// for (let li of liCollection) {
//     console.log(li.innerText);
// }
const food = document.getElementsByClassName('food');
console.log(food[0].innerText);
let music = document.getElementById('music');
console.log(music.innerText);
let musicA = document.querySelectorAll('.list');
console.log(musicA);
let musicB = document.querySelector('.list');
console.log(musicB.innerText);

let a = document.getElementById('music');
console.log(a.getAttribute('id'));
a.setAttribute('class', 'tik');
a.classList.add('tok');
a.classList.remove('tik', 'tok');

const red = document.getElementById('red');
const green = document.getElementById('green');
red.addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = 'yellow';
    // console.log(body);
    // body.style
})
green.addEventListener('click', function makeRed() {
    document.body.style.backgroundColor = 'green';
    // console.log(body);
    // body.style
})