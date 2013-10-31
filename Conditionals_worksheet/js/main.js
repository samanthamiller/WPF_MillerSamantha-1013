// Last Chance for Gas! - A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.

// Given 1 - Gas efficiency of the car
var gasEfficiency = 16; // in mpg
// Given 2 - Gauge reading of the gas tank
var gasGauge = 68; // in percent
// Given 3 - Car's gas tank capacity
var capacity = 17; // In gallons
// Result Variable 1 - How many gallons of gas are in the vehicle 
var gasInTank = (capacity*(gasGauge/100));
// Result Variable 2 - How far can they travel with the amount of gas they have in their tank.
var canTravel = gasInTank*gasEfficiency;
if(canTravel > 200){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " +gasInTank+ " gallons of gas in your tank, better get gas now while you can!");
}

