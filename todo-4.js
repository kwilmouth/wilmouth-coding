window.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const completedList = document.getElementById("completed-list");

  const tasks = [
    { text: 'Take out trash', completed: false },
    { text: 'Walk dog', completed: false },
    { text: 'Do homework', completed: false },
    { text: 'Buy groceries', completed: false },
    { text: 'Water the plants', completed: false },
    { text: 'Read 10 pages', completed: false },
    { text: 'Clean the kitchen', completed: false },
    { text: 'Stretch for 5 minutes', completed: false }
  ];

  // ADD TASK FOR EACH
  tasks.forEach(task => {
    createTaskElement(task);
  });

  // ADD TASK (User adds a new one)
  document.getElementById("add-task").addEventListener("click", function () {
    const input = document.getElementById("task-input");
    const newTaskText = input.value;

    if (newTaskText.trim() === "") return; // Ignore blank input

    const newTaskObj = {
      text: newTaskText,
      completed: false
    };

    tasks.push(newTaskObj);
    createTaskElement(newTaskObj);
    input.value = ""; // Clear input
  });

  // CREATE TASK FUNCTION
  function createTaskElement(task) {
    const newTask = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    newTask.appendChild(taskSpan);

    // TASK COMPLETE
    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Keep Working" : "Mark as Done";

    if (task.completed) {
      newTask.classList.add("completed");
    }

    completeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      newTask.classList.toggle("completed");

      // UPDATE TASK STATUS
      task.completed = !task.completed;

      if (task.completed) {
        completeButton.textContent = "Keep Working";
        completedList.appendChild(newTask);
      } else {
        completeButton.textContent = "Mark as Done";
        taskList.appendChild(newTask);
      }
    });

    newTask.appendChild(completeButton);

    // MOVE COMPLETED TO COMPLETED SECTION
    if (task.completed) {
      completedList.appendChild(newTask);
    } else {
      taskList.appendChild(newTask);
    }
  }
});
