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

// Check the login - Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
// Given 1 - Username entered by user. 
var userEnteredUsername = "FishLips";
// Given 2 - Password entered by user.
var userEnteredPassword = "fluffykitty";
// Given 3 - Correct username.
var correctUsername = "FishLips";
// Given 4 - Correct password.
var correctPassword = "furrykitty";
// Result variable and result console.log
if(userEnteredUsername == correctUsername && userEnteredPassword == correctPassword){
	console.log("Welcome"+correctUsername+"!");
}else if(userEnteredUsername != correctUsername){
	console.log("Sorry the user name "+userEnteredUsername+" does not match our records.");
}else if(userEnteredPassword != correctPassword){
	console.log("Sorry the password entered does not match our records.");
}else{
	console.log("Sorry none of the information you entered matches our records.");
}


// Tire Pressure I - To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec. 
// Given - Pressure for each tire on the car in an array
var tirePressure = [36,36,36,38]; // in psi
// Result variable and result console.log
if(tirePressure[0] == tirePressure[1] && tirePressure[2] == tirePressure[3]){
	console.log("The tires pass spec!");
}else{
	console.log("Get your tires checked out!");
}














