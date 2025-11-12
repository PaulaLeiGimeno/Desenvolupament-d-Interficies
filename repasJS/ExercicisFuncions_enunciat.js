//Executeu este codi i mireu el que mostra per consola
let dies = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];
function paraCada(array, accio) {
    for (let i = 0; i < array.length; i++) {
        accio(array[i]);
    }
}

paraCada(dies, console.log);
//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()
console.log("----------------------------------");

dies.forEach((elm) => console.log(elm))

// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...
console.log("----------------------------------");


//Mostra els dies que ténen més de 7 caracters 
console.log("----------------------------------");

console.log(dies.filter((element) => element.length > 7));

/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */
console.log("----------------------------------");

const diesReduce = dies.reduce((acc, elm) => {
    if (elm.length > 7) {
        return acc + elm + " ";
    }
    return acc
}, " ")
console.log(diesReduce)