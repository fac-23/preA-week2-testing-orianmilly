// Test for adding a new task to the to-do list

test("Submitting a new task adds it to the list", () => {
    // Grab the input tag from html with an id of task
    const input = document.querySelector("input[id='task']");
    // Add a value to the input to test it's working
    input.value = "New task";
    // Write an if statement to check if the box contains text
    if(input.value !== "") {
        console.info(`Pass: Task contains text`)
    } else {
        console.error(`Fail: Task doesn't contain text`)
    }
    // grab add button element for submitting a task
    const addBtn = document.querySelector("input[id='add-btn']")
    // Event click on add button for user submit their task
    addBtn.addEventListener('click', (event) => {
    // Stop page from reloading once task is added
        event.preventDefault();
        })
    })

// Test for ticking completed items off the to-do list

test("Checking an entry marks it as complete", () => {
    // Grab the input tag with a class of task-added
    const taskAdded = document.querySelector("input[class='task-added']");
    // Grab the button tag with id of complete-btn
    const completeBtn = document.querySelector("button[id='complete-btn']");
    // If the user clicks the complete button, complete class is added
    completeBtn.addEventListener('click', (event) => {
        if (event === true) {
            console.info(`Pass: Task is complete`)
    // Or else the complete class is hidden
        } else {
            console.error(`Fail: Task is not complete`)
        }
    })
})

// test for deleting an item from the to-do list
test("Deleting an item removes it from the list", () => {
    // grab current number of deleted tasks (global variable in index.js)
    const currDeletedTasks = deletedTasks;
    // click add button to create task card with delete button inside
    addBtn.click();
    // click delete button
    deleteBtn.click(); 
    // check that the number of deletedTasks has been incremented
    equal(deletedTasks, currDeletedTasks + 1, `expected ${deletedTasks} deleted task and received ${currDeletedTasks + 1} deleted task`);
    // reset deletedTasks variable to 0
    deletedTasks = 0;
    // remove test task card that was created in the test
    const taskCard = document.querySelector('.task-card');
    taskCard.remove();
});

// test for edit button
test("Clicking the edit button enables editing", () => {
    // add new task
    addBtn.click();
    // click edit button
    editBtn.click();
    const input = document.querySelector('input.task-new');
    // check the readonly attribute has been removed
    equal(input.getAttribute('readonly'), null, 'edit button removes readonly property');
    // remove test task card
    const taskCard = document.querySelector('.task-card');
    taskCard.remove();
})

// test for toggling a button to hide completed items
test("Toggling the filter hides completed tasks from the list", () => {
    // add new task
    addBtn.click();
    // grab task card
    const taskCard = document.querySelector('.task-card');
    // mark task as completed
    taskCard.classList.add('completed-task');
    // click filter button
    filterBtn.click();
    // if the item has a classlist of 'completed-task' it should be hidden
    // check task card contain a classlist of 'completed-task' and a hidden attribute of true
    equal((taskCard.classList.contains('completed-task') && taskCard.hidden), true,'completed tasks are hidden')
    taskCard.remove();
});