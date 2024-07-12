function calcularPresupuesto() {
    const cantidad = document.getElementById('cantidad').value;
    const precioUnitario = 50;
    let total = cantidad * precioUnitario;

    if (cantidad >= 3) {
        total *= 0.9; // Aplicar 10% de descuento
    }

    document.getElementById('resultado').textContent = `El precio total es: ${total.toFixed(2)}€`;
    return false; // Evitar que el formulario se envíe
}
