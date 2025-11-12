//Tens un array de números [5, 10, 15]. Fes que amb .map() es dividisquen entre 5. 

let arrayDeNumeros = [5, 10, 15];
console.log(arrayDeNumeros.map((elm) => elm / 5));//[1,2,3]

console.log("--------------------------")

//Tens un array de noms ["Anna", "Joan", "Maria"]. Afig un signe d’exclamació al final de cada nom.

let arrayDeNoms = ["Anna", "Joan", "Maria"];
console.log(arrayDeNoms.map((elm) => elm + "!"))//["Anna!", "Joan!", "Maria!"]

console.log("--------------------------")

//Tens un array [2, 4, 6, 8]. Eleva cada número al quadrat amb .map(). 

let arrayNums = [2, 4, 6, 8]
console.log(arrayNums.map((elm) => Math.pow(elm, 2))) //[4, 16, 36, 64]

console.log("--------------------------")

//Utilitza .filter() per quedar-te només amb els nombres parells de l’array [1, 2, 3, 4, 5, 6]. 

let arrayParells = [1, 2, 3, 4, 5, 6];
console.log(arrayParells.filter((elm) => elm % 2 == 0))//[2, 4, 6] 

console.log("--------------------------")

//Utiliza filter() per trobar les paraules més llargues de 3 lletres en  ["sol", "pluja", "mar"].

let arrayMesLLarg = ["sol", "pluja", "mar"];
console.log(arrayMesLLarg.filter((elm) => elm.length > 3))//['pluja']

console.log("--------------------------")

// Utilitza.reduce() per multiplicar tots els números de [2, 3, 4].

let arrayMult = [2, 3, 4];
console.log(arrayMult.reduce((acc, elm) => acc = elm * acc),)//24

console.log("--------------------------")

//Utilitza.reduce() per concatenar ['Hola', 'món'].

let holaMon = ['Hola', 'món'];
console.log(holaMon.reduce((acc, elm) => acc + elm + " "), " ")//'Holamón' 

console.log("--------------------------")

//Mostra cada número multiplicat per 3 de [2, 4, 6].

let multPerTres=[2,4,6];
multPerTres.forEach((elm)=>console.log(elm*3));

console.log("--------------------------")

//Mostra en pantalla "Hola, NOM" per a cada nom de ["Anna", "Joan", "Maria"]. 

let noms=["Anna", "Joan", "Maria"];
noms.forEach((elm)=> console.log("Hola, ", elm))

console.log("--------------------------")

// Calcula la suma dels números [5, 10, 15] amb .forEach().

let multCinc=[5, 10, 15];
multCinc.forEach((elm)=>{
    let acc=0;
    acc=acc+elm
    console.log(acc)
})

console.log("--------------------------")