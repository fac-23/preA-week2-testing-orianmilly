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
    // grab list
    const list = document.querySelector('output');
    // find current num of ul child elements
    const numOfChildren = list.childElementCount;
    // grab the delete button
    const deleteBtn = document.querySelector('.delete-btn');
    // prevent page refresh on btn click
    // I will move this into index.js when we start coding the app
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
    // click it
    deleteBtn.click();
    // check that the number of childern equals the current num - 1
    equal(list.childElementCount, numOfChildren - 1);
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