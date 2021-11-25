//Test for submitting a new task to be added
// to the to-do list

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



