import './index.html';
import './index.scss';

let burger = document.getElementById('burger')
let menu = document.getElementById('menu')
let header = document.getElementById('header')

burger.onclick = function() {
    if (!burger.classList.length) {
        burger.classList.add('open')
        header.classList.add('open_header')
        menu.classList.remove('header__body')
        menu.classList.add('open_menu')
    }    
    else {
        burger.classList.remove('open') 
        header.classList.remove('open_header')
        menu.classList.remove('open_menu')
        menu.classList.add('header__body')
    }  
};
