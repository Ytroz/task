const inputtask = document.getElementById("inputtask")
const Select = document.getElementById("Select")
const List = document. getElementById("List")


let inputTask = [];
function addTask(){
    const description = inputtask.value.trim()

    if (description === ""){
        alert("enter a task")
        return
    }
}


function toggleTask(index){
    task[index].completed = !tasks[index].completed
    displayTask()
}

function displayTask() {
    List.innerHTML = "";


    task.forEach(function(task,index) {
    const li = document.createElement("li")
    li.className = `task ${task.category} ${task.completed ? "completed" : ""}`
    })

    const dateString = task.dateAdded.toLocateDateString("en-US", {
        month: "long",
        day:   "numeric",
        year:  "numeric",
    })
        
    li.innerHTML = `<input type= "checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
    <span>${task.description.toUpperCase()}  (${task.category}) - ${dateString}</span>`

    tasklist.appendchilld(li);


}

    
console.log(inputTask)        
        
        

