const button = document.getElementById('taskInputButton');
button.addEventListener('click', function() {
  const input = document.getElementById('taskInput');
  const value = input.value;
  console.log(value);

  const list = document.getElementById('taskItems');
  const newItem = document.createElement('li');
      const taskText = document.createElement('span');
      taskText.textContent = value;

      const completedButton = document.createElement('button');
      completedButton.textContent = '☑️';
      
      const editButton = document.createElement('button');
      editButton.textContent = '📝';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';

      

  newItem.appendChild(taskText);
  newItem.appendChild(completedButton);
  newItem.appendChild(editButton);
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);

  let isEditing = false;
  let currentTextElement = taskText;

  editButton.addEventListener('click', function () {
    if (!isEditing) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = currentTextElement.textContent;

      newItem.replaceChild(input, currentTextElement);
      currentTextElement = input;
      editButton.textContent = '✔️';
      completedButton.style.display = 'none';
      isEditing = true;
    } else {
      const span = document.createElement('span');
      span.textContent = currentTextElement.value;

      newItem.replaceChild(span, currentTextElement);
      currentTextElement = span;
      editButton.textContent = '📝';
      completedButton.style.display = 'inline-block';
      isEditing = false;
    }
  });


  deleteButton.addEventListener('click', function() {
    newItem.remove();
  });

    completedButton.addEventListener('click', function () {
  const activeList = document.getElementById('taskItems');
  const completedList = document.getElementById('completedItems');

  if (newItem.parentElement === activeList) {
    completedList.appendChild(newItem);
    newItem.classList.add('completed');
  } else {
    activeList.appendChild(newItem);
    newItem.classList.remove('completed');
  }
});


});








