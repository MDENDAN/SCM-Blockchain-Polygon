const login = document.querySelector('.login');
const loginLink = document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    login.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    login.classList.remove('active');
});

