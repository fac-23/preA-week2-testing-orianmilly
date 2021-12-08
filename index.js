// grab new lists button
const newListBtn = document.querySelector('#new-list-btn')
// grab add button
const addBtn = document.querySelector('#add-btn');
const filterBtn = document.querySelector('#filter-btn');
// initialize delete button in global scope
let addedTasks = 0;
let deleteBtn;
let deletedTasks = 0;
let isHidden = false;
let isEditing = false;

// event listener on newListBtn to create new lists

newListBtn.addEventListener('click', () => {
    // create a div with class task-box
    const taskBox = document.createElement('div');
    taskBox.classList.add('task-box');
    
    // create a form
    const form = document.createElement('form');
    
    // create input with id of task, type text and placeholder "add a task"
    const userInput = document.createElement('input');
    userInput.id = "task";
    userInput.type = "text";
    userInput.placeholder = "Add a task";
    
    // button with id of add-btn and type submit, aria label "Add tasks"
    const addBtn = document.createElement('button');
    addBtn.id = "add-btn";
    addBtn.type = "submit";
    addBtn.ariaLabel = "Add tasks";
    console.log(userInput);
    
    // event listener for creating new task cards
    addBtn.addEventListener('click', (e) => {
        // if user has entered a value, create a new task
        if(userInput.value !== "") {
            e.preventDefault();
        // create a div with a class of task-card
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
    
        // create an input with class task-new
        const taskNew = document.createElement('input');
        taskNew.classList.add('task-new');
        taskNew.value = userInput.value;
        taskNew.setAttribute('readonly', 'readonly');
        
        // set checkboxes to appear once task has been added 
        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox';
        taskCard.prepend(checkbox);
    
         // once a user clicks the checkbox is ticked, task card gets a "completed task" class
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
        const editBtn = document.createElement('button');
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
        // append the taskCard to the output
        output.append(taskCard);
        // clear the user input field
        userInput.value = "";
    
        
        // event listener for edit button
        editBtn.addEventListener('click', () => {
            // enter edit node
            if (!isEditing) {
                isEditing = true;
                // change button to save emoji
                editBtn.innerHTML = String.fromCodePoint(0x1F4CC);
                // enable input editing
                taskNew.removeAttribute('readonly');
                // focus on input in edit mode
                taskNew.focus();
                console.log('edit mode');
            } else {
                // save task
                isEditing = false;
                // make new input value readonly
                taskNew.setAttribute('readonly', 'readonly');
                // reset button to edit emoji
                editBtn.innerHTML = editBtn.innerHTML = String.fromCodePoint(0x1F58B)
                console.log('saved');
            }
        })
    
        // event listener for delete button 
        // increment deletedTasks for testing purposes
        // hide task card
        deleteBtn.addEventListener('click', () => {
            deletedTasks++;
            // taskCard.remove();
            taskCard.style.display = "none";
            })
        }  
    })

    // create icon with class "far fa-plus-square"
    const plusIcon = document.createElement('i');
    plusIcon.classList.add("far");
    plusIcon.classList.add("fa-plus-square");
    
    // append icon to button
    addBtn.append(plusIcon);
    // append input and button to form
    form.append(userInput, addBtn);
    
    // create label with class switch
    const label = document.createElement('label');
    label.classList.add("switch");
    
    // createinput type checkbox, id of "filter-btn", aria-label "Hide completed tasks"
    const input = document.createElement('input');
    input.id = "filter-btn";
    input.type = "checkbox";
    input.ariaLabel = "Hide complete tasks";
    
    // create span with class "slider round"
    const span = document.createElement('span');
    span.classList.add('slider');
    span.classList.add('round');
    
    // append input and span to label
    label.append(input, span);
    
    // create output with id of result
    const output = document.createElement('output');
    output.id = "result";
    
    // append label and output to the task box
    taskBox.append(label, form, output);
    // append to body
    const tasksContainer = document.querySelector('.flex-container');
    tasksContainer.append(taskBox);
})

// add event listener to addButton inside the first task-box 
addBtn.addEventListener('click', (e) => {
    // get value of task from input
    let userInput = document.querySelector('input#task');
    // if user has entered a value, create a new task
    if(userInput.value !== "") {
        e.preventDefault();
    // create a div with a class of task-card
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    // create an input with class task-new
    const taskNew = document.createElement('input');
    taskNew.classList.add('task-new');
    taskNew.value = userInput.value;
    taskNew.setAttribute('readonly', 'readonly');
    
    // set checkboxes to appear once task has been added 
    const checkbox = document.createElement("input");
    //checkbox.innerHTML = String.fromCodePoint(0x2705)
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    taskCard.prepend(checkbox);

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
    const editBtn = document.createElement('button');
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
    const taskList = document.querySelector('#result');
    taskList.append(taskCard);
    // clear the user input field
    userInput.value = "";

    // event listener for edit button
    editBtn.addEventListener('click', () => {
        // enter edit node
        if (!isEditing) {
            isEditing = true;
            // change button to save emoji
            editBtn.innerHTML = String.fromCodePoint(0x1F4CC);
            // enable input editing
            taskNew.removeAttribute('readonly');
            // focus on input in edit mode
            taskNew.focus();
            console.log('edit mode');
        } else {
            // save task
            isEditing = false;
            // make new input value readonly
            taskNew.setAttribute('readonly', 'readonly');
            // reset button to edit emoji
            editBtn.innerHTML = editBtn.innerHTML = String.fromCodePoint(0x1F58B)
            console.log('saved');
        }
    })

    // event listener for delete button 
    // increment deletedTasks for testing purposes
    // hide task card
    deleteBtn.addEventListener('click', () => {
        deletedTasks++;
        // taskCard.remove();
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
        filterBtn.textContent = "Reveal tasks to complete" + String.fromCodePoint(0x1F9D9);
    } else {
        // if tasks are hidden - reveal them
        isHidden = false;
        completedTasks.forEach(task => task.style.display = "flex"); 
        filterBtn.textContent = "Hide completed tasks" + String.fromCodePoint(0x1F648);
    }
})