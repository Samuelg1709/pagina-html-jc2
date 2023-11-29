const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

if ($submit && $password && $username && $visible) {
    
    $visible.addEventListener("change", function() {
        $password.type = $visible.checked ? "text" : "password";
    });

    document.addEventListener("submit", function(e) {
 
        if ($visible.checked) {
      
            $password.type = "text";
        }
        
    });
} else {
    console.error("Alguno de los elementos no existe en el documento.");
}
document.addEventListener("click", (e)=> {
if(e.target === $submit){
    if($password.value !== "" && $username.value !== "" ){
        e.preventDefault();
        window.location.href = "cerrar.html";

    }
}
})
