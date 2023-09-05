function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please Enter A Task Name.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskItem.classList.add("completed");
    } else {
      taskItem.classList.remove("completed");
    }
  });

  const taskTextElement = document.createElement("span");
  taskTextElement.className = "task-name";
  taskTextElement.textContent = taskText;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskItem.classList.add("fadeOut");
    setTimeout(function () {
      taskItem.remove();
    }, 300);
  };

  const editButton = document.createElement("button");
  editButton.className = "edit-button";
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    const editedText = prompt("Edit the task:", taskText);
    if (editedText !== null) {
      taskTextElement.textContent = editedText;
    }
  };

  actionsDiv.appendChild(checkbox);
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(actionsDiv);

  taskList.appendChild(taskItem);
  taskInput.value = "";
}
