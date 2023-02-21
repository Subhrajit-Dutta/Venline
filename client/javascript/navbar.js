//navbar

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
                    <div id="profile-card-img"><img src="images/dp.jpg"></div>
                    <div id="profile-card-name"><h4>${user.username}</h4></div>
                    <div id="profile-card-email"><p>${user.email}</p></div>
                    <div>
                        <button type="button" onclick="location.href='profile'">Profile Dashboard</button>
                        <button type="button" onclick="logOut()">Log Out</button>
                    </div>
`;
    document.getElementById('profile-card').innerHTML = profileCard;
    document.getElementById('profile-name').innerHTML = `<p>${user.username}</p>`;
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