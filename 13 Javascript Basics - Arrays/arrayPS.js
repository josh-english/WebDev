console.log("Problem 1:");
function printReverse(array) {
	console.log("The array " + array + " backwards is: ");
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}
var array = [51, 100, 36, 4, 76];
printReverse(array);

console.log("Problem 2:");
function isUniform(array) {
	var element = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] != element) {
			return false;
		}
	}
	return true;
}
console.log("When isUniform is run on the array " + array + " it returns " + isUniform(array));
var uniform = [-76,-76,-76,-76];
console.log("When isUniform is run on the array " + uniform + " it returns " + isUniform(uniform));

console.log("Problem 3:");
function sumArray(array) {
	var sum = 0;
	array.forEach(function(element){
		sum += element;
	});
	return sum;
}
console.log("When sumArray is run on the array " + array + " it returns " + sumArray(array));
console.log("When sumArray is run on the array " + uniform + " it returns " + sumArray(uniform));

console.log("Problem 4:");
function max(array) {
	var max = Number.MIN_SAFE_INTEGER;
	array.forEach(function(element){
		if (element > max) {
			max = element;
		}
	});
	return max;
}
console.log("When max() is run on the array " + array + " it returns " + max(array));