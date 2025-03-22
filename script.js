// script.js
const inputTask = document.getElementById("inputtask");
const select = document.getElementById("Select"); // Fixed capitalization
const taskList = document.getElementById("List"); // Renamed for clarity

let tasks = []; // Fixed variable name and initialization

function addTask() {
    const description = inputTask.value.trim();

    if (description === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        description: description,
        category: select.value,
        completed: false,
        dateAdded: new Date()
    };

    tasks.push(task);
    inputTask.value = ""; // Clear input after adding
    displayTasks(); // Fixed function name
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function displayTasks() { // Fixed function name
    taskList.innerHTML = "";

    tasks.forEach((task, index) => { // Fixed 'task' to 'tasks'
        const li = document.createElement("li");
        li.className = `task ${task.category} ${task.completed ? "completed" : ""}`;

        const dateString = task.dateAdded.toLocaleDateString("en-US", { // Fixed method name
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
            <span>${task.description.toUpperCase()} (${task.category}) - ${dateString}</span>
        `;

        taskList.appendChild(li); // Fixed method name
    });
}