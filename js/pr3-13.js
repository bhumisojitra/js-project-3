let string = "";
let pop = document.querySelector('.pop');

for(let k = 5; k >= 1; k--)
    {
     for(let m = 5; m>= k; m--)
     {
       pop.innerHTML += m;
     }
    pop.innerHTML += "<br>";
}