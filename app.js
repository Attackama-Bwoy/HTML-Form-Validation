//Hide Alert
window.onload = function Hide (){document.getElementById("error").style.display="none";};

//Form Elements
const form = document.getElementById("form");
const cardnumber = document.getElementById("cardnumber");
const cvc = document.getElementById("cvc");
const amount = document.getElementById('amount');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postalcode = document.getElementById('postalcode');
const message = document.getElementById('message');

//Red Background Color
function redBG(elem){
    elem.style.backgroundColor ="#f8d7da";
}

//Green Background Color
function greenBG(elem){
    elem.style.backgroundColor ="#64EE9E";
}

//Event Listener
form.addEventListener("submit", function (e){

    let messages = []

    //Card number
    if (cardnumber.value === "" || cardnumber.value == null) {
        redBG(document.querySelector("#cardnumber"));
        messages.push("enter cardnumber");
        document.getElementById("error").style.display="block";
    }   else if (cardnumber.value !== '' || cardnumber.value !== null) {
        greenBG(document.querySelector("#cardnumber"));
    }

    //CVC
    if (cvc.value === "" || cvc.value == null) {
        redBG(document.querySelector("#cvc"));
        messages.push("enter cvc");
        document.getElementById("error").style.display="block";
    }   else if (cvc.value !== '' || cvc.value !== null) {
        greenBG(document.querySelector("#cvc"));
    }

    //Amount
    if (amount.value === "" || amount.value == null) {
        redBG(document.querySelector("#amount"));
        messages.push("enter amount");
        document.getElementById("error").style.display="block";
    }   else if (cvc.value !== '' || cvc.value !== null) {
        greenBG(document.querySelector("#amount"));
    }

    //Firstname
    if (firstname.value === "" || firstname.value == null) {
        redBG(document.querySelector("#firstname"));
        messages.push("enter firstname");
        document.getElementById("error").style.display="block";
    }   else if (firstname.value !== '' || firstname.value !== null) {
        greenBG(document.querySelector("#firstname"));
    }

    //Lastname
    if (lastname.value === "" || lastname.value == null) {
        redBG(document.querySelector("#lastname"));
        messages.push("enter lastname");
        document.getElementById("error").style.display="block";
    }   else if (lastname.value !== '' || lastname.value !== null) {
        greenBG(document.querySelector("#lastname"));
    }

    //City
    if (city.value === "" || city.value == null) {
        redBG(document.querySelector("#city"));
        messages.push("enter city");
        document.getElementById("error").style.display="block";
    }   else if (city.value !== '' || city.value !== null) {
        greenBG(document.querySelector("#city"));
    }
    
    //State
    if (state.value === "Pick a State") {
        redBG(document.querySelector("#state"));
        messages.push("enter state");
        document.getElementById("error").style.display="block";
    }   else if (state.value !== 'Pick a State') {
        greenBG(document.querySelector("#state"));
    }

    //Postalcode
    if (postalcode.value === "" || postalcode.value == null) {
        redBG(document.querySelector("#postalcode"));
        messages.push("enter postalcode");
        document.getElementById("error").style.display="block";
    }   else if (postalcode.value !== '' || postalcode.value !== null) {
        greenBG(document.querySelector("#postalcode"));
    }

    //Message
    if (message.value === "" || message.value == null) {
        redBG(document.querySelector("#message"));
        messages.push("enter message");
        document.getElementById("error").style.display="block";
    }   else if (message.value !== '' || message.value !== null) {
        greenBG(document.querySelector("#message"));
    }

    //Prevent Default
    if (messages.length > 0) {
        e.preventDefault();
    }
});

