var text;
for (var i = start; i <= end; i++) {
	if (i % 3 == 0 && i % 5 == 0)
		text += "FizzBuzz\n";
	else if (i % 3 == 0)
		text += "Fizz\n";
	else if (i % 5 == 0)
		text += "Buzz\n";
	else
		text = text + i + "\n";
}
console.log(text);