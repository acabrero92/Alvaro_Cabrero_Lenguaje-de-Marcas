function calcularPresupuesto() {
        // Obtener valores de los campos
        var cantidad = parseInt(document.getElementById("cantidad").value);
        var precioUnitario = 50; // Precio unitario por camiseta
        var descuento = 0.1; // Descuento del 10% por 3 camisetas o más
    
        // Calcular precio total sin descuento
        var precioTotalSinDescuento = cantidad * precioUnitario;
    
        // Aplicar descuento si corresponde
        var precioFinal = cantidad >= 3 ? precioTotalSinDescuento * (1 - descuento) : precioTotalSinDescuento;
    
        // Mostrar resultado
        document.getElementById("resultado").innerHTML = `Total a pagar: ${precioFinal.toFixed(2)}€`;
    
        // Evitar que el formulario se envíe
        return false;
    }
    