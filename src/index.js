
let taskForm = document.getElementById('create-task-form')
let input = document.getElementById('new-task-description')
let tasks = document.getElementById('tasks')

taskForm.addEventListener('submit', callback)

function callback(event){
  event.preventDefault()
  //console.log(event.type)

  //we want to take the value of the input and put it in the list element

  let inputValue = input.value
  //setting this variable is a quick snpshot of the value of the input field
  //it is not tying that variable to the value's input
  tasks.innerHTML += `<li>${inputValue}</li>`
  input.value = ""
}
// your code here

//WHERE DO I START

//1. Grab the HTML elements that you know are going to change or be interacted with
//Whether that's a button that will be clicked or an element where we'll be adding stuff

//2. Think about the elements you selected and ask, do they need an event listener. 
//In other words, will a user be interacting with them directly

//3. Think about the functionality that you want the event to complete 

//4. Figure out how to complete that functionality 