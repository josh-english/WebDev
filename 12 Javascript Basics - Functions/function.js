console.log("Problem 1:");
function isEven(num) {
	return num % 2 == 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


console.log("Problem 2:");
function factorial(num) {
	var fact = 1;
	for (var i = num; i > 0; i--) {
		fact = fact * i;
	}
	return fact;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

console.log("Problem 3:");
function kebabToSnake(string) {
	return string.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));

