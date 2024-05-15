let i = 1;
let j = 1;
let k = 1;
let h3 = document.querySelector('h3');

for(i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        h3.innerHTML += k;
        k++;
    }
    h3.innerHTML += '<br>';
}