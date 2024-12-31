//Retrieve each element
const freeTrialForm = document.querySelector('.form');
const firstName = document.querySelector('[name="first-name"]');
const lastName = document.querySelector('[name="last-name"]');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const error = document.querySelectorAll(".error");

//event listener on submit
freeTrialForm.addEventListener("submit", (e) => {
    //prevent default
    e.preventDefault();
    //custom function to check inputs
    validateInputs();
});

//function to validate the form
function validateInputs() {
    //get the values from the inputs and store in a variable
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    
    //check if first name input is empty
    if(firstNameValue === '') {
        //show error
        //add error class
        //function to target input
        setErrorFor(firstName, 'First name cannot be empty');
    } else {
        //show success class
        setSuccessFor(firstName);
    }

    //check if last name input is empty
    if(lastNameValue === '') {
        //show error
        //add error class
        //function to target input
        setErrorFor(lastName, 'Last name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    //check if email input is empty
    if(emailValue === '') {
        setErrorFor(email, 'Email name cannot be empty');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    //check if password input is empty
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }

    //Optional check for password conditions length etc

    //Check if form is successful
    const successInputs = document.querySelectorAll(".form-control.success");
    const totalInputs = document.querySelectorAll("input").length;
    if(successInputs.length === totalInputs) {
        console.log("Form successfully submitted")
        alert("Form successfully submitted ");
        //showSuccessMessage();
    }
}

//function to set error input and message as parameters
function setErrorFor(input, message) {
    //grab the form control div parent of the input
    const formControl = input.parentElement;
    //grab the span inside the  
    const errorSpan = formControl.querySelector("span");

    //add error message inside span
    errorSpan.textContent = message;

    //add error class
    formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

//function to test email using regex
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// Clear placeholder text on focus
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
        if (input.value === input.defaultValue) {
            input.value = "";
        }
    });

    // Restore placeholder text if the input is empty on blur
    input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
            input.value = input.defaultValue;
        }
    });
});



