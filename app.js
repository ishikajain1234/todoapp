// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="delete-btn" onclick="removeTask(this)">Delete</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
}
