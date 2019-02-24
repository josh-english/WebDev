
// check off specific todos by clicking (for all future elements)
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete todo (for all future elements)
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// add new todos from input
$("input[type='text']").keypress(function(event) {
	if (event.which == 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});