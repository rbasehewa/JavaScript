//print all numbers between -10 and 19
for (var number = -10; number <= 19; number++) {
    console.log(number);
}

//print all even numbers between 10 and 40
for (var number = 10; number < 41; number++) {
    if (number % 2 == 0) {
        console.log(number);
    }
}

//print all odd numbers between 300 and 333
for (var number = 300; number < 334; number++) {
    if (number % 2 == 1) {
        console.log(number);
    }
}

// print all numbers divisible between 5 and 3 between 5 and 50

for(var fourthNumber = 5; fourthNumber <= 50; fourthNumber++){
    if(fourthNumber % 3 == 0 && fourthNumber % 5 == 0){
        console.log(fourthNumber);
    }
}