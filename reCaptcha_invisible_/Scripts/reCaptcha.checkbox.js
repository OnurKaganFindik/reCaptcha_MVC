function onSubmit(token) {
    $("#loginForm").submit();
}

function validate() {
    if (grecaptcha.getResponse() != "") {
        $("#loginForm").submit();
    }
}

document.getElementById('btnLogin').onclick = function () {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
        document.getElementById('isChecked').innerHTML = "Boş Geçilemez";
        return false;
    }
    else {
        return true;
    }
}
