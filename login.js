document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById("loginForm");
    var usernameField = document.getElementById("username");
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("visible");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

       
        var storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            var userData = JSON.parse(storedUserData);

            
            if (usernameField.username === userData.mail && passwordField.value === userData.password) {
                alert("Inicio de sesión exitoso");
                window.location.href = "./sesion.html";
            } else {
                alert("Credenciales incorrectas");
            }
        } else {
            alert("No hay usuario registrado. Regístrate primero.");
        }
    });

    showPasswordCheckbox.addEventListener("change", function () {
        
        passwordField.type = showPasswordCheckbox.checked ? "text" : "password";
    });
});
