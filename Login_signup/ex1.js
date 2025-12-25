const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); 
});


const loginForm = document.querySelector('.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('loginUsername').value.trim();
    if(username) {
        localStorage.setItem('loggedInUser', username);
        alert(`Welcome, ${username}! You are now logged in.`);
        window.location.href = '../Homepage/ex1.html';
    } else {
        alert('Please enter your username.');
    }
});

const registerForm = document.querySelector('.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const username = document.getElementById('registerUsername').value.trim();
    if(username) {
        localStorage.setItem('loggedInUser', username);
        alert(`Welcome, ${username}! You are now already register in.`);
        window.location.href = '../Homepage/ex1.html';
    } else {
        alert('Please enter your username.');
    }
});


