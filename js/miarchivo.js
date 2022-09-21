const productos = [
    {nombre: "Among Us", precio: 68},
    {nombre: "PAYDAY 2", precio: 150},
    {nombre: "Fallout 4", precio: 800},
    {nombre: "Grand Theft Auto V", precio: 314},
    {nombre: "Dead by Daylight", precio: 1000},
];

let carrito = []

let nombreIngresado = (prompt("Ingrese su nombre"))

alert("¡Bienvenido a Nixo Games " + nombreIngresado + "!")

let seleccion = prompt("¿Desea comprar alguno de nuestros juegos? (responda si o no)")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese un valor valido (si o no)")
    seleccion = prompt("¿Va a proceder a comprar algo? (si o no)")
}

if(seleccion == "si"){
    alert("A continuacion se muestra nuestro catalogo de juegos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + " ARS$");

    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("¡Gracias por visitar Nixo Games, vuelva pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agregue los juegos que quiera a su carrito (uno por apartado)")
    let precio = 0

    if(producto == "Among Us" || producto == "PAYDAY 2" || producto == "Fallout 4" || producto == "Grand Theft Auto V" || producto == "Dead by Daylight"){
        switch(producto) {
            case "Among Us":
                precio = 68;
                break;
            case "PAYDAY 2":
                precio = 150;
                break;
            case "Fallout 4":
                precio = 800;
                break;
            case "Grand Theft Auto V":
                precio = 314;
                break;
            case "Dead by Daylight":
                precio = 1000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese juego en estos momentos, o no esta a la venta")
    }

    seleccion = prompt("¿Desea continuar comprando?")

    while(seleccion === "no"){
        alert("¡Muchas gracias por su compra, vuelva pronto y disfrutelo/s!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su/s compra/s es de: ${total}`)



/*
let nombreIngresado = (prompt("Ingrese su nombre"))


alert("Bienvenido a Nixo Games " + nombreIngresado)

const juegos = [ {
    id: 1,
    nombre: "Among Us",
    precio: "ARS$ 67,99",
    desarrollador: "Innersloth",
    etiquetas: ["Multijugador", "Cooperativos en línea", "Espacios"],
},{
    id: 2,
    nombre: "PAYDAY 2",
    precio: "ARS$ 149,99",
    desarrollador: "OVERKILL-a Starbreeze Studio",
    etiquetas: ["Cooperativos", "Acción", "Robos"],
},{
    id: 3,
    nombre: "Fallout 4",
    precio: "ARS$ 799,00",
    desarrollador: "Bethesda Game Studios",
    etiquetas: ["Mundo abierto", "Posapocalípticos", "Exploración"],
},{
    id: 4,
    nombre: "Mafia: Edición Definitiva",
    precio: "ARS$ 2.559,00",
    desarrollador: "Hangar 13",
    etiquetas: ["Acción", "Mundo abierto", "Crímenes"],
},{
    id: 5,
    nombre: "Grand Theft Auto V",
    precio: "ARS$ 314,00",
    desarrollador: "Rockstar North",
    etiquetas: ["Mundo abierto", "Acción", "Multijugador"],
},{
    id: 6,
    nombre: "Dead by Daylight",
    precio: "ARS$ 999,00",
    desarrollador: "Behaviour Interactive Inc.",
    etiquetas: ["Terror", "Supervivencia terrorifica", "Multijugador"],
} ]

console.log(juegos)

alert("En la consola puede visualizar los juegos que estan disponibles para su compra")

if(confirm("Una vez visualizado los juegos, desea comprar alguno?")){

} else {
    let juegoNuevo = (prompt("Si el juego que busca no se encuentra aqui, escriba su nombre a continuación"))
    juegos.push(juegoNuevo);
    alert("Muchas gracias, tendremos en cuenta añadir este juego para un futuro")
}

let juegoIngresado = (prompt ("Ingrese cual fue el precio final de su compra"))

function solicitarNumero() {
    alert("El juego ingresado es " + juegoIngresado)
}

solicitarNumero();

alert ("Si el precio del juego seleccionado supera los 500$, obtendra un descuento del 10% en su proxima compra")

if (juegoIngresado >= 500) {
    alert("El juego seleccionado supera los 500$ por lo tanto recibiste un cupon del 10% de descuento para tu proxima compra");
} else {
    alert("El juego seleccionado no supera los 500$")
}

if (juegoIngresado <= 67) {
    alert("Ingrese un precio valido, reintentelo")
}

alert("Muchas gracias por comprar en Nixo Games, esperamos volver a verlo/a pronto")
*/