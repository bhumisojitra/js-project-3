let hello = document.querySelector('.hello')

for(i = 1; i <= 10; i++){
    if(i < 10){
        hello.innerHTML +=  i + '-';
    }
    else{
        hello.innerHTML +=  i ;
    }
}
hello.innerHTML += '<br>' + '<br>';