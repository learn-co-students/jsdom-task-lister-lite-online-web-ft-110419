document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("input")[1].addEventListener("click", function(event) {
    event.preventDefault();

    let newTask = document.getElementById("new-task-description").value;
    let element = document.getElementById("tasks");
    let li = document.createElement('li');

    let button = document.createElement('button');
      button.innerHTML = "X"

    li.innerHTML = newTask;
    element.appendChild(li).appendChild(button);

    document.getElementById("new-task-description").value = ""

    // document.querySelector("li button").addEventListener("click", function(event) {
    //   let task = document.querySelector("li").innerText;
    //   li.remove(task);
    // });
  })
});