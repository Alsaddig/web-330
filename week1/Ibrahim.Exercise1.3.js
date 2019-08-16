<<<<<<< HEAD
/*
;=============================================================
; Title:  Exercise 3.2
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 1.3"));


// start code
function cellphone(manufacturer,model,color,price)
{
    this.manufacturer=manufacturer;
    this.model=model;
    this.color=color;
    this.price=price;
    this.gitPrice=function()
    {
        return this.price;
    }
    this.gitModel=function()
    {
        return this.model;
    }
    this.GitDetail=function()
    {
        return "\nManufacturer: "+this.manufacturer+"\n Model: "+this.gitModel()
            +"\n Color: "+this.color+"\n Price: "+this.gitPrice();
    }
    
    

}
var cellphone =new cellphone("Apple","iPhone x","white","399.99");
=======
/*
;=============================================================
; Title:  Exercise 3.2
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 1.3"));


// start code
function cellphone(manufacturer,model,color,price)
{
    this.manufacturer=manufacturer;
    this.model=model;
    this.color=color;
    this.price=price;
    this.gitPrice=function()
    {
        return this.price;
    }
    this.gitModel=function()
    {
        return this.model;
    }
    this.GitDetail=function()
    {
        return "\nManufacturer: "+this.manufacturer+"\n Model: "+this.gitModel()
            +"\n Color: "+this.color+"\n Price: "+this.gitPrice();
    }
    
    

}
var cellphone =new cellphone("Apple","iPhone x","white","399.99");
>>>>>>> 023628524961621c5682d32a7f8d559b75aeb678
console.log(cellphone.GitDetail());