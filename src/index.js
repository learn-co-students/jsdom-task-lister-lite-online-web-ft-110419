document.addEventListener("DOMContentLoaded", () => {

  document.getElementsByTagName("input")[1].addEventListener("click", function(event) {
    event.preventDefault();

  let newTask = document.getElementById('new-task-description').value;
  let element = document.getElementById("tasks");
  let listItem = document.createElement("li");

  let button = document.createElement('button');
    button.innerText = "DEL";

  listItem.innerHTML = newTask;
  element.appendChild(listItem).appendChild(button);

  document.getElementById("new-task-desciption").value = ""

  })

});


/* document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByTagName("input")[1].addEventListener("click", function(event){
    event.preventDefault();
  }, false);
    input = document.getElementById('new-task-description').innerText
    tasks = document.getElementById("tasks");
    item = document.createElement("li");
    item.textContent = input;
    tasks.appendChild(item);

  // your code here
});

 document.querySelector("#id-checkbox").addEventListener("click", function(event) {
  document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
}, false); s
*/


/*
  // grab necessary DOM elements
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  // where to send tasks
  const tasksUl = document.getElementById("tasks");

  // event listener
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON"){
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });

});
*/