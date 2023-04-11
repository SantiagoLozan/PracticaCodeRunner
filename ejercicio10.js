const Array1 = [1,6,9,19]
const Array2 = [1, "hola", false, 6]

Array1.map((item) => {
    console.log(item);
});

Array1.map((item)) => console.log((item));


// sumar solo los elementos pares de un array
let suma = 0
const Array3 = [1,6,9,8]

Array3.map((item) => {
    if (item % 2 == 0){
        suma = suma + item;
    }
});
console.log(suma)
// con filter 
a.filter((item) => item % 2 == 0).map ((item) => {
    suma = suma + item
    console.log(item)
});
console.log(suma);


const Array5 = [10, 8 , 9, 15, 21, 18,19]
let suma1 = 0
Array5.filter((item) => {
    if (item >= 15 && item <= 20 ) {
        suma1 = suma1 + item
        console.log(item)
    }
});
console.log("La suma de los elementos es " + suma1)