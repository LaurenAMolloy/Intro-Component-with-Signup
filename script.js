//Retrive the form
const freeTrialForm = document.querySelector('[name="freeTrial"]');
//Retrieve the Inputs
const inputs = [
    { id: "first-name", errorId: "firstNameError" },
    { id: "last-name", errorId: "lastNameError" },
    { id: "email", errorId: "emailError" },
    { id: "password", errorId: "passwordError" },
];

//function to show errors
function showError(field, error, errorIcon) {
    //show error message
    error.classList.remove("hidden");
    //add red border to input
    field.classList.add("error-input");
    //show error icon
    errorIcon.classList.remove("hidden");
}

//function to hide errors
function hideError(field, error, errorIcon) {
    //hide error message
    error.classList.add("hidden");
    //remove red border from input
    field.classList.remove("error-input");
    //hide error icon
    errorIcon.classList.add("hidden");
}

//email errors Looks like this is not an email


// Event listener on the form
freeTrialForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading
    //console.log(e);
    let isValid = true; // Track form validity

    // Loop over the form elements
    inputs.forEach(({ id, errorId }) => {
        const field = document.getElementById(id);
        const error = document.getElementById(errorId);
        const inputBox = field.parentElement;
        const errorIcon = inputBox.querySelector("img");

        // Special handling for email validation 
        if (id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailErrorMessage = document.querySelector(".invalidEmailMessage")

            // Check if email is empty
            if (field.value.trim() === "") {
                showError(field, emptyError, errorIcon);
                emailErrorMessage.textContent="This field is required"
                isValid = false;
            }
            // Check if email format is invalid
            else if (!emailRegex.test(field.value.trim())) {
                showError(field, invalidEmailError, errorIcon);
                emailErrorMessage.textContent="Looks like this is not an email"
                field.value ="@example.com";
                field.style.color = "hsl(0, 100%, 74%)";
                isValid = false;
            }
            // Valid email
            else {
                hideError(field, emptyError, errorIcon);
                emailErrorMessage.textContent = "";
                field.style.color = ""; // Reset text color
               
            }
        } else {
            // Check if field is empty or uses the default placeholder
            if (field.value.trim() === "" || field.value === field.defaultValue) {
                showError(field, error, errorIcon);
                field.value = "";
                isValid = false;
            } else {
                hideError(field, error, errorIcon);
            }
        }
    });

    // If form is valid, display a success message
    if (isValid) {
        alert("Form successfully submitted!");
        // Clear user-entered values only
        document.querySelectorAll("input").forEach((input) => {
            if (input.value !== input.defaultValue) {
                input.value = "";
            }
        });
    }
});

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



   
