import throttle from "lodash.throttle";


//VARIABLES
let myForm = document.querySelector('.feedback-form');
let formData = new FormData(myForm);
let input = document.querySelector('input');
let message = document.querySelector('[name="message"]');
let userData = {};


//LISTENERS
window.addEventListener('load', parseDataOnLoad)

myForm.addEventListener('input', throttle(gatherData , 500))

myForm.addEventListener('submit', submitData)

// CALLBACKS
function gatherData (){
    formData.set('email', `${input.value}`)
    formData.set('message',`${message.value}`)
   
    userData.email = formData.get('email');
    userData.message = formData.get('message');

    localStorage.setItem("feedback-form-state", JSON.stringify(userData))
}

function parseDataOnLoad(){
    let savedSettings = localStorage.getItem("feedback-form-state");
    if (savedSettings !== null){
        let parsedSettings = JSON.parse(savedSettings);
        
        input.value = parsedSettings.email;
        message.value = parsedSettings.message;
    }
}

function submitData (){
    event.preventDefault();
    myForm.reset();
}

