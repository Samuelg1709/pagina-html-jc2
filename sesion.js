document.addEventListener("DOMContentLoaded", function () {
    var userContainer = document.getElementById("userContainer");
    var usernameDisplay = document.getElementById("usernameDisplay");
    var logoutButton = document.getElementById("logoutButton");
    var loginLink = document.getElementById("loginLink");

    
    var storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
        var userData = JSON.parse(storedUserData);

        
        usernameDisplay.textContent = userData.username;  
        
        userContainer.style.display = "block";
        loginLink.style.display = "none";
    }

    logoutButton.addEventListener("click", function () {
      
        localStorage.removeItem("userData");
        window.location.href = "./login.html";
    });
});
