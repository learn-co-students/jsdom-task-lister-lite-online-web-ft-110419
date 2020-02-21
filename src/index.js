document.addEventListener("DOMContentLoaded", () => {
	form = document.getElementsByTagName("input")
	form[1].addEventListener("click", function(){
		let list = document.querySelector("ul#tasks")
		let li = document.createElement("li")
		li.innerHTML = form[0].value + "   "
		let button = document.createElement("button")
		button.innerHTML = "Delete Task"
		button.addEventListener("click", function(){
			let lies = button.parentNode
			console.log(lies.innerText)
			lies.remove()
		})
		let editbutton = document.createElement("button")
		editbutton.innerHTML = "Edit Task"
		list.appendChild(li)
		li.appendChild(button)
		let breaks = document.createElement("br")
		li.appendChild(breaks)
		li.appendChild(editbutton)
		editbutton.addEventListener("click", function(){
			let textbox = document.createElement("input")
			editbutton.parentNode.replaceChild(textbox, editbutton)
			textbox.value = textbox.parentNode.innerText.substring(0, textbox.parentNode.innerText.length - 12)
			let submit = document.createElement("input")
			submit.type = "submit"
			submit.value = "edit"
			textbox.parentNode.appendChild(submit)
			submit.addEventListener("click", function() {
				submit.parentNode.innerText = textbox.value
			})
		})
	})
  // your code here
});

