// scripts.js

function calcularPresupuesto() {
    const cantidad = document.getElementById('cantidad').value;
    const precioUnitario = 50;
    let total = cantidad * precioUnitario;

    if (cantidad >= 3) {
        total *= 0.90; // Aplicar un 10% de descuento
    }

    document.getElementById('resultado').innerText = `Total: €${total.toFixed(2)}`;
}
