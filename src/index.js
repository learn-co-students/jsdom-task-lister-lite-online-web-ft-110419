const taskForm = document.querySelector('#create-task-form');
const taskDescription = document.querySelector('#new-task-description');
const listTag = document.querySelector('#list #tasks')

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (e) => {
    addTask();
    e.preventDefault();
  });

  document.addEventListener('click',function(e){
    removeTask(e);
  });
});

function addTask(){
  let task = taskDescription.value;
  let liTag = document.createElement('li');
  liTag.innerHTML = `${task} <button>&#88;</button>`;
  listTag.appendChild(liTag);
}

function removeTask(e) {
  if (e.target.tagName == "BUTTON") {
    e.target.parentElement.remove();
  }
}
