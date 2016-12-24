
//Global Scope
var gettingStartedOnJavascript = true;
var integer = 4;
var float = 4.7;
var string = 'Hi!';
var whatVariableIsit = 4.7;
//Global Scope 

var array = ['Hello','it\'s', 'me']; //Array 

function useEveryVariable(parameter){
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

function usingPrintStatementInsteadOfReturn(input){
	if (1 >= input){
		debug('You are not better than me!');
	}
	else if(1 <= input){
		debug('You are greater than me!');
	}
	else if (1 === input){
		debug('We are the same!');
	}
}

function functionDoNotNeedParamater(){
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

debug(array[0]); //debug is the print statement for Javascript
debug(useEveryVariable('Hello'));
usingPrintStatementInsteadOfReturn(5);
debug(functionDoNotNeedParamater());
