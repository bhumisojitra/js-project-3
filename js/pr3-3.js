let sum = 0;
let number = 153;

let temp = number; 

while (temp > 0) {
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10); 
}

if (sum == number) {
    document.querySelector('h2').innerHTML += `${number} = is an Armstrong number.`;
}
else {
    document.querySelector('h2').innerHTML += `${number} = is not an Armstrong number.`;
}