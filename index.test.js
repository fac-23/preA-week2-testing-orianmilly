// grab the input to assign and remove value in the tests
let taskNew = document.querySelector('input#task');
// Test for adding a new task to the to-do list

test("Submitting a new task adds it to the list", () => {
    const taskList = document.querySelector('#result');
    const before = taskList.childElementCount;
    // give the input a value otherwise new task will not be created
    taskNew.value = "New task";
    addBtn.click();
    const after = taskList.childElementCount;
    equal(after, before + 1)
    const taskCard = document.querySelector(".task-card")
    taskCard.remove();
    // reset value to empty string
    taskNew.value = ""; 
    })


// Test for ticking completed items off the to-do list

test("Checking an entry marks it as complete", () => {
    taskNew.value = "New task";
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
        equal(taskCardDone, true, `completed tasks have a class of 'completed-task'`)
        taskCard.remove();
        // reset value to empty string
        taskNew.value = ""; 
    });

// test for deleting an item from the to-do list
test("Deleting an item removes it from the list", () => {
    // enter value to add new task
    taskNew.value = "New task";
    // click add button to create task card 
    addBtn.click();
    // grab the task card that was created
    const taskCard = document.querySelector('.task-card');
    // grab delete button
    const deleteBtn = document.querySelector('[aria-label="Delete"]');
    // click delete button
    deleteBtn.click(); 
    // check that the task card's display property is set to 'none'
    equal(taskCard.style.display === 'none', true, `deleted tasks have a display property of 'none'`);
    // remove test task card that was created in the test
    taskCard.remove();
    // clear user input 
    taskNew.value = "";
});

// test for edit button
test("Clicking the edit button enables editing", () => {
    taskNew.value = "New task";
    // add new task
    addBtn.click();
    // click edit button
    const editBtn = document.querySelector('[aria-label="Edit"]');
    editBtn.click();
    const input = document.querySelector('input.task-new');
    // check the readonly attribute has been removed
    equal(input.getAttribute('readonly'), null, 'edit button removes readonly property');
    // click edit button again to reset
    editBtn.click();
    // remove test task card
    const taskCard = document.querySelector('.task-card');
    taskCard.remove();
    taskNew.value = "";
})

// test for toggling a button to hide completed items
test("Toggling the filter hides completed tasks from the list", () => {
    taskNew.value = "New task";
    // add new task
    addBtn.click();
    // grab task card
    const taskCard = document.querySelector('.task-card');
    // mark task as completed
    taskCard.classList.add('completed-task');
    // grab filter button
    const filterBtn = document.querySelector('#filter-btn');
    // click filter button
    filterBtn.click();
    // if the item has a classlist of 'completed-task' it should be hidden
    // check task card contain a classlist of 'completed-task' and a hidden attribute of true
    equal((taskCard.classList.contains('completed-task') && taskCard.style.display === "none"), true,'completed tasks are hidden')
    taskCard.remove();
    taskNew.value = "";
    filterBtn.click();
    filterBtn.textContent = "Hide completed tasks";
});