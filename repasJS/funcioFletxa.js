
/*
--------------
 FUNCIÓ FLETXA
---------------

const nomFuncio=(parametres)=>console.log("Ací va el què vols fer");
const funcioVariesLinies=(parametres)=> {
    let info='Ací va el què vols fer';
    return info;
};

*/



const array = [1, 2, 3, 4]; 
let array2 = [];

//sense funció fletxa
function suma(num) {
    return num + 1;
}
for (let i = 0; i < array.length; i++) {
    array2[i] = suma(array[i]);
}

//una sola linea
const suma2 = (num) => num + 1;

console.log(array2);

//més d'una linea
const maxfunct = (a, b, c) => {
    Math.max(a, b, c)
    return Math.max(a, b, c)
};

console.log("El màxim és", maxfunct(1,2,3));

//sense paràmetres
const saluda=()=>console.log("Hola");
saluda();
