const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");
const ulTag = document.querySelector("#list #tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    addTask();
    e.preventDefault();
  });
})
  function addTask() {
    let task = userInput.value;
    let liTag = document.createElement('li');
    liTag.innerHTML = `${task} `;
    ulTag.appendChild(liTag);
  }