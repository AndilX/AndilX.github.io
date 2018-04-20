//------Events 1, Increase age by button
"use strict";
var personObject = {name:"You", age:1 , occupation: "Dev"};

function maker(name,age,occupation){
    "use strict";
    var it = {};
    it.name = name;
    it.age = age;
    it.occupation = occupation;
    return it;
 }

 function callFunction(){
    "use strict";
     let newAge= personObject.age + 1;
     console.log("Console log result", personObject);
     document.write("Person object data:  Name is ", personObject.name, '<br/>',"Age is ",newAge,'<br/>', "Occupation is ",personObject.occupation);
 }

 console.log("Console log result", personObject);
 document.write("Person object data:  Name is ", personObject.name, '<br/>',"Age is ",personObject.age,'<br/>', "Occupation is ",personObject.occupation);
 
//------Events 2, Person object and edits

function updateFunction() {
    "use strict";
    var job = document.getElementById("job").value
    var age = document.getElementById("age").value;
    var fname = document.getElementById("fname").value;
    //submitOK = "true";

    // returns undefined...fix
    let submitOK = alert(job.value,age.value,fname.value); 

        if (fname.length > 10) {
            alert("The name may have no more than 10 characters");
            let submitOK = "false";
        } 

        if (isNaN(age) || age < 1 || age > 100) {
            alert("The age must be a number between 1 and 100");
            let submitOK = "false";
        }
        if (submitOK == "false") {
            return false;
        }
    //alert(job,age,fname);
    console.log("Console log result", job.value,age.value,fname.value);
}
