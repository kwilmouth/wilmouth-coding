const addTask = document.getElementById("add-task"); 
const getInput = document.getElementById("task-input");
const getList = document.getElementById("task-list");
const undoButton = document.getElementById("undo-delete");


let lastDeletedTask = null;
let lastDeletedIndex = null;


addTask.addEventListener("click", function () {
  const taskText = getInput.value;

  if (taskText.trim() === "") {
    return; // do nothing if text box is empty
  }

  // ADD TASK
  const newTask = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  newTask.appendChild(taskSpan);

  // TASK COMPLETE
  const completeButton = document.createElement("button");
  completeButton.textContent = "Mark as Done";
  completeButton.addEventListener("click", function (event) {
    event.stopPropagation();
    newTask.classList.toggle("completed");

    if (newTask.classList.contains("completed")) {
      completeButton.textContent = "Keep Working";
    } else {
      completeButton.textContent = "Mark as Done";
    }
  
    // COMPLETED TASK TO BOTTOM
    if (newTask.classList.contains("completed")) {
      getList.appendChild(newTask);
    } else {
      const allTasks = Array.from(getList.children);
      const firstCompleted = allTasks.find(task => task.classList.contains("completed"));
      if (firstCompleted) {
        getList.insertBefore(newTask, firstCompleted);
      } else {
        getList.insertBefore(newTask, getList.firstChild);
      }
    }
  });
  
  // TASK DELETE
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
  
    lastDeletedTask = newTask;
    lastDeletedIndex = Array.from(getList.children).indexOf(newTask);
  
    newTask.remove();
    undoButton.style.display = "inline-block";
  });

  // TASK EDIT
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function (event) {
    event.stopPropagation();

    const currentText = taskSpan.textContent;
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", function (event) {
      event.stopPropagation();
      const updatedText = editInput.value;
      taskSpan.textContent = updatedText;
      editInput.replaceWith(taskSpan);
      buttonContainer.replaceChild(editButton, saveButton);
    });

    taskSpan.replaceWith(editInput);
    buttonContainer.replaceChild(saveButton, editButton);
  });

  // BUTTON CONTAINER
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(completeButton);
  newTask.appendChild(buttonContainer);

  // ADD ITEM TO LIST AND CLEARS FIELD FOR NEXT ITEM
  getList.appendChild(newTask);
  getInput.value = "";
});

//UNDO LAST DELETE
undoButton.addEventListener("click", function () {
  if (lastDeletedTask !== null) {
    const tasks = getList.children;

    if (lastDeletedIndex >= tasks.length) {
      getList.appendChild(lastDeletedTask);
    } else {
      getList.insertBefore(lastDeletedTask, tasks[lastDeletedIndex]);
    }
    lastDeletedTask = null;
    lastDeletedIndex = null;

    undoButton.style.display = "none"; //will hide button if no deletes left to undo
  }
});
