document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const registerButton = document.getElementById("registerButton");
    const visibleCheckbox = document.getElementById("visible");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    visibleCheckbox.addEventListener("change", function() {
        // Cambiar el tipo de entrada del campo de contraseña entre "password" y "text"
        passwordInput.type = visibleCheckbox.checked ? "text" : "password";
        confirmPasswordInput.type = visibleCheckbox.checked ? "text" : "password";
    });

    registerButton.addEventListener("click", function() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;

        
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            gender: gender
        };

       
        localStorage.setItem("userData", JSON.stringify(userData));

       
        console.log("Datos del usuario registrados:", userData);

        
        window.location.href = "login.html";
    });
});
