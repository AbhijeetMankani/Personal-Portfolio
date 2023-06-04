const navbar = document.querySelector('nav');
navbar.style.transitionDuration = '0.4s';

const navlinks = document.querySelectorAll('.navbar-nav a');

const height = window.innerHeight;

window.onscroll = function(){
    if(window.scrollY>20){
        navbar.classList.add('bg');
        navbar.classList.add('background-gradient');
    }else{
        navbar.classList.remove('bg');
        navbar.classList.remove('background-gradient');
    }
    if(window.scrollY < height*0.6){
        navlinks[0].classList.add('active');
        navlinks[1].classList.remove('active');
    }
    else if(window.scrollY > height*0.6 && window.scrollY<height*1.6){
        navlinks[0].classList.remove('active');
        navlinks[1].classList.add('active');
        navlinks[2].classList.remove('active');
    }
    else if(window.scrollY > height*1.6 && window.scrollY<height*2.6){
        navlinks[1].classList.remove('active');
        navlinks[2].classList.add('active');
        navlinks[3].classList.remove('active');
    }
    else if(window.scrollY > height*2.6 && window.scrollY<height*3.6){
        navlinks[2].classList.remove('active');
        navlinks[3].classList.add('active');
        navlinks[4].classList.remove('active');
    }
    else if(window.scrollY > height*3.6){
        navlinks[3].classList.remove('active');
        navlinks[4].classList.add('active');
    }

}
const navbartoggle = document.querySelector('.navbar-toggler');
navbartoggle.onclick = function(){
    navbar.classList.add('bg');
    navbar.classList.add('background-gradient');
}

