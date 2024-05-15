let sum1 = 0;
let anss = '';
let pr12 = document.querySelector('.pr12');

for (var i = 1; i <= 10; i++) {
    
    anss += i * i;

    anss += i * i;

    if (i < 10) {
        anss += "+";
    }
}

pr12.innerHTML = anss + " = " + sum1;