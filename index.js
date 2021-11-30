const taskList = document.querySelector('#result');
const deleteBtn = document.querySelector('.delete-btn');
let deletedTasks = 0;
// grab add button
const addBtn = document.querySelector('#add-btn');
console.log(addBtn);
// add event listener to button
addBtn.addEventListener('click', () => {
    // get value of task from input
    const taskValue = document.querySelector('input#task').value;

    // create a div with a class of task-card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // create an input with class task-new
    const taskNew = document.createElement('input');
    taskNew.classList.add('task-new');
    taskNew.value = taskValue;

    // create a div with class controls
    const controls = document.createElement('div');
    controls.classList.add('controls');

    // create edit button with class edit-btn
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    // create delete button with class delete-btn
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // append buttons to controls
    controls.append(editBtn, deleteBtn);

    // append controls to task card
    taskCard.append(taskNew, controls);
    taskList.append(taskCard);

    // event listener on delete button 
    deleteBtn.addEventListener('click', (e) => {
        deleteTask(e);
    })
})

// Functions

// delete task from list
function deleteTask(e) {
    // increment deletedTasks variable to check in tests
    deletedTasks++;
    // hide the task card that is being deleted
    e.target.parentElement.parentElement.setAttribute("hidden", true);
}


