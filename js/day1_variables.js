// One line comment in js.
/*  Multi line comment. */

var name;
name = prompt("What is your name?");
var age = 19; // Number example
var pet = "Stella";
var petAge = "6";
console.log(age);
age = age + 1;
console.log(name);
console.log(age);
age = age - 10;
console.log(age);
age = age*2;
console.log(age);
console.log(name + age);

console.log(parseInt(petAge) + Number(age) + age*1);

var outputString;
outputString =
"User age is: " +"\t" + age + "\n"+
"User name is: " +"\t" + name + " \n"+
"User pet name is: " +"\t" + pet + " \n"+
"User pet age is: " +"\t" + petAge;

console.log(outputString);