let pr4 = document.querySelector('.pr4');
let x;
let y=0;
let w = 12321;
let z;
	z=w;
        while (w != 0) {
          x = w % 10;
          y = y * 10 + x;
          w = (w / 10);
        }
	if(z==y)
	{
        pr4.innerHTML+=(z+" is palindrome a number");
	}
	else
	{
	    pr4.innerHTML+=(z+" is palindrome a number");
	}