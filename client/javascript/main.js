var navbar = document.getElementById('navbar');

function checkscroll(){
    if(window.pageYOffset != 0){
        navbar.classList.add("nav-move");
    }
    else{
    	navbar.classList.remove("nav-move");
    }
}
window.addEventListener('scroll',checkscroll);