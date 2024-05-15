var num=23;
var isPrimeT=true;
var iw=2;
let pr6 = document.querySelector('.pr6');
while(iw<isPrimeT){
  if(num%iw==0){
    isPrimeT=false;
    break;
  }
  iw++;
}
if(isPrimeT==false)
{
  pr6.innerHTML+=(num+" is a prime number");
}
else
{
  pr6.innerHTML+=(num+" is not a prime number");
}