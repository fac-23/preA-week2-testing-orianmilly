// grab add button
const addBtn = document.querySelector('#add-btn');
const filterBtn = document.querySelector('#filter-btn');
const taskList = document.querySelector('#result');
// initialize delete and edit buttons in global scope
let addedTasks = 0;
let editBtn;
let deleteBtn;
let deletedTasks = 0;
let isHidden = false;

// add event listener to button
addBtn.addEventListener('click', (e) => {
    //e.preventDefault();
    // get value of task from input

    const taskValue = document.querySelector('input#task').value;
    if(taskValue !== "") {
        e.preventDefault();
    
    // create a div with a class of task-card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // create an input with class task-new
    const taskNew = document.createElement('input');
    taskNew.classList.add('task-new');
    taskNew.value = taskValue;
    taskNew.setAttribute('readonly', 'readonly');
    
    // set checkboxes to appear once task has been added 
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    taskCard.prepend(checkbox)

     // once a user clicks the checkbox is ticked
        checkbox.addEventListener('click', () => {
        if(checkbox.checked) {
            taskCard.classList.add("completed-task") 
        } else {
            taskCard.classList.remove("completed-task")
        }
    })

    // create a div with class controls
    const controls = document.createElement('div');
    controls.classList.add('controls');

    // create edit button with class edit-btn
    editBtn = document.createElement('button');
    editBtn.innerHTML = String.fromCodePoint(0x1F58B);
    editBtn.ariaLabel = "Edit";
    // assign delete button with class delete-btn
    deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = String.fromCodePoint(0x1F5D1);
    deleteBtn.ariaLabel = "Delete";

    // append buttons to controls
    controls.append(editBtn, deleteBtn);

    // append controls to task card
    taskCard.append(taskNew, controls);
    taskList.append(taskCard);

    // event listener for edit button
    editBtn.addEventListener('click', () => {
        console.log(editBtn)
        if (editBtn.textContent === 'Save') {
            // make new input value readonly
            taskNew.setAttribute('readonly', 'readonly');
            editBtn.textContent = 'Edit';
        } else {
            // change button text content
            editBtn.innerHTML = String.fromCodePoint(0x1F4CC);
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
        taskCard.style.display = "none";
    })
}
})

filterBtn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed-task');
    // if tasks are not hidden - hide them
    if (!isHidden) {
        isHidden = true;
        completedTasks.forEach(task => task.style.display = "none"); 
        filterBtn.textContent = "Reveal tasks to complete";
    } else {
        // if tasks are hidden - reveal them
        isHidden = false;
        completedTasks.forEach(task => task.style.display = "flex"); 
        filterBtn.textContent = "Hide completed tasks";
    }
})