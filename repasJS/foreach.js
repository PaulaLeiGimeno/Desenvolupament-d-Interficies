<<<<<<< HEAD
/*
El mètode .forEach() s’utilitza per recórrer cada element d’un array i executar una funció amb 
cadascun. 
A diferència de .map(), no retorna un nou array, simplement fa una acció per a cada element.

array.forEach((element, index, array) => { Què fer amb cada element });

    • forEach() → recorre cada element d’un array. 
    • No retorna res, només executa codi. 
    • És útil per mostrar dades, fer càlculs o executar accions.
*/


//Exemple 1:  Mostrar elements.



const fruits = ["poma", "pera", "plàtan"];
fruits.forEach((fruit, index) => { console.log(index, fruit) });

//0 poma
//1 pera
//2 plàtan

//Exemple 2: Sumar valors 

const numeros = [1, 2, 3, 4];
let suma = 0;
numeros.forEach(num => { suma = suma + num });
console.log(suma); // 10 

//Exercici 1
const numero = [2, 4, 6];
numero.forEach(numi => console.log(numi * 3));


//Exercici 2
const hola = ["Anna", "Joan", "Maria"];
hola.forEach(nom => console.log("Hola", nom));

//Hola Anna
//Hola Joan
//Hola Maria



=======
/*
El mètode .forEach() s’utilitza per recórrer cada element d’un array i executar una funció amb 
cadascun. 
A diferència de .map(), no retorna un nou array, simplement fa una acció per a cada element.

array.forEach((element, index, array) => { Què fer amb cada element });

    • forEach() → recorre cada element d’un array. 
    • No retorna res, només executa codi. 
    • És útil per mostrar dades, fer càlculs o executar accions.
*/


//Exemple 1:  Mostrar elements.



const fruits = ["poma", "pera", "plàtan"];
fruits.forEach((fruit, index) => { console.log(index, fruit) });

//0 poma
//1 pera
//2 plàtan

//Exemple 2: Sumar valors 

const numeros = [1, 2, 3, 4];
let suma = 0;
numeros.forEach(num => { suma = suma + num });
console.log(suma); // 10 

//Exercici 1
const numero = [2, 4, 6];
numero.forEach(numi => console.log(numi * 3));


//Exercici 2
const hola = ["Anna", "Joan", "Maria"];
hola.forEach(nom => console.log("Hola", nom));

//Hola Anna
//Hola Joan
//Hola Maria



>>>>>>> 48c93373e7b2e87ef59df5551927a999f5a32e24
