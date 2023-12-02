function seleccionarEstrella(numeroEstrella) {
            
    var estrellas = document.querySelectorAll('.estrella');

    
    estrellas.forEach(function (estrella, index) {
        if (index < numeroEstrella) {
            estrella.classList.add('seleccionada');
        } else {
            estrella.classList.remove('seleccionada');
        }
    });
}