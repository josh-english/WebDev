$("h1").on("click", function() {
	$("h1").css("color", "purple");
});

$("input").on("keypress", function() {
	console.log("keypress");
});

$("button").on("mouseenter", function() {
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
	$(this).css("font-weight", "normal");
});