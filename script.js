
const inputTask = document.getElementById("inputtask");
const select = document.getElementById("Select"); 
const taskList = document.getElementById("List"); 

let tasks = []; 

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
    inputTask.value = ""; 
    displayTasks(); 
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function displayTasks() { 
    taskList.innerHTML = "";

    tasks.forEach((task, index) => { 
        const li = document.createElement("li");
        li.className = `task ${task.category} ${task.completed ? "completed" : ""}`;

        const dateString = task.dateAdded.toLocaleDateString("en-US", { 
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
            <span>${task.description.toUpperCase()} (${task.category}) - ${dateString}</span>
        `;

        taskList.appendChild(li); 
    });
}