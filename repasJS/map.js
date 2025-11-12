<<<<<<< HEAD
/*
El mètode .map() és un mètode dels arrays en JavaScript que serveix per a crear un nou 
array transformant cada element de l’array original.

map() NO CANVIA l’array original y sempre retorna un nou array amb la transformació que li hages indicat.

array.map((element, index, array) => {Ací poses què vols fer amb cada element }); 

    • element → el valor actual que s’està recorrent de l’array. 
    • index (opcional) → la posició del valor dins de l’array (0, 1, 2...). 
    • array (opcional) → l’array complet que s’està recorrent.
*/


//Exemple 1: Multiplicar números



const numeros = [1, 2, 3, 4];
const resultat = numeros.map(num => num * 2);

console.log(resultat); // [2, 4, 6, 8]

//Exemple 2: Posar majúscules 

const paraules = ["gat", "gos", "peix"];
const majuscules = paraules.map(paraula => paraula.toUpperCase());
console.log(majuscules); // ["GAT", "GOS", "PEIX"] 


//Exercici 1: Tens un array de números [5, 10, 15]. Fes que amb .map() es dividisquen entre 5. 

const numerets = [5, 10, 15];
const dividits = numerets.map(numeret => numeret / 5);
console.log(dividits);

//Ejercici 2: Tens un array de noms ["Anna", "Joan", "Maria"]. Afig un signe d’exclamació al final de cada nom.

const noms = ["Anna", "Joan", "Maria"];
const noms2 = noms.map(nom => nom + "!");
console.log(noms2);

//Ejercici 3: Tens un array [2, 4, 6, 8]. Eleva cada número al quadrat amb .map(). 

const quadrat = [2, 4, 6, 8];
const quadrat2 = quadrat.map(numer => Math.pow(numer, 2));
console.log(quadrat2);

=======
/*
El mètode .map() és un mètode dels arrays en JavaScript que serveix per a crear un nou 
array transformant cada element de l’array original.

map() NO CANVIA l’array original y sempre retorna un nou array amb la transformació que li hages indicat.

array.map((element, index, array) => {Ací poses què vols fer amb cada element }); 

    • element → el valor actual que s’està recorrent de l’array. 
    • index (opcional) → la posició del valor dins de l’array (0, 1, 2...). 
    • array (opcional) → l’array complet que s’està recorrent.
*/


//Exemple 1: Multiplicar números



const numeros = [1, 2, 3, 4];
const resultat = numeros.map(num => num * 2);

console.log(resultat); // [2, 4, 6, 8]

//Exemple 2: Posar majúscules 

const paraules = ["gat", "gos", "peix"];
const majuscules = paraules.map(paraula => paraula.toUpperCase());
console.log(majuscules); // ["GAT", "GOS", "PEIX"] 


//Exercici 1: Tens un array de números [5, 10, 15]. Fes que amb .map() es dividisquen entre 5. 

const numerets = [5, 10, 15];
const dividits = numerets.map(numeret => numeret / 5);
console.log(dividits);

//Ejercici 2: Tens un array de noms ["Anna", "Joan", "Maria"]. Afig un signe d’exclamació al final de cada nom.

const noms = ["Anna", "Joan", "Maria"];
const noms2 = noms.map(nom => nom + "!");
console.log(noms2);

//Ejercici 3: Tens un array [2, 4, 6, 8]. Eleva cada número al quadrat amb .map(). 

const quadrat = [2, 4, 6, 8];
const quadrat2 = quadrat.map(numer => Math.pow(numer, 2));
console.log(quadrat2);

>>>>>>> 48c93373e7b2e87ef59df5551927a999f5a32e24
