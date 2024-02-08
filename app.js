let nombres = [
    "Juan",
    "Luisa",
    "Fabian",
    "Jorge",
    "Elon",
    "Steve",
    "Bill",
    "Estefany"
    ]

    console.log(nombres.length)

console.log(nombres[5])

const indice = nombres.length-1
console.log(nombres[indice])

// for of

const data = ['Javiera', 'Camila', 'Francisco', 'Jorge', 'Daniela']
const add = document.getElementById("nombres")

for (const item of data) {
    add.innerHTML+= '<li>' + item + '</li>'
}