function onSubmit(token) {
    $("#loginForm").submit();
}

function validate() {
    if (grecaptcha.getResponse() != "") {
        $("#loginForm").submit();
    }
}