function seleccionarEstrella(numeroEstrella) {
    var estrellas = document.querySelectorAll('.estrella');

    estrellas.forEach(function (estrella, index) {
        if (index < numeroEstrella) {
            estrella.classList.add('seleccionada');
        } else {
            estrella.classList.remove('seleccionada');
        }
    });

    
    localStorage.setItem('numeroEstrellas', numeroEstrella);
}


document.addEventListener('DOMContentLoaded', function () {
    const numeroEstrellas = localStorage.getItem('numeroEstrellas');
    if (numeroEstrellas) {
        seleccionarEstrella(parseInt(numeroEstrellas));
    }
});

function enviarResena() {
    const resena = document.getElementById('resenaTextarea').value;
    const numeroEstrellas = localStorage.getItem('numeroEstrellas');
    
    
    alert('Reseña enviada con éxito.\nNúmero de estrellas: ' + numeroEstrellas + '\nReseña: ' + resena);
}
