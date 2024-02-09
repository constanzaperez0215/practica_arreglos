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
        d.style.backgroundColor = "green"
    }else{
        d.style.backgroundColorcolor ="red"
    }
}
d.innerHTML = template2


const estudiantes = [
    ["Francisca", 10, 8, 10],
    ["Camila", 9, 9, 10, 9],
    ["Patricio", 7, 9, 9, 6, 10, 10],
    ["Pedro", 8, 8, 10]
    ];
    let html = ""
    for (let estudiante of estudiantes) {
    html += `<p>`
    for (let nota of estudiante){
    html += ` ${nota} `
    }
    html += `</p>`
    }
    const body = document.querySelector("body")
    body.innerHTML = html


    //  Arrego de objetos

    const guitarra = {
        cuerdas: 6,
        color: "azul",
        año: 1994
    }

    const computador = {
        marca: "asus",
        ram : "16GB",
        so: "Windows",
        tipo: "gamer"
    }

    const casa = {
        habitaciones: 4,
        baños : 2,
        patio: 1,
        garage: 1,
        direccion: "calle San Diego 8081"
    }

    console.log(computador["marca"])
    console.log(casa.direccion)

    // accediendo a los datos de un objeto

    const persona = {
        nombre: "Pedro",
        apellido: "Perez",
        profesion: "Frontend Developer",
        hobby: "Trekking",
        añoDeNacimiento: 1988,
        }

        console.log(persona["añoDeNacimiento"])
        console.log(persona.apellido)
        