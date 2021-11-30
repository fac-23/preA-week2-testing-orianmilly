const deleteBtn = document.querySelector('.delete-btn');
let deletedTasks = 0;

deleteBtn.addEventListener('click', (e) => {
    deleteTask(e);
})

// delete task from list
function deleteTask(e) {
    // increment deletedTasks variable to check in tests
    deletedTasks++;
    // hide the task card that is being deleted
    e.target.parentElement.parentElement.setAttribute("hidden", true);
}

