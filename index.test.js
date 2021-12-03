
// Test for adding a new task to the to-do list

test("Submitting a new task adds it to the list", () => {
    const before = taskList.childElementCount;
    addBtn.click()
    // taskList is parent element of 
    const after = taskList.childElementCount;
    equal(after, before + 1 )
    const taskCard = document.querySelector(".task-card")
    taskCard.remove(); 
    })


// Test for ticking completed items off the to-do list

test("Checking an entry marks it as complete", () => {
    // Click add button
        addBtn.click(); 
    // grab checkbox from local scope
        const checkbox = document.querySelector("#checkbox")
    // click checkbox 
        checkbox.click();
    // grab task card from add btn
        const taskCard = document.querySelector(".task-card")
    //  completed div contains completed-task class
        const taskCardDone = taskCard.classList.contains("completed-task")
    // equal function checks that the completed task is true
        equal(taskCardDone, true) 
        taskCard.remove();
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