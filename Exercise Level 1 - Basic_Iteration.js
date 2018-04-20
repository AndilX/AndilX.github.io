
//------Conditionals 1
let variableAge = 1;

console.log(variableAge);

checkAge(variableAge);

function checkAge(variableAge){
"use strict";
    if (variableAge <20) {
        console.log("False");
    }else if(variableAge =>20 & variableAge <=40){
        console.log("True"); 
    }else if(variableAge >40){
        console.log("Out of range")
    } 
}

//------Iteration 1
console.log("Iteration 1"); 
for(i=1; i<10; i++){
console.log(i);
}

//------Iteration 2

console.log("Iteration 2"); 
for(j=1; j<10; j++){
    if(j%2 == 0){
            console.log(j); 
    }
}
