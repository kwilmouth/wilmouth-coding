document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("task-input");
  const addButton = document.getElementById("add-task");
  
  const list = document.getElementById("task-list");
  const tasks = localStorage.getItem("tasks")

  function listEvent (item) {
    const newTask = document.createElement("li");
    newTask.textContent = item;  
    list.appendChild(newTask); 
  }

    

  console.log(tasks);
    const saved = JSON.parse(tasks || "[]");
    console.log(saved);
    for (let task of saved) {
      listEvent(task);
      // const newTask = listEvent();
      // newTask.textContent = task;  
      // list.appendChild(newTask); 
    }

    

  addButton.addEventListener("click", function () {
    const taskText = input.value;

    console.log("New task:", taskText);

    let tasks = localStorage.getItem("tasks");
      if (!tasks) {
        tasks = [];
      } else {
        tasks = JSON.parse(tasks);
      }
    
    tasks.push(taskText);

    const addList = JSON.stringify(tasks)
    localStorage.setItem("tasks", addList);
    
    console.log(addList);

    listEvent(taskText);
    // const newTask = document.createElement("li");
    //   newTask.textContent = taskText;  
    //   list.appendChild(newTask); 

  
  });
  
});
