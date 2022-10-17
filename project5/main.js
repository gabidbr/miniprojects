function firstNameValidation(firstName) {
    let length = firstName.val().length;
    if(length===0){
        alert("Name should not be empty!");
        firstName.focus();
        return false;
    }
    return true;
}

function emailValidation(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.val().match(mailformat))
    {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function passwordValidation(password) {
    let pass_length = password.val().length;
    if (pass_length === 0 ||pass_length >= 20 || pass_length < 8)
    {
        alert("Password should not be empty / length be between "+8+" to "+20);
        password.focus();
        return false;
    }
    if(password.val().charAt(0).toUpperCase()!== password.val().charAt(0)){
        alert("First character of password should be uppercase");
        password.focus();
        return false;
    }
    return true;
}

function retypePasswordValidation(password, retypePassword) {
    let pass_length = password.val().length;
    if (pass_length === 0 ||pass_length >= 20 || pass_length < 8)
    {
        alert("Password should not be empty / length be between "+8+" to "+20);
        password.focus();
        return false;
    }
    if(password.val().charAt(0).toUpperCase()!== password.val().charAt(0)){
        alert("First character of password should be uppercase");
        password.focus();
        return false;
    }
    if(password.val() !== retypePassword.val()){
        alert("Password should be identical");
        password.focus();
        return false;
    }
    return true;
}


$(document).ready(function (){
    $("#register").click(function (){
        let firstName = $("#firstName");
        let lastName = $("#lastName").val();
        let email = $("#email");
        let password = $("#password");
        let retypePassword = $("#retype-password");
        let phoneNumber = $("#phone").val();
        if(firstNameValidation(firstName)){
            if(emailValidation(email)){
                if(passwordValidation(password)){
                    if(retypePasswordValidation(retypePassword,password)){
                        alert("Student registered!");
                    }
                }
            }
        }
    })
})