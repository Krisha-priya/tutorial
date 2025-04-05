const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const pendingTasks = document.getElementById("pendingTasks");
const clearTasksBtn = document.getElementById("clearTasksBtn");

// Update pending tasks count
const updatePendingCount = () => {
  const count = taskList.children.length;
  pendingTasks.textContent = `You have ${count} pending task${
    count !== 1 ? "s" : ""
  }`;
};

// Add a new task
const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskItem.remove();
      updatePendingCount();
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskInput.focus();
    updatePendingCount();
  }
};

// Clear all tasks
const clearAllTasks = () => {
  taskList.innerHTML = "";
  updatePendingCount();
};

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

clearTasksBtn.addEventListener("click", clearAllTasks);

updatePendingCount();
