var todos = [];
window.setTimeout(function() {
	var quit = false;
	while (!quit) {
		var input = prompt("What would you like to do?");
		if (input == "list") {
			console.log(todos)
		}
		else if (input == "new") {
			var todo = prompt("Enter a new todo:");
			todos.push(todo);
		}
		else if (input == "quit") {
			quit = true;
		}
	}
}, 500);