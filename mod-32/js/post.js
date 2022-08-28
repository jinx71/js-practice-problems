
const url = 'https://jsonplaceholder.typicode.com/posts';
function loadPost() {
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(posts) {

    // const postContainer = document.createElement('div');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('card')
        // console.log(post)
        let UserPost = `
    <div class="card-header">
            ${post.id}
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
                <p>${post.body}</p>
                <footer class="blockquote-footer">${post.title}</cite>
                </footer>
            </blockquote>
        </div>
    `

        postDiv.innerHTML = UserPost;
        console.log(postDiv);
        document.body.appendChild(postDiv);

    }
}
loadPost();