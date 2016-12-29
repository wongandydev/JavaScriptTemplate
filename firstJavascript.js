
//Global Scope
var gettingStartedOnJavascript = true;
var integer = 4;
var float = 4.7;
var string = 'Hi!';
var whatVariableIsit = 4.7;
var randomNumber = Math.floor((Math.random() * 20) + 2); //Will produce a random number from 2 to 20 //If '+1' didn't exist, then it would automatiocaly start 1 1 
//Global Scope 

var array = ['Hello','it\'s', 'me']; //Array 

function useEveryVariable(parameter){ //Function using switch case and return 
	var functionalScope = 4;//Only accessible within the function, will not work outside the function
	switch(parameter){
		case 4:
			return('This is a whole number aka integer ' + parameter);
			break;
		case 4.7:
			return('This is a float');
			break;
			//Commenting it the same as swift
			//I can not get used to use single quote
		case 'Hi!':
			return('This is a string');
			break;
		default:
			return('What the heck is this?');
			break;
	}
}

function usingPrintStatementInsteadOfReturn(input){ //Function using if/else and console.log
	if (1 >= input){
		console.log('You are not better than me!');
	}
	else if(1 <= input){
		console.log('You are greater than me!');
	}
	else if (1 === input){
		console.log('We are the same!');
	}
}

function functionDoNotNeedParamater(){ //function using no parameters 
	if(float >= integer){
		return('The float is larger than the integer today');
	}
	else if(float === integer){
		return('Float and integer are equal today!');
	}
	else if(float <= integer){
		return('Float was beaten by integer');
	}
}

array.push('I\'ve', 'been');//adds i've and been in to the end of the array. 
							//'.push' will add the items you wnat to add to the end of the array. 
array.pop(); //Removes the last item on the array
array.shift()//Removes the first item on the array
array.unshift('Goodbye');//Adds Good bye to the beginning on the array.
array.indexOf('me');//Finds the index of the parameter which is 'me'
array.splice(1,1);// Removes all items at position 1, and only one;
//array.splice(position, number of items to remove from position on)
//so if it is array.splice(2,5) it will start remove items at array[2] and remove 5 items so 2,3,4,5,7. 
array.slice(); //copies the array

//Javascript can print the letters in the string in the same way you print items in an array
console.log(string[0]); //Will print the first character in the string.
console.log(array); //prints the whole array
//First item in an array starts at zero (0) instead of 1. 
console.log(array[0]); //prints the first item in the array. 
//console.log is the print statement for Javascript
console.log('This is the length of \'Hello World\': ' + 'Hello World'.length); //Will print the length of 'Hello World'
console.log('This is the length of the array. It should have an output of three unless you add or subtract items in the array: ' + array.length); //Prints the length of the array (Output: 3)
console.log(useEveryVariable('Hello')); 
usingPrintStatementInsteadOfReturn(5);
console.log(functionDoNotNeedParamater()); 
// If we use return statement in the function instead of console.log, 
// we need to actually print it here so it shows up.


//For Loop
//Good only if you know how many times you want the code to repeat. 
for (var i = 0; i < 10; i++){
	console.log(i);//prints i 10 times, until condition (i < 10) is met. 
}

//Double For Loop
for (var i = 0; i < 10; i++){
	console.log('First For Loop: ' + i);
	for (var k = 0; k <= 10; k++){
		console.log('Second For Loop: ' + k);
	}
}
 //While Loop

 while (randomNumber !== 10){
 	console.log(randomNumber + 'is not the number we want');
 }
console.log('Found 10!');

