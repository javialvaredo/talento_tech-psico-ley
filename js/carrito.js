document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    console.log( "boton agregar: ", botonesAgregar);

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Obtener datos de los servicios
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            console.log(nombre);
            console.log(precio);

            // Obtener el carrito actual del localstore
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log("carrito: ", carrito);
            
            // Agregar servicios al carrito
            carrito.push({nombre, precio});

            // Guardar el carrito actualizando el localstore 
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} agregado al carrito.`);


        })
    })

})