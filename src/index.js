document.addEventListener("DOMContentLoaded", () => {
  const todos = [];
  const submit = document.querySelector(
    "#create-task-form input[type='submit']"
  );
  const tasks = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  submit.addEventListener("click", e => {
    e.preventDefault();
    const todo = input.value.trim();
    // don't add blank todos
    if (todo == "") {
      return;
    }

    addTodo(todo);

    // display todo
    const li = document.createElement("li");

    li.innerText = todo;
    li.appendChild(createCloseButton(todo));
    tasks.appendChild(li);

    // clear input
    todo = "";
  });

  function createCloseButton(todo) {
    const button = document.createElement("button");
    button.innerText = "X";
    button.id = createID(todo);
    return button;
  }

  function createID(todo) {
    return todo.split(" ").join("-");
  }

  function addTodo(todo) {
    todos.push(todo);
  }

  function deleteTodo(todo) {}

  function findTodoIndex(todo) {}

  function displayAllTodos() {
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.innerText = todo;
      tasks.appendChild(li);
    });
  }
});
