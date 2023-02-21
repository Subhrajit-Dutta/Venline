// navbar

const navbar = document.getElementById('navbar');

function checkscroll() {
    if (window.pageYOffset != 0) {
        navbar.classList.add("nav-move");
    }
    else {
        navbar.classList.remove("nav-move");
    }
}
window.addEventListener('scroll', checkscroll);

// provide section color change effect

const pcard = document.getElementsByClassName('provide-card');
const icons = document.getElementsByClassName('i');

function changecolor() {
    pcard[1].classList.add('cardcolor');
    pcard[0].classList.remove('cardcolor');
    for (let i = 0; i < 7; i++) {
        icons[i].classList.remove('logowhite');
    }
    for (let i = 7; i < 14; i++) {
        icons[i].classList.add('logowhite');
    }
}

function removecolor() {
    pcard[1].classList.remove('cardcolor');
    pcard[0].classList.add('cardcolor');
    for (let i = 0; i < 7; i++) {
        icons[i].classList.add('logowhite');
    }
    for (let i = 7; i < 14; i++) {
        icons[i].classList.remove('logowhite');
    }
}

pcard[1].addEventListener('mouseover', changecolor);
pcard[1].addEventListener('mouseout', removecolor);

// search location dropdown

let arrow_box = document.getElementById('arrow-downBox');

let arrow_down = document.getElementById('drop-icon');
arrow_down.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (arrow_box.style.display == 'none')
        arrow_box.style.display = 'block';
    else
        arrow_box.style.display = 'none';
});

//profile

let dropProfile = document.querySelector('#profile i');
let profile = document.getElementById('profile-card');

dropProfile.addEventListener('click', function () {
    if (profile.style.display == 'none')
        profile.style.display = 'flex';
    else
        profile.style.display = 'none';
});

//user Profile data showing in navbar

const user = JSON.parse(localStorage.getItem('user'));

// after log in

if(localStorage.getItem('user')){
    const profileCard = `
                    <div id="profile-card-img"></div>
                    <div id="profile-card-name"><h4>${user.username}</h4></div>
                    <div id="profile-card-email"><p>${user.email}</p></div>
                    <div>
                        <button type="button" onclick="location.href='profile.html'">Profile Dashboard</button>
                        <button type="button" onclick="logOut()">Log Out</button>
                    </div>
`;
    document.getElementById('profile-card').innerHTML = profileCard;
    document.getElementById('profile-name').innerHTML = `<h5>${user.username}</h5>`;
    document.getElementById('login-signup-btn').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

//log out

function logOut(){
    localStorage.removeItem('user');
    document.getElementById('profile-card').innerHTML = ``;
    document.getElementById('profile-name').innerHTML = ``;
    document.getElementById('profile').style.display = 'none';
    document.getElementById('login-signup-btn').style.display = 'block';
}