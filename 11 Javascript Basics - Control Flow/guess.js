var num = Math.floor((Math.random() * 10) + 1);
console.log(num);
var guess = 0;

guess = prompt("Guess a number between 1 and 10: ");
console.log("Guessed: " + guess);
while (guess != num) {
	alert("That was incorrect, try again!");
	guess = prompt("Guess a number between 1 and 10: ");
	console.log("Guessed: " + guess);
}
alert("That was correct!");