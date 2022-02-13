function onSubmit(token) {
    $("#registerForm").submit();
}

function validate() {
    if (grecaptcha.getResponse() != "") {
        $("#registerForm").submit();
    }
}