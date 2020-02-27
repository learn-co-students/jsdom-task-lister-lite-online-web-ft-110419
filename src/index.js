document.addEventListener('DOMContentLoaded', () => {
  let listerForm = document.querySelector('form');
  let searchBar = document.getElementById('new-task-description');
  let tasks = document.getElementById('tasks');

  function mySubmit(event) {
    addTask(searchBar.value);
    resetInput();
    event.preventDefault();
  }
  
  function addTask(task) {
    let li = document.createElement('li');
    if (task.length !== 0) {
      li.textContent = task
      tasks.appendChild(li)
    };
  }

  function resetInput() {
    searchBar.value = ""
  }
  listerForm.addEventListener('submit', mySubmit)
  
});
