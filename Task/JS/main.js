let addTaskBtn = document.querySelector(".add-task");
let deleteTaskBtn = document.querySelector(".delete-task");

let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");


addTaskBtn.onclick = () => {
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + new Date() + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
        taskInput.value = "";
    } else {
        alert("Can't add an empty task!");
    }
}

document.addEventListener("keyup", function(e) {
    if (taskInput.value.trim() === "")
        return alert("Can't add an empty task!");
    if (e.keyCode == 13) {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + " Share Time: " + new Date() + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML;
        taskInput.value = "";
    }
})

deleteTaskBtn.onclick = () => {
    let newTaskElem = "";
    taskWrapper.innerHTML = newTaskElem;
}