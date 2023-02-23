let rating = document.querySelector('.ratings span');
rating = parseFloat(rating.innerHTML);

let ratingPercentage = rating * 10;
ratingPercentage += '%';

let stars = document.getElementsByClassName('stars-inner');
stars[0].style.width = ratingPercentage;

//navboxes

let navBoxes = document.getElementsByClassName('navboxes');
let products = document.getElementById('products');
let upload = document.getElementById('upload');
let edit = document.getElementById('editProducts');
let editbtn = document.getElementById('edit');


function productsShow() {
	navBoxes[0].classList.add('navcolor');
	navBoxes[1].classList.remove('navcolor');
	navBoxes[2].classList.remove('navcolor');
    products.classList.add('show');
    upload.classList.remove('show');
    edit.classList.remove('show');
}

function uploadShow() {
	navBoxes[1].classList.add('navcolor');
	navBoxes[0].classList.remove('navcolor');
	navBoxes[2].classList.remove('navcolor');
	products.classList.remove('show');
    upload.classList.add('show');
    edit.classList.remove('show');
}

function editShow() {
	navBoxes[2].classList.add('navcolor');
	navBoxes[1].classList.remove('navcolor');
	navBoxes[0].classList.remove('navcolor');
	products.classList.remove('show');
    upload.classList.remove('show');
    edit.classList.add('show');
}

navBoxes[0].addEventListener('click',productsShow);
navBoxes[1].addEventListener('click',uploadShow);
navBoxes[2].addEventListener('click',editShow);
editbtn.addEventListener('click',editShow);

//userdata

let user = JSON.parse(localStorage.getItem('user'));

console.log(localStorage.getItem('user'));


document.getElementById('name').innerHTML = `<h1>${user.username}</h1>`;

//edit profile

const nameEdit = document.getElementById('name-edit');
const phoneEdit = document.getElementById('phone-edit');
const emailEdit = document.getElementById('email-edit');

nameEdit.value = `${user.username}`;
phoneEdit.value = `${user.phone}`;
emailEdit.value = `${user.email}`;


const saveBtn = document.getElementById('save');

function saveChanges(event){
	event.preventDefault();
	user.username = nameEdit.value;
	const userUpdated = JSON.stringify(user);
	localStorage.setItem('user',userUpdated);
}

saveBtn.addEventListener('click',saveChanges);