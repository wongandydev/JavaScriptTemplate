//Codecademy vacationCompare
//Double For Loop

var myPlaces = ['Los Angeles'. 'San Francisco'. 'Hong Kong'];
var friendPlaces = ['Las Vegas', 'Hong Kong' , 'Macau'];

for (var i = 0; i < myPlaces.length; i++){
	for (var j = 0; j < friendPlaces.length; j++){
		if (myPlaces[i] === friendPlaces[j]){
			console.log(friendPlaces[j]);
		}
	}
}