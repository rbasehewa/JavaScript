
function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function factorial(num) {
	// define the result variable
	var result = 1;
	// calculate factorial and store value in result 
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	// return the result variable
	return result;
}

function kebabToSnake(stringvalue){

	// replace all '-' dashes to '_' underscore
	var newStr = stringvalue.replace(/-/g, '_');
	// return stringvalue
	return newStr;
}