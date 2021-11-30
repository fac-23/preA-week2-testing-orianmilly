// test for submitting a new task to be added to the to-do list

test("Once a user adds an item, the result is shown", () => {
    const form = document.querySelector("form");
    const input = document.querySelector("#task"); 
    input.value = "I'm new!";
    const addedItem = document.querySelector("#result")
    const btn = document.querySelector("#btn");
    btn.click();
    equal(addedItem.textContent, "I'm new!");
    //input.value = "";
    form.reset()
})

// test for deleting an item from the to-do list
test("Deleting an item removes it from the list", () => {
    // grab current number of deleted tasks (global variable in index.js)
    const currDeletedTasks = deletedTasks;
    // grab the delete button
    const deleteBtn = document.querySelector('.delete-btn');
    // initiate variable to hold the deleted node
    let deletedTaskCard;
    // prevent page refresh on btn click
    // I will move this into index.js when we start coding the app
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // grab the deleted node
        deletedTaskCard = e.target.parentElement.parentElement;
    })
    // click delete button
    deleteBtn.click(); 
    // check that the number of deletedTasks has been incremented
    equal(deletedTasks, currDeletedTasks + 1);
    // remove the hidden attribute after test is complete
    deletedTaskCard.removeAttribute("hidden");
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