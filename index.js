// grab add button
const addBtn = document.querySelector('#add-btn');
const filterBtn = document.querySelector('#filter-btn');
const taskList = document.querySelector('#result');
// initialize delete and edit buttons in global scope
let editBtn;
let deleteBtn;
let deletedTasks = 0;
let isHidden = false;

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
    taskNew.setAttribute('readonly', 'readonly');
    
    // create a div with class controls
    const controls = document.createElement('div');
    controls.classList.add('controls');

    // create edit button with class edit-btn
    editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    // assign delete button with class delete-btn
    deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // append buttons to controls
    controls.append(editBtn, deleteBtn);

    // append controls to task card
    taskCard.append(taskNew, controls);
    taskList.append(taskCard);

    // event listener for edit button
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Save') {
            // make new input value readonly
            taskNew.setAttribute('readonly', 'readonly');
            editBtn.textContent = 'Edit';
        } else {
            // change button text content
            editBtn.textContent = 'Save';
            // enable input editing
            taskNew.removeAttribute('readonly');
            // focus on input in edit mode
            taskNew.focus();
        }
    })

    // event listener for delete button 
    // increment deletedTasks for testing purposes
    // hide task card
    deleteBtn.addEventListener('click', () => {
        deletedTasks++;
        taskCard.setAttribute("hidden", true);
    })
})

filterBtn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed-task');
    // if tasks are not hidden - hide them
    if (!isHidden) {
        isHidden = true;
        completedTasks.forEach(task => task.setAttribute('hidden', true)); 
    } else {
        // if tasks are hidden - reveal them
        isHidden = false;
        completedTasks.forEach(task => task.removeAttribute('hidden')); 
    }
})