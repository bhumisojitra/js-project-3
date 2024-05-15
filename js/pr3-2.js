let c = 1;
let n = 5;
let fact = 1;
let h2 = document.querySelector('h2');

while(c <= n){
    fact = fact * c;
    c++;
}
h2.innerHTML += ('factorial is =' + fact + '<br>' + '<br>');