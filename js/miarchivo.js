
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
