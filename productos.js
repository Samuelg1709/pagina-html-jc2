function agregarAlCarrito(idProducto) {
    // Recuperar el carrito de localStorage o crear uno nuevo si no existe
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    // Aumentar la cantidad del producto en el carrito
    carrito[idProducto] = (carrito[idProducto] || 0) + 1;

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto añadido al carrito: ' + idProducto);
}