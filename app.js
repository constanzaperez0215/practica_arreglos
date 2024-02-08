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

// ejercicio 2.2 for of evitando actualizar el dom innecesariamente

const precios = [1000, 2500, 3100, 4800, 7500]
const lista = document.getElementById("precios")

let template = ""
for (const item of precios){
    template += '<li>' + item + '</li>'
}
lista.innerHTML = template


const datos = [1200, 350, 1500, 1400, 250, 5000, 1950, 1952]
const d = document.getElementById("datos")

let  template2 =""
for (let valor of datos) {
    if (valor > 1000 && valor <2000){
        template2+=`<li>${valor}</li>`
    }
}
d.innerHTML = template2