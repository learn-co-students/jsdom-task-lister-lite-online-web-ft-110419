document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(e) {
    const list = document.getElementById('tasks');
    let listItem = document.getElementById('new-task-description').value;
    let li = document.createElement('li');
    li.innerHTML = listItem;
    list.appendChild(li);
    e.preventDefault();
  });
});
