/*
;=============================================================
; Title:  Exercise 1.4
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 1.4"));


// start code
function Car(model)
{
    this.model=model;
}
Car.prototype.Start=function()
{
    console.log("Car added to the racetrack");
}
function Track(model ,year)
{
    this.model=model;
    this.year=year;
}
Track.prototype.Start=function()
{
    console.log("Truck added to the racetrack");
}
function Jeep(model,year,color)
{
    this.model=model;
    this.year=year;
    this.color=color;
}
Jeep.prototype.Start=function()
{
    console.log("Jeep added to the racetrack");
}
var racetrack = [];
function driveIt(vehicle)
{
    vehicle.Start();
    racetrack.push(vehicle);
}
var celica = new Car("Celica");
var fordF150=new Track("F150","2019");
var wrangler=new Jeep("wrangler","2019","black");

console.log("");
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);
console.log('\n - the following vehicles have been added to the racetrack-');
for(var x=0; x<racetrack.length;x++)
{
    console.log(racetrack[x].constructor.name+": "+racetrack[x].model);
}