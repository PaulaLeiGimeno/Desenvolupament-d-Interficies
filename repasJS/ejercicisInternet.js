const dadesUsuaris = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "010-692-6593 x09125",
        website: "",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(254)954-1289",
        website: "",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
        }
    }
]

//Crea una funció llistatNomCiutat() que retorne un array d’objectes amb el nom de l’usuari i la ciutat on viu.

const llistatNomCiutat = dadesUsuaris.reduce((acc, elm) => {
    let obj = {
        'nom': elm.name,
        'ciutat': elm.address.city,
    }
    acc.push(obj)
    return acc

}, [])
console.log(llistatNomCiutat)
console.log("------------------------------")

//Crea una funció usuarisZip(zip) que retorne tots els usuaris que tenen el zipcode igual al paràmetre zip.

const usuarisZip = (zip) => dadesUsuaris.filter((elm) => elm.address.zipcode == zip);

console.log(usuarisZip("33263"))

console.log("------------------------------")

//Crea una funció llistatEmpreses() que retorne un array amb els noms de totes les empreses.

const llistatEmpreses = dadesUsuaris.map((elm) => elm.company.name)

console.log(llistatEmpreses);

console.log("------------------------------")

//Crea una funció comptaSenseWebsite() que retorne quants usuaris no tenen website.

const comptaSenseWebsite=dadesUsuaris.filter((elm)=>elm.website=="").length
console.log(comptaSenseWebsite)
console.log("------------------------------")

//Crea una funció llistatEmpresesAmbFrase() que retorne un array d’objectes amb: name de l’usuari, companyName, catchPhrase
const llistatEmpresesAmbFrase = dadesUsuaris.map((elm) => {
    let obj = {
        'nom': elm.name,
        'companyia': elm.company.name,
        'catchphase': elm.company.catchPhrase
    }
    return obj;

})
console.log(llistatEmpresesAmbFrase)
console.log("------------------------------")

//Crea una funció usuarisLatNegativa() que retorne un array d’usuaris que tenen geo.lat menor que 0.

const usuarisLatNegativa = dadesUsuaris.filter((elm) => elm.address.geo.lat < 0)
console.log(usuarisLatNegativa)

console.log("------------------------------")

//Crea una funció cadenaNoms() que retorne un sol string amb tots els noms d’usuaris separats per , .

const cadenaNoms = dadesUsuaris.reduce((acc, elm) => {
    acc = acc + elm.name + ", "
    return acc;
}, "")
console.log(cadenaNoms)

console.log("------------------------------")

//!!!Crea una funció emailMesLlarg() que trobe quin usuari té l’email més llarg i retorne el seu nom i email.




console.log("------------------------------")

//Crea una funció usuarisAmbWebsite() que retorne només aquells usuaris que tenen website (no buit) i a més li afija https:// davant.

const usuarisAmbWebsite = dadesUsuaris
  .filter((elm) => elm.website !== "")
  .map((elm) => ({
    id: elm.id,
    name: elm.name,
    website: `https://${elm.website}`
  }));

console.log(usuarisAmbWebsite);

console.log("------------------------------")

//A partir d’un array de números, mostra la suma només dels números parells.
let array1 = [1, 2, 3, 4, 5, 6];

let numsParell=array1.reduce((acc,elm)=>{
    if(elm%2==0){
        acc=acc+elm
    }
    return acc
},0)

console.log(numsParell)
console.log("------------------------------")



//Multiplica tots els números per 10 i retorna un nou array
let valors = [3, 7, 1, 4];

console.log(valors.map((elm)=>elm*10))
console.log("------------------------------")



// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}
let dies = ['dilluns', 'dimarts', 'dimecres'];

let diesObj=dies.reduce((acc,elm,i)=>{
    acc[elm]=i
    return acc

},{})
console.log(diesObj)
console.log("------------------------------")


//Concatena tots els elements d’un array mixt


let barregat = [9, 'x', 8, 'y', 7];
console.log(barregat.reduce((acc,elm)=>acc=acc+elm),"")
console.log("------------------------------")

//A partir d’un array amb mesos, crea un objecte on cada mes siga una propietat amb el número de posició (començant per 1).


let mesos = ['gener', 'febrer', 'març'];
let mesosReduce=mesos.reduce((acc,elm,i)=>{
    acc[elm]=i+1
    return acc
},{})
console.log(mesosReduce)
console.log("------------------------------")


//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components

let musics = [
    { 'nom': 'Joan', 'instrument': 'vocal' },
    { 'nom': 'Pep', 'instrument': 'guitarra' },
    { 'nom': 'Vicent Lloret', 'instrument': 'guitarra' },
    { 'nom': 'Ariadna', 'instrument': 'bateria' },
    { 'nom': 'Guillem', 'instrument': 'baix' }
]
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]




const musicsReduce=musics.reduce((acc,elm)=>{
    acc.push(elm.nom)
    return acc
},[])

console.log(musicsReduce)
console.log("------------------------------")
//Ara feu-ho utilitzant map()


console.log(musics.map((elm)=>elm.nom))


console.log("------------------------------")
//retorna un array amb els instruments (sense repetir-ne cap).

const arrayInstr=musics.reduce((acc,elm)=>{
    if(!acc.includes(elm.instrument)){
        acc.push(elm.instrument)
    }

    return acc
    
},[])

console.log(arrayInstr)
console.log("------------------------------")
//retorna un array amb els noms dels músics que no toquen guitarra.


const musicsSenseGuit=musics.filter((elm)=>elm.instrument!="guitarra").map((elm)=>elm.nom)
console.log(musicsSenseGuit)



console.log("------------------------------")

//A partir d'un arrar de comandes com el proporcionat
let comandes = [
    {
        client: {
            nom: "Manel Viel"
        },
        productes: [
            {
                id: 1,
                nom: "Taronges"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Joan Mi"
        },
        productes: [
            {
                id: 3,
                nom: "Peres"
            }, {
                id: 2,
                nom: "Pomes"
            }
        ]
    }, {
        client: {
            nom: "Tomas Marin"
        },
        productes: [
            {
                id: 4,
                nom: "Freses"
            }, {
                id: 2,
                nom: "Peres"
            }, {
                id: 1,
                nom: "Platans"
            }
        ]
    }
]

// tornar un array anomenat llistat de comandes, on cada element siga un array d'objectes on
// aparega només el client i el producte de la seua comanda.


let llistatDeComandes = comandes.map(a => {
    return a.productes.map(b => { 
        let obj={ 
            client: a.client.nom, 
            productes: b.nom 
        } 
        
        return obj
        }
    )
})

console.log(llistatDeComandes);




