const departamentos = [
    { departamento: 323, propietario: "Natalia Jiménez", telft: "+56 9 5312 4578"},
    { departamento: 123, propietario: "Luis Fonsi", telft: "+56 9 4612 7894"},
    { departamento: 431, propietario: "David Bisbal", telft: "+56 9 8978 4465"},
    { departamento: 412, propietario: "Noel Schajris", telft: "+56 9 9874 6432"},
    { departamento: 203, propietario: "Ricardo Montaner", telft: "+56 9 8764 6813"},
    ]

    for(let depto of departamentos) {
        const template= `
        <tr>
            <td>${depto.departamento} </td>
            <td>${depto.propietario} </td>
            <td>${depto.telft}</td>
        </tr>
        `;
        const tbody = document.getElementById("tbody")
        tbody.innerHTML += template;
    }
   