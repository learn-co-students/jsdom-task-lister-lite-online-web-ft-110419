


document.addEventListener("DOMContentLoaded", () => {
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

/* document.querySelector("#id-checkbox").addEventListener("click", function(event) {
  document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
  event.preventDefault();
}, false); 
*/