console.log(4%2);

/*var age = prompt("How old are you");
if(Number(age)%2 == 0)
{
	console.log("Your age is even");
}else
{
	console.log("Your age is odd");
}
*/

console.log(Math.PI*2);
console.log(Math.max(5,8));
console.log(Math.min(3,2));

// Arrays
var shoppingListArray = ["Bread","Oil","Soap"];
console.log(shoppingListArray[1]);
// Adding item to array
shoppingListArray[3] = "Toothpaste";
console.log(shoppingListArray[3]);
// .push adds item to end of array
shoppingListArray.push("Grapes");

//shoppingListArray.pop("Grapes");

//shoppingListArray.slice(2,2);
console.log(shoppingListArray.length);

var numberArray = [1,2,3,8]

console.log(numberArray[1]*numberArray[2]);
console.log(Math.max(1,2,4,6));
console.log(Math.max.apply(null,numberArray));
console.log(Math.min(2,3,5,23));
// Round
console.log(Math.round(2345.678));
console.log(Math.ceil(2.4));

console.log(Math.floor(377*Math.random())+3);

//var age = prompt("How old are you?");
//console.log(age*Math.random());

//var radius = prompt("What is the radius of the cone?");
//var height = prompt("What is the height of the cone?");
//console.log(1/3*Math.PI*Math.pow(Number(radius),2)*Number(height));

/*var array = [];
var a = prompt("What is a equal to?");
array.push(a);
var b = prompt("What is b equal to?");
array.push(b);
var c = Math.sqrt((Math.pow(Number(a),2) + Math.pow(Number(b),2)));
array.push(c);
console.log(array);
*/

// Math.sqrt will square root
//newArray = [prompt("What is a equal to?"), prompt("What is b equal to?")];
//newArray.push(Math.sqrt((Math.pow(Number(newArray[0]),2) + Math.pow(Number(newArray[1]),2))));
//console.log(newArray);


// Joe's example
var triangle =[];
triangle[0] = prompt("What is a?");
triangle[1] = prompt("What is b?");
triangle[2] = Math.sqrt((Math.pow(Number(triangle[0]),2) + Math.pow(Number(triangle[1]),2)));
console.log(triangle);









