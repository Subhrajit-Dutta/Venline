//userdata

let user = JSON.parse(localStorage.getItem('user'));

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

//location

