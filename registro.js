document.addEventListener("DOMContentLoaded", function () {
   
    var form = document.getElementById("registrationForm");
    var registerButton = document.getElementById("registerButton");
    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("confirmPassword");
    var showPasswordCheckbox = document.getElementById("visible");

   

    registerButton.addEventListener("click", function () {
        var loginPage = "login.html"; 
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var password = passwordField.value;
        var confirmPassword = confirmPasswordField.value;
        var gender = document.querySelector('input[name="gender"]:checked').value;

        if (password !== confirmPassword) {
            
            return;
        }

        var userData = {
            username: firstName,
            lastname: lastName,
            email: email,
            password: password,
            gender: gender
        };

        localStorage.setItem("userData", JSON.stringify(userData));

     
        alert("Registro exitoso");


        window.location.href = "login.html";
    });

    
    showPasswordCheckbox.addEventListener("change", function () {
     
        passwordField.type = showPasswordCheckbox.checked ? "text" : "password";
        confirmPasswordField.type = showPasswordCheckbox.checked ? "text" : "password";
    });
});
