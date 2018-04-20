//------Function 1 - square of a user input

function squareFunction(){
    "use strict";
    var inputValue = prompt("Please enter a value", "0");
                if (inputValue == null || inputValue == "") {
                    let txt = "User cancelled the prompt.";
                } else {
                    let txt = "Input value entered is " + inputValue;
                    let txt2 = "Output value is the square of " + inputValue +" which is = " + inputValue*inputValue;
                    console.log(txt2);
                    document.getElementById("button1").innerHTML = (txt2);
                }
}   

//------Function 2 - sum of 3 number by user input
function sumFunction(){
    "use strict";
    var inputValue1 = Number(prompt("Enter the first value", "0"));
                if (inputValue1 == null || inputValue1 == "") {
                    let txt0 = "User cancelled the prompt.";
                } else {
                    let txt1 = "Input value entered is " + inputValue1; 
                }
    var inputValue2 = Number(prompt("Enter a second value", "0"));
                if (inputValue2 == null || inputValue2 == "") {
                    let txt0 = "User cancelled the prompt.";
                } else {
                    let txt2 = "Input value entered is " + inputValue2; 
                }
    var inputValue3 = Number(prompt("Enter a third value", "0"));
                if (inputValue3 == null || inputValue3 == "") {
                    let txt0 = "User cancelled the prompt.";
                } else {
                    let txt3 = "Input value enter is " + inputValue3;
                }
                //alert(inputValue1+inputValue2+inputValue3);
document.getElementById("button2").innerHTML = "Output value is the sum = "+ (inputValue1+inputValue2+inputValue3);
}  
