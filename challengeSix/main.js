
function isEven(x) {
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

var factorial =1;

function findFactorial(x){
	for(i=1; i <= x; i++){
		factorial = factorial * i;
	}

	return factorial;
}