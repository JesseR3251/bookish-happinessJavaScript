
function countryToken() {
	
var twentyToken = 20;
var tenToken = 10;
var fiveToken = 5;
var twoToken = 2;
var oneToken = 1;

var userInput = prompt("Enter a number: ");

if (userInput > 19 && userInput < 101) {
	
	twentyMultiplier = Math.floor((userInput / twentyToken));
	var totalValue = twentyToken * twentyMultiplier;
	document.write('The input entered is ' + userInput + 
	'<br>' + twentyToken + ' x ' + twentyMultiplier + '<br>');
	var remainder = userInput - totalValue;

	var tenMultiplier = Math.floor(remainder / tenToken);
	document.write(tenToken + ' x ' + tenMultiplier + '<br>');
	var totalValue = tenToken * tenMultiplier;
	var remainder = remainder - totalValue;

	var fiveMultiplier = Math.floor(remainder / fiveToken);
	document.write(fiveToken + ' x ' + fiveMultiplier + '<br>');
	var totalValue = fiveToken * fiveMultiplier;
	var remainder = remainder - totalValue;

	var twoMultiplier = Math.floor(remainder / twoToken);
	document.write(twoToken + ' x ' + twoMultiplier + '<br>');
	var totalValue = twoToken * twoMultiplier;
	var remainder = remainder - totalValue;

	var oneMultiplier = Math.floor(remainder / oneToken);
	document.write(oneToken + ' x ' + oneMultiplier + '<br>');
	var totalValue = oneToken * oneMultiplier;
	var remainder = remainder - totalValue;
}
	else {
		
		document.write('Please enter a value between 20 and 100')
	}

}