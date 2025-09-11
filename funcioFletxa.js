//FUNCIÓ FLETXA =>  

function suma(num) {
    return num + 1;
}
//una sola linea
const suma2 = (num) => num + 1;


const array = [1, 2, 3, 4]; //const perque no vaig a cambiar-lo


let array2 = [];

for (let i = 0; i < array.length; i++) {
    array2[i] = suma(array);
}

console.log(array2);

//més d'una linea
const maxfunct = (a, b, c) => {
    Math.max(a, b, c)
    return Math.max(a, b, c)
};

console.log("El màxim és", maxfunct(1,2,3));

//sense paràmetres
const saluda=()=>console.log("Benvinguts a  l'internet");
saluda();