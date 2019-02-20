var button = document.getElementsByTagName("button")[0];
var body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function(){
	body.classList.toggle("background");
});