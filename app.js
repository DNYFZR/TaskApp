// Taskboard App

// Initialise app
const appInput = document.getElementById("app-input");
const addTaskButton = document.getElementById("add-task-btn");
const appList = document.getElementById("app-list");
const completeList = document.getElementById("completed-list");

// Create item
const addItem = () => {
    const itemText = appInput.value.trim();

    if (itemText !== "") {
        const newItem = createItem(itemText);
        appList.appendChild(newItem);
        appInput.value = "";
    }
};

const createItem = (itemText) => {
    const newItem = document.createElement("li");
    newItem.className = "app-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const itemTextSpan = document.createElement("span");
    itemTextSpan.textContent = itemText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

    newItem.appendChild(checkbox);
    newItem.appendChild(itemTextSpan);
    newItem.appendChild(deleteBtn);
   
    return newItem;
};

// Delete task
const deleteItem = (event) => {
    const item = event.target.parentNode;

    if (item.classList.contains("complete")){
        completeList.removeChild(item);
    } else {
        appList.removeChild(item);
    }
};

// Mark complete
const toggleItem = (event) => {
    const item = event.target.parentNode;
    item.classList.toggle("complete");
    
    if (item.classList.contains("complete")){
        completeList.appendChild(item);
    } else {
        appList.appendChild(item);
    }

    console.log(item.classList);
};

// Event listeners
addTaskButton.addEventListener("click", addItem);
appInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        addItem();
    }
});

appList.addEventListener("change",toggleItem);
completeList.addEventListener("change",toggleItem);


// Example tasks
const initialItems = ["Pay bills", "Do Laundry", "Pick up kids"];

initialItems.forEach((itm) => {
    const item = createItem(itm);
    appList.appendChild(item);
});