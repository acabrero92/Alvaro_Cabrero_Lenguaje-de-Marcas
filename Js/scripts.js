function calcularPresupuesto() {
    // Obtener el número de camisetas y el precio unitario
    let cantidad = parseInt(document.getElementById('cantidad').value);
    const precioUnitario = 50;

    // Validar que la cantidad sea un número válido
    if (isNaN(cantidad) || cantidad < 1) {
        alert('Por favor, introduzca una cantidad válida.');
        return false;
    }

    // Aplicar descuento del 10% si se compran 3 camisetas o más
    let descuento = 0;
    if (cantidad >= 3) {
        descuento = precioUnitario * cantidad * 0.1;
    }

    // Calcular el total a pagar
    let totalPagar = precioUnitario * cantidad - descuento;

    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = `Total a pagar: ${totalPagar}€`;

    return false; // Evitar que se envíe el formulario y se refresque la página
}
