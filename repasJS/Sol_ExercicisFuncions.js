//Executeu este codi i mireu el que mostra per consola

let dies=["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres","Dissabte","Diumenge"];
function paraCada(array, accio){
    for(let i=0;i<array.length;i++){
        accio(array[i]);
    }
}
paraCada(dies,console.log);

//Modifiqueu-lo per a que faça el mateix utilitzant una funció fletxa (=>)
// COMENTARI: Símplement cambiem la definició de funció, per a adpatar-la a una funció fletxa.
// COMENTARI: El codi de la funció queda exactament igual.
console.log("----------------------------------");
const perACada = (array,accio)=>{
    for(let i=0;i<array.length;i++){ //El buble queda igual
        accio(array[i]);
    }
}
perACada(dies,console.log); //Cridem a la nova funció creada, amb els paràmetres adients

//Modifiqueu el codi per a que faça el mateix utilitzant el mètode forEach()
console.log("----------------------------------");
//COMENTARI: Ara sí, cal canviar el bucle per a que recórrega els elements de l'array amb un forEach
const perACada2 = (array,accio)=>{
array.forEach(unDia => { 
    accio(unDia);
})
};
perACada2(dies,console.log); //Cridem a la nova funció creada, amb els paràmetres adients


// Que cree un altre array on calcule el numero de caracters de cada dia de la setmana
// ex: numCar=[7,7,8,6,9,8,8] 
// i després que mostre el contingut dels dos arrays de la següent manera:
// Dilluns: 7
// Dimarts: 7
// Dimecres: 8
// ...

console.log("----------------------------------");
console.log("\t1a. versió");
//1a VERSIÓ: Amb forEach
let numCaracters = []; //array on afegiré el nombre de caracters de cada dia de la setmana. Els hauré d'anar afegint amb un push()
dies.forEach((unDia)=>{numCaracters.push(unDia.length)})
//Ara en numCaracters tindré un array amb els següents valors: [7,7,8,6,9,8,8] 
// i en dies ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres","Dissabte","Diumenge"]

//Necessite recorrer l'array dies i numCaracters per a mostrar Dilluns: 7, Dimarts: 7, Dimecres: 8 ... tal i com diu l'enunciat
dies.forEach((unDia, index) => {console.log(unDia+": "+numCaracters[index])})

//2a VERSIÓ: Amb una funció map.
console.log("\t2a. versió");
let numCar=dies.map(unDia=>{
    return unDia.length;
});

dies.forEach((unDia,index) => { 
    console.log(unDia+": "+numCar[index]);
});

//Mostra els dies que ténen més de 7 caracters
console.log("----------------------------------");
let mostraDiesMesDe= (unDia,numCaracters) =>{
   //filtre que indica true / false
    return unDia.length>numCaracters;
}

let diesMajorsQue  = dies.filter(unDia => mostraDiesMesDe(unDia,7));
/* Altra versió
let diesMajorsQue = dies.filter(unDia=>{
    return unDia.length>7;
});
*/
diesMajorsQue.forEach(unDia=>{console.log(unDia)});

console.log("----------------------------------");
/* Ara volem fer el mateix, però que ens torne un String amb els dies que ténen més de 7 caracters */

let _mostraDiesMesDe= (unDia,numCaracters,acc) =>{
    if(unDia.length>numCaracters)
     return acc+unDia+", ";
    else
     return acc+"";
 }
let stringAmbDiesMesDe7 = dies.reduce((acc,unDia) =>_mostraDiesMesDe(unDia,7,acc),"");
console.log(stringAmbDiesMesDe7);
let rdo = dies.reduce((acc,unDia)=>(unDia.length>7)?acc+unDia+", ":acc,"");
console.log(rdo);