const deleteBtn = document.querySelector('.delete-btn');

deleteBtn.addEventListener('click', (e) => {
    deleteTask(e);
})

// delete task from list
function deleteTask(e) {
    e.target.parentElement.parentElement.remove();
}