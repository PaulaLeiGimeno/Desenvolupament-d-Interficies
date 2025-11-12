/*
El mètode .filter() s’utilitza per a seleccionar elements d’un array 
que complisquen una condició. 

array.filter((element, index, array) => condició); 

El que tornes amb return ha de ser true o false. 
Només els elements amb true es quedaran en el nou array.
*/

//Exemple 1

const numerosF = [2, 7, 4, 10];
const parells = numerosF.filter(num => num % 2 == 0);
const imparells = numerosF.filter(num => num % 2 != 0)
console.log("Els números parells d'aquest array son ", parells); //[ 2, 4, 10 ]
console.log("Els números imparells d'aquest array son ", imparells); // [ 7 ]


//Exercici 1: . Utilitza.filter() per trobar les paraules més llargues de 3 lletres en ["sol", "pluja", "mar"]. 

const paraules = ["sol", "pluja", "mar"];
const paraules2 = paraules.filter(paraula => paraula.length > 3)
console.log(paraules2) //[ 'pluja' ]

/*
El mètode .reduce() s’utilitza per a reduir tot un array a un sol 
valor (per exemple sumar, multiplicar o concatenar). 

array.reduce((acumulador, element, index, array) => novaCosa, valorInicial);

    • acumulador → el valor que es va acumulant a cada pas. 
    • element → l’element actual de l’array que s’està processant. 
    • index (opcional) → la posició (0, 1, 2...) de l’element. 
    • array (opcional) → l’array complet. 
    • valorInicial (opcional, però recomanat) → el valor inicial de l’accumulador. 

*/

//Exemple 2

const numerosR = [1, 2, 3, 4];
const suma = numerosR.reduce((acc, num) => acc + num, 0);
console.log(suma); // 10 


//Exercici 1: Utilitza.reduce() per multiplicar tots els números de [2, 3, 4].

const nums = [2, 3, 4];
const nums2 = nums.reduce((a, nums) => a * nums, 1); //2*3*4
console.log(nums2) //24

//Exercici 2:  Utilitza.reduce() per concatenar ['Hola', 'món']. 

const holaMon = ['Hola', ' ', 'món'];
const holaMon2 = holaMon.reduce((text, paraula) => text + paraula, " ");
console.log(holaMon2); //Hola món




