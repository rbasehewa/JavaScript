console.log("Print all numbers between -10 and 10");

var firstQuestion = -10;

while(firstQuestion<=10){
    console.log(firstQuestion);
    firstQuestion++;
}

console.log("Print all numbers between 10 and 40");

var SecondQuestion = 10;

while(SecondQuestion<=40){

    SecondQuestion

    console.log(SecondQuestion);
    SecondQuestion++;
}

console.log("Print all odd numbers between 300 to 333");

var ThrirdQuestion = 300;

while(ThrirdQuestion<=333){
    if(ThrirdQuestion % 2 == 1)
        console.log(ThrirdQuestion);

    ThrirdQuestion++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");

var ForthQuestion = 5;

while(ForthQuestion<=50){

     if(ForthQuestion % 5 == 0 && ForthQuestion % 3 == 0){
        console.log(ForthQuestion);
     }
     ForthQuestion++;
}