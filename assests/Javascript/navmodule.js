
const headContainer = document.querySelector('.headcontainer');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Adjust the scroll position as needed
        headContainer.classList.add('headcontainer-hidden');
        navbar.classList.add('navbar-fixed');
    } else {
        headContainer.classList.remove('headcontainer-hidden');
        navbar.classList.remove('navbar-fixed');
    }
});


const navsignupbtn=document.querySelector('#navsignup')
const holderlogin=document.getElementById('holderlogin')

const loginregistercontainer=document.querySelector('.login-register-container')

const formopen=navsignupbtn.addEventListener("click",()=>{
    loginregistercontainer.classList.toggle('formshow')
})

const formclosebtn=document.querySelector('.close-btn')

    formclosebtn.addEventListener("click",()=>{
    loginregistercontainer.classList.remove('formshow')
});


document.getElementById('clickhere').addEventListener("click",(e)=>{
    e.preventDefault();
    loginregistercontainer.classList.remove('formshow') 
    loginForm.style.display='block' 
})

function closebutton()
{
    loginForm.style.display='none'
}
 
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const registerButton = document.getElementById('register-btn');
    const loginContainer = document.querySelector('.login-register-container');
    const loginForm = document.querySelector('.login-container');
    

    registerButton.addEventListener("click", function(e) {
        // Mobile Validation
        e.preventDefault();
        if (!/^\d{10}$/.test(mobileInput.value)) {
            alert('Invalid mobile number (10 digits required).');
            return;
        }

        // Email Validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            alert('Invalid email address.');
            return;
        }

        // Password Validation (customize as needed)
        if (passwordInput.value.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }
 
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('mobile', mobileInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);

        // Close the form & Show Login Form
        loginContainer.classList.remove('.formshow')
        loginForm.classList.toggle('loginformshow')
    });

    // Login Logic
    const loginButton = document.getElementById('loginButton');
    const loginNameInput = document.getElementById('loginName');
    const loginPasswordInput = document.getElementById('loginPassword');
    const loginError = document.getElementById('loginError');

    loginButton.addEventListener('click', function() {
        if (loginNameInput.value === localStorage.getItem('name') && loginPasswordInput.value === localStorage.getItem('password')) {
            alert('Login successful!');
            loginForm.style.display='none'
        } else {
            alert('Login failed. Incorrect name or password.');
            loginError.innerText="Incorrect name or password."
        }
    });

function registertologin()
{   
    loginContainer.style.display='none';
    loginForm.style.display='block';
}
 


  
    

            

          
           

           
           

