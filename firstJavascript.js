
//Global Scope
var gettingStartedOnJavascript = true;
var number = 4;
var float = 4.7;
var string = 'Hi!';
var whatVariableIsit = 4.7;
//Global Scope 

var array = ['Hello','it\'s', 'me']; //Array 

function useEveryVariable(parameter){
	var functionalScope = 4;//Only accessible within the function, will not work outside the function
	switch(parameter){
		case 4:
			console.log('This is a whole number aka integer' + para);
			break;
		case 4.7:
			console.log('This is a float');
			break;
			//Commenting it the same as swift
			//I can not get used to use single quote
		case 'Hi!':
			console.log('This is a string');
			break;
		default:
			console.log('What the heck is this?');
			break;
	}
}

useEveryVariable(4.7);
console.log(array); //console.log is the print statement for Javascript