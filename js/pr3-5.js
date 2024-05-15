let li = 100;
var s = 0, v= 1, re;
let pr5 = document.querySelector('.pr5');

while(v <= li){
    pr5.innerHTML += +v + '<br>';
    re = s + v;
    s = v;
    v = re;
}
pr5.innerHTML += '<br>';
