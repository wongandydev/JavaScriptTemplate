var gettingStartedOnJavascript = true;
var number = 4;
var float = 4.7;
var string = 'Hi!';
var whatVariableIsit = 4.7;

function useEveryVariable(parameter){
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