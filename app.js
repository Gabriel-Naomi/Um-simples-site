'use strict'
const switcher =document.querySelector('.btn')
switcher.addEventListener('click', function(){
    document.body.classList.toggle('Roxo-theme')
    var className = document.body.className;
    if(className == 'Azul-theme'){
        this.textContent = "Roxo";
    }
    else{
        this.textContent = "Azul";
    }
    console.log('current class name: '+ className);
});