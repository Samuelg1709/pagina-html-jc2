function agregarAlCarrito(idProducto) {
    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    // Aumentar la cantidad del producto en el carrito
    carrito[idProducto] = (carrito[idProducto] || 0) + 1;

    
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert('Producto añadido al carrito: ' + idProducto);
}