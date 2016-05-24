//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and 
//for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”."

function print(value) {
	var el = document.getElementById('output');
	var content = document.createElement("li");
	content.innerHTML = '<span>'+value+'</span>';
	el.appendChild(content);
}

(function(){
	for (i = 1; i < 101; i++) {
		if(i % 3 == 0  && i % 5 == 0){
			print('FIZZBUZZ');
		} else if (i % 3 == 0) {
			print('FIZZ');
		} else if (i % 5 == 0) {
			print('BUZZ');
		} else {
			print(i);
		}
	}
})();