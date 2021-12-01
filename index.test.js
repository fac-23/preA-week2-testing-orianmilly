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
});

// test for toggling a button to hide completed items
test("Toggling the filter hides completed tasks from the list", () => {
    // grab the filter button
    const filterBtn = document.querySelector('#filter-btn');
    // prevent page refresh on btn click
    filterBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
    // click it
    filterBtn.click();
    // if the item has a classlist of 'completed-task' it should be hidden
    // get all list items as array
    const allItems = Array.from(document.querySelectorAll('input.task'));
    // check they contain a classlist of 'completed-task' and a hidden attribute of true
    if (allItems.every(item => item.classList.contains('completed-task') && item.hidden === true)) {
        console.info("Pass: completed tasks are hidden")
    } else {
        console.error("Fail: completed tasks are not hidden")
    };

    });

