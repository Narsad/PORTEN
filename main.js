                // constant menuBurger

const menuBurger = document.querySelector('.menu');
const nav = document.querySelector('nav');

                //constant modal form

const modalBG = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const logIn = document.querySelector('.entrance');
const checkIn = document.querySelector('.check-in');
const logInForm = document.querySelector('#login-form');
const inputName = document.querySelector('#username');
const inputPass = document.querySelector('#password');
const repeatPassword = document.querySelector('#RepeatPassword');


let login = localStorage.getItem('UserName');

chackAuth();

                //click menu

menuBurger.addEventListener('click', function(){
    nav.classList.toggle('nav');
})

                //click modal

function openModal(){
    modalBG.classList.add('modal-display');
    modal.classList.add('modal-display');
    document.querySelector('body').style.overflow = 'hidden';
    logInForm.addEventListener('submit', loginfunc);
    console.log('rrr');
}

function exit(){
    logIn.innerHTML = 'Войти';
    checkIn.innerHTML = 'Регистрация';
    logIn.removeEventListener('click', exit);
    logIn.addEventListener('click', openModal);
    localStorage.setItem('UserName', '');
    logInForm.reset();
    document.querySelector('#RepeatPassword').style.display = '';
    document.querySelector('.Repeat-Password').style.display = '';
    checkIn.addEventListener('click', signUp);
}


function loginfunc(){
    modalBG.classList.remove('modal-display');
    modal.classList.remove('modal-display');
    document.querySelector('body').style.overflow = '';
    login = inputName.value;
    if(repeatPassword.style.display == 'block'){
        validationUserName();
        if(repeatPassword.value == inputPass.value){
            chackAuth();
        }else{
            alert(' pass bi');
            chackAuth();
        }
    }else{
    validationUserName();
    chackAuth();
    }
}
                // Authorized

function authorized() {
    if(repeatPassword.style.display == 'block'){
        if(repeatPassword.value == inputPass.value){
            console.log('h');
            console.log('authorized');
            alert('Welcome ' + login);
            logIn.innerHTML = 'Выйти';
            checkIn.innerHTML = login;
            logIn.removeEventListener('click', openModal);
            logIn.addEventListener('click', exit);
            localStorage.setItem('UserName', login);
        }else{
            openModal();
            
        }
    }else{
    console.log('authorized');
    alert('Welcome ' + login);
    logIn.innerHTML = 'Выйти';
    checkIn.innerHTML = login;
    logIn.removeEventListener('click', openModal);
    logIn.addEventListener('click', exit);
    localStorage.setItem('UserName', login);}
}

function notAuthorized() {
    console.log('notauthorized');
    // function logIn(event) {
    //     event.preventDefault();
    // }
    //alert('please enter name');
    logIn.addEventListener('click', openModal);
    
    
}
            // authorization check
            
function chackAuth(){
    console.log('chack');
if(login && inputPass){
    authorized();
}else{
    notAuthorized();
}
}
            //  Validation

function validationUserName(){
    if(inputName.value){
        console.log('good');
        validationPass();
    }else{
        alert(' please enter name');
        openModal();
        chackAuth();
    }
}

function validationPass(){
    if(inputPass.value){
        console.log('goodpas');
        
    }else{
        alert('please enter password');
        login = '';
        chackAuth();
        openModal();
    }
}
                    //  Sign-Up

function signUp(){
    openModal();
    document.querySelector('#RepeatPassword').style.display = 'block';
    document.querySelector('.Repeat-Password').style.display = 'block';
    checkIn.removeEventListener('click', signUp);
}
checkIn.addEventListener('click', signUp);