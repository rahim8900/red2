let body = document.querySelector('body');
let lovhe = document.querySelector('.lovhe');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let sorgu = document.querySelector('.sorgu')
let s = 0;
red.addEventListener('click', fred);
blue.addEventListener('click', fblue);
function fred(e) {

    if (s > -10) {
        s--;
        sorgu.textContent = s
    }
    else if (s < -10) {
        red.style.display = 'none'
    }
    else if (s < 10) {
        blue.style.display = "block";
    }

}
function fblue(e) {

    if (s < 10) {
        s++;
        sorgu.textContent = s;
    }
    else if (s > 10) {
        blue.style.display = 'none'
    }
    else if (s < -10) {
        red.style.display = "block";
    }

}
