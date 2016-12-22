//codecademy Pizza Code 

//Stage 1
function takeOrder(topping,crustType){
  console.log('Order:' + crustType + ' pizza topped with ' + topping);
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

console.log(takeOrder('bacon', 'thin'));
console.log(takeOrder('pepperoni', 'thick'));
console.log(takeOrder('cheesy', 'extra-cheese'));
console.log(totalOrder(numberOfPizza));

//Stage 3 - Codecademy

var orderCount = 0;

function takeOrder(topping,crustType){
  orderCount = orderCount + 1;
  console.log('Order:' + crustType + ' pizza topped with ' + topping);
}

function getSubTotal(itemCount){
  return(itemCount * 7.5);
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'thick');
takeOrder('cheesy', 'extra-cheese');
console.log(getSubTotal(orderCount));