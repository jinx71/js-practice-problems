const deleteBtn = document.getElementById('btn-delete');
const comment = document.getElementById('comment');
const commentBox = document.getElementById('commentBox');

deleteBtn.addEventListener('click', function () {
    comment.innerHTML = '';
})
commentBox.addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (text === 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
})
document.getElementsByClassName