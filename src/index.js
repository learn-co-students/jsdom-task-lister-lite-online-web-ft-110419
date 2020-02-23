// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// Stores the form HTML element
const form = document.getElementById('create-task-form');

//Stores the HTML <ul> tag. Items created would be displayed as <li>
let tasks = document.getElementById('tasks') 

// Stores the HTML text field element
let newToDo = document.getElementById('new-task-description');

//While invoking the previously saved form variables, and eventListner is added under the sub element or id of 'submit', this "event" is saved as the function(event) argument.
form.addEventListener('submit', function(event) {
  
  //The .preventDefault() method in invoked on the 'submit' event 
   event.preventDefault();
   
   //A new variable is created as the text or 'value' of the previously saved newToDo variable. This newly created variable is to be the text inputted by the user.
   let toDo = newToDo.value;
   
   //Creates a new variable as the HTML element <li> which is to be the user response. 
   let toDoItem = document.createElement('li');
   
   //Creates a new variable which is to be the actual text area where the user's inputted response will be displayed. In otherwords the 'text' of the newly created <li> tag.
   let toDoItemText = document.createTextNode(toDo);
   
   // Appends or adds the user inputted text saved onto a variable, onto the DOM by using the varibale as itself
   toDoItem.appendChild(toDoItemText);
   
   // Appends or adds the item onto the previously saved HTML <ul> tag.
   tasks.appendChild(toDoItem);
   
   //Refreshes the user input textfield to empty.
   newToDo.value = "";
   
});
