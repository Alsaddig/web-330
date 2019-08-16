/*
;=============================================================
; Title:  Exercise 2.2
; Author: Alsaddig Ibrahim
; Date:   8/ 15/ 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 2.2"));

var person =
{
    getAge:function()
    {
        return this.age;
    }

};
var alsaddig = Object.create(person,{
    "age":{
        "value":"37"
     },
    "fullname":
    {
        "value": "Alsaddig Ibrahim"
    }
    
});
alsaddig.getAge();

console.log("\nthe person's full name is: '%s ", alsaddig.fullname);
console.log("the person's age is '%s' ", alsaddig.age);

// end program