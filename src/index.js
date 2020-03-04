document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let display = document.querySelector("#tasks");
  let submit = document.querySelector("#submitted");
  let textField = document.querySelector("#new-task-description");
  submit.addEventListener("click", (e) => {
    if (textField.value === "") {
      alert("Please Fill out the text Field!");
      e.preventDefault();
    } else {
      display.innerHTML += `<li class="bull">${textField.value}</li>`;
      e.preventDefault();
    }

  });
});
