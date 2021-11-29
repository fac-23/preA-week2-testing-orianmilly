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
    const addBtn = document.querySelector("button[id='add-btn']")
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

