document.addEventListener("DOMContentLoaded", () => {
  
  const theForm = document.getElementById("create-task-form");
  const theDesc = document.getElementById("new-task-description");

  const taskList = document.getElementById("tasks");

  theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = document.createElement('li')
    newTask.innerHTML = theDesc.value
    taskList.appendChild(newTask)
    e.target.reset()
  });
});
