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

// test deleting an item from the to-do list
test("Delete button removes item and updates list", () => {
    // grab list
    const list = document.querySelector('ul');
    console.dir(list);
    // find current num of ul child elements
    const numOfChildren = list.childElementCount;
    console.log(numOfChildren)
    // grab the delete button
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })
    // click it
    deleteBtn.click();
    // check that the number of childern equals the current num - 1
    equal(list.childElementCount, numOfChildren - 1);
})



