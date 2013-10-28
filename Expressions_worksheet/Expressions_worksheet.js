// Dog Years
// Given 1 - Sparky's age in human years
var sparkyAge = 4;

// Result variable - Sparky's age in dog years
var humanYearsToDog = sparkyAge * 7;

// Result Print
console.log("Sparky is " +sparkyAge+ " human years old which is " +humanYearsToDog+ " in dog years.");


// Slice of Pie part 1
// Given 1 - Number of slices per pizza
var numSlicesPerPizza = 6;
// Given 2 - Number of people at the party
var numPeople = 9;
// Given 3 - Number of pizzas ordered
var numPizzaOrdered = 11;

// Result variable - Number of slices per person
var numSlicesPerPerson = (numSlicesPerPizza * numPizzaOrdered)/numPeople;

// Result Print
console.log("Each person ate " +numSlicesPerPerson+ " slices of pizza at the party.");


// Slice of Pie part 2
// Result variable - Number of slices Sparky gets to eat
var sparkyPizza = (numSlicesPerPizza * numPizzaOrdered)%numPeople;

// Result Print
console.log("Sparky got " +sparkyPizza+ " slices of pizza.");


// Average shopping bill
// Given - An array with five weekly grocery totals
var groceryTotals = [50, 67, 43, 89, 38];

// Result variable 1 - Total amount spent of groceries
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];
// Result variable 2 - Average weekly grocery spending 
var average = total/groceryTotals.length;

// Result Print
console.log("You have spent a total of $" +total+ " on groceries over 5 weeks. That is an average of $" +average+ " per week.");











