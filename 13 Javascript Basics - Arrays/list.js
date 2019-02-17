var todos = [];

function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function newTodo() {
	var todo = prompt("Enter a new todo:");
	todos.push(todo);
	console.log("Added todo!");
}

function deleteTodo() {
	var index = prompt("Enter index of todo to delete:");
	todos.splice(index,1);
	console.log("Deleted todo!");
}

window.setTimeout(function() {
	var quit = false;
	while (!quit) {
		var input = prompt("What would you like to do?");
		if (input == "list") {
			listTodos();
		}
		else if (input == "new") {
			newTodo();
		}
		else if (input == "delete") {
			deleteTodo();
		}
		else if (input == "quit") {
			quit = true;
		}
	}
	console.log("User quit the app.")
}, 500);