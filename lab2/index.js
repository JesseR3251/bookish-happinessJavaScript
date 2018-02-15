
function countryToken() {
	var twentyToken = 20;
	var tenToken = 10;
	var fiveToken = 5;
	var twoToken = 2;
	var oneToken = 1;
	var totalValue = 0;
	
	var userInput = prompt("Enter a number: ");
	while (totalValue < userInput) {
		totalValue = Math.floor((userInput / twentyToken));
//		break;
		//twentyToken += totalValue;
			
	}
	document.write(totalValue);
}