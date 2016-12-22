//codecademy Pizza Code 

//Stage 1
function takeOrder(topping,crustType){
  debug('Order:' + crustType + ' pizza topped with ' + topping);
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'thick');
takeOrder('cheesy', 'extra-cheese');

//Stage 2 - Done before following steps on tutorial
var numberOfPizza = 0;


function takeOrder(topping,crustType){
	numberOfPizza = numberOfPizza + 1;
  	return('Order:' + crustType + ' pizza topped with ' + topping);
}

function totalOrder(numOfPizza){
	return(numOfPizza * 7.50);
}

debug(takeOrder('bacon', 'thin'));
debug(takeOrder('pepperoni', 'thick'));
debug(takeOrder('cheesy', 'extra-cheese'));
debug(totalOrder(numberOfPizza));