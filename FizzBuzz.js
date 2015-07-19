var printFizzBuzz = function(start, end) {
	var text = "";
	for (var i = start; i <= end; i++) {
		if (i % 3 == 0 && i % 5 == 0)
			text += "FizzBuzz<br>";
		else if (i % 3 == 0)
			text += "Fizz<br>";
		else if (i % 5 == 0)
			text += "Buzz<br>";
		else
			text = text + i + "<br>";
	}
document.getElementById("output").innerHTML = text;

};

