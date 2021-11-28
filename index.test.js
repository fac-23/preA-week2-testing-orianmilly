// Test for adding a new task to the to-do list

test("Once a user adds an item, the result is shown", () => {
    const form = document.querySelector("form");
    const input = document.querySelector("input[id='task']"); 
    input.value = "I'm new!";
    const addedItem = document.querySelector("output[id='result']")
    const btn = document.querySelector("button[id='btn']");
    btn.click();
    equal(addedItem.textContent, "I'm new!");
    form.reset()

})

// Test for ticking completed items off the to-do list

test("Once a user has completed a task, a line goes through it", () => {
    const taskSection = document.querySelector("section[id='task-section']");
    const input = document.querySelector("input[id='task']"); 
    input.value = "Item done!";
    const btnDone = document.querySelector("button[id='btn-done']");
    btnDone.click();
    equal(taskSection.textContent, "Item done!");
})

