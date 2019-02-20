var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.getElementById("maxScore");

var isOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function() {
	if (!isOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score == winningScore) {
			isOver = true;
			p1Display.classList.add("winner");
		}
	}
});

p2Button.addEventListener("click", function() {
	if (!isOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score == winningScore) {
			isOver = true;
			p2Display.classList.add("winner");
		}
	}
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	isOver = false;
}

resetButton.addEventListener("click", function() {
	reset();
});

numInput.addEventListener("change", function() {
	reset();
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
});