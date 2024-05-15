let qi = 1729;
let tep = qi;
let rev = 0;
let sumOfDigits = 0;
let pr7 = document.querySelector('.pr7');

while(tep > 0){
    sumOfDigits = sumOfDigits + tep % 10;
    tep = tep 
    tep = (tep / 10) | 0; 
}

tep = sumOfDigits;

while(tep > 0){
    rev =rev *10 + tep % 10;
    tep = tep 
    tep = (tep / 10) | 0; 
}
if(rev * sumOfDigits === qi){
    pr7.innerHTML += `${qi} is an Automorphic number.`;
}
else{
    pr7.innerHTML += `${qi} is not an Automorphic number.`;
}