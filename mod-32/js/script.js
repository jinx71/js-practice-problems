const url = "https://jsonplaceholder.typicode.com/todos/1";

function loadData() {
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

const userUrl = "https://jsonplaceholder.typicode.com/users";

function loadUsers() {
    fetch(userUrl)
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(data) {
    const ul = document.getElementById('userList');
    for (const user of data) {
        console.log(user.name)
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}