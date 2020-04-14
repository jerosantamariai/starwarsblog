let form = document.getElementsByClassName("boxsurvey");

function validar (e){
    e.preventDefault();

    if (!validator.isCreditCard (form.Card.value) || validator.isEmpty ( form.Card.value)) { 
        form.Card.focus ();
        form.Card.classList.add("border-danger");
        form.Card.classList.remove("is-valid");
    } else {
        form.Card.classList.remove("border-danger");
        form.Card.classList.add("is-valid");
    }

    if (!!validator.isNumeric (form.CVC.value) || validator.isEmpty ( form.CVC.value)) { 
        form.CVC.focus ();
        form.CVC.classList.add("border-danger");
        form.CVC.classList.remove("is-valid");
    } else {
        form.CVC.classList.remove("border-danger");
        form.CVC.classList.add("is-valid");
    }

    if (!validator.isNumeric (form.Amount.value) || validator.isEmpty (form.Amount.value)) { 
        form.Amount.focus ();
        form.Amount.classList.add("border-danger");
        form.Amount.classList.remove("is-valid");
    } else {
        form.Amount.classList.remove("border-danger");
        form.Amount.classList.add("is-valid");
    }
   
    if (!validator.isAlpha (form.firstName.value) || validator.isEmpty (form.firstName.value)) { 
        form.firstName.focus ();
        form.firstName.classList.add("border-danger");
        form.firstName.classList.remove("is-valid");
    } else {
        form.firstName.classList.remove("border-danger");
        form.firstName.classList.add("is-valid");
    }

    if (!validator.isAlpha (form.lastName.value) || validator.isEmpty (form.lastName.value)) { 
        form.lastName.focus ();
        form.lastName.classList.add("border-danger");
        form.lastName.classList.remove("is-valid");
    } else {
        form.lastName.classList.remove("border-danger");
        form.lastName.classList.add("is-valid");
    }

    if (!validator.isAlpha (form.City.value) || validator.isEmpty (form.City.value)) { 
        form.City.focus ();
        form.City.classList.add("border-danger");
        form.City.classList.remove("is-valid");
    } else {
        form.City.classList.remove("border-danger");
        form.City.classList.add("is-valid");
    }

    if (validator.isEmpty (form.inputState.value)) { 
        form.inputState.focus ();
        form.inputState.classList.add("border-danger");
        form.inputState.classList.remove("is-valid");
    }

    if (!validator.isNumeric (form.postalCode.value) || validator.isEmpty (form.postalCode.value)) { 
        form.postalCode.focus ();
        form.postalCode.classList.add("border-danger");
        form.postalCode.classList.remove("is-valid");
    } else {
        form.postalCode.classList.remove("border-danger");
        form.postalCode.classList.add("is-valid");
    }

    if (validator.isEmpty (form.weAcept.value)) { 
        form.inputState.focus ();
        form.inputState.classList.add("border-danger");
        form.inputState.classList.remove("is-valid");
    }

}

form.addEventListener("submit", validar);