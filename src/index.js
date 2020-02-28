
// As a user, I should be able to type a task into the input field. => DONE ✅
// As a user, I should be able to click some form of a submit button. => DONE ✅
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated. => DONE (But only one time) ✅

document.addEventListener("DOMContentLoaded", () => {
    let ul = document.getElementById("list");
    let taskForm = document.getElementById("create-task-form");
    let taskDescription = document.getElementById("new-task-description");
  
    taskForm.addEventListener("submit", function(event) { // listen for the submit button
      let li = document.createElement("li");
      li.id = "task"
      let del = document.createElement("button")
      del.innerText = "Delete";
      li.innerHTML = taskDescription.value; // new li inner HTML will be the new form input text field description value
      ul.appendChild(li); // append the li to the ul list
      li.appendChild(del);

        del.addEventListener("click", (event) => {
          let grab = document.getElementById("task")
          grab.remove();
        });
      event.preventDefault(); // do not allow redirect, instead update the page
      // event.target.reset(); 
    });
});


// Stretch Deliverables:
// Try to implement one or more of the following:

// A delete function that will remove tasks from your list  => DONE ✅
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM