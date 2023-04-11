let suma = 0
let acumulador = 0
let acumuladorF = 0
const datos = [
    {
        nombre: "Santi",
        sexo: "Masculino",
        edad: 25,
    },
    {
        nombre: "Maria",
        sexo: "Femenino",
        edad: 22,
    },
    {
        nombre: "Marta",
        sexo: "Femenino",
        edad: 27,
    },
];

datos.map((item) => {
        suma = suma + item.edad
    }
);

const promedioEdad = acumulador / datos.length;
console.log("El promedio de edad es : " + promedioEdad)

datos.map((item) => {
    if(item.sexo == "Femenino")
    suma = suma + item.edad
}
);
let promedioEdadM = acumuladorF / datos.filter((item) => item.sexo == "Femenino").length;
console.log("Elpromedio de mujeres es " + promedioEdadM);