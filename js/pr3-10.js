var currentNumber = 1;
let pr10 = document.querySelector(".pr10");

do {
    if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
        pr10.innerHTML += "FizzBuzz" + '<br>';
    } else if (currentNumber % 3 == 0) {
        pr10.innerHTML += "Fizz" + '<br>';
    } else if (currentNumber % 5 == 0) {
        pr10.innerHTML += "Buzz" + '<br>';
    } else {
        pr10.innerHTML += currentNumber  + '<br>';
    }

    currentNumber++;
} while (currentNumber <= 10);