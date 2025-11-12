<<<<<<< HEAD
//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array1.reduce((acc, elm) => acc = elm + acc), "")

//45
console.log("------------------------------")



//A partir d'un array d'strings i numeros, mostra un string que els continga tots
let array2 = ['a', 1, 'b', 2, 'c', 3];

console.log(array2.reduce((acc, elm) => acc = acc + elm + ""), "")
// a1b2c3
console.log("------------------------------")



// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}


let dies = ['dilluns', 'dimarts', 'dimecres'];

const diesObjecte = dies.reduce((acc, elm, i) => {
    acc[elm] = i
    return acc
}, {})
console.log(diesObjecte)

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components
// [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]
console.log("------------------------------")
let musics = [
    { 'nom': 'Joan', 'instrument': 'vocal' },
    { 'nom': 'Pep', 'instrument': 'guitarra' },
    { 'nom': 'Vicent Lloret', 'instrument': 'guitarra' },
    { 'nom': 'Ariadna', 'instrument': 'bateria' },
    { 'nom': 'Guillem', 'instrument': 'baix' }
]
console.log("AAAAAAAAAAAAAA")
const musicsReduce = musics.reduce((acc, elm) => {
    acc.push(elm.nom)
    return acc
}, [])

console.log(musicsReduce)
//Ara feu-ho utilitzant map()
console.log("------------------------------")


console.log(musics.map((elm) => elm.nom))


//Ara que torne un array només amb els noms del musics que toquen la guitarra
//['Pep', 'Vicent Lloret']
console.log("------------------------------")

console.log(musics.filter((elm) => elm.instrument == "guitarra").map((element) => element.nom))

console.log("------------------------------")
//Amb reduce

let musicsReduce2 = musics.reduce((acc, elm) => {
    if (elm.instrument == "guitarra") {
        acc.push(elm.nom)
    }
    return acc
}, [])
console.log(musicsReduce2)

//['Pep', 'Vicent Lloret']
//const nomsMusic
//console.log(nomsMusic)
//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

//Que torne un array d'objectes amb l'email, el tel i la web
console.log("------------------------------")

const usersMap = users.map((elm) => {
    let obj = {
        'email': elm.email,
        'tel': elm.phone,
        'web': elm.website
    }
    return obj;
})
console.log(usersMap)
//-----------------------------------------------------
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

const llistaComandes = () => {
    return comandes.map(elem => {
        elem.client,
            elem.pr
    })
}


let llistatDeComandes = comandes.map(element => {
    return element.productes.map(elm => {
        let obj = {
            client: element.client.nom,
            productes: elm.nom
        }
        return obj
    }
    )
})


console.log(llistatDeComandes);




=======
//A partir d'un array de numeros, mostra la suma de tots ells
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array1Sol = array1.reduce((a, b) => a + b, 0);
console.log(array1Sol) //45

//A partir d'un array d'strings i numeros, mostra un string que els continga tots
let array2 = ['a', 1, 'b', 2, 'c', 3];
let array2Sol = array2.reduce((c, d) => c + d, " ")
console.log(array2Sol) // a1b2c3

// A partir d'un array de dies, em torne un OBJECTE amb tants atributs com dies i la posició de cada dia
// És a dir per a l'array ['dilluns', 'dimarts', 'dimecres'] 
// torne un objecte {dilluns:0, dimarts:1, dimecres:2}

let dies = ['dilluns', 'dimarts', 'dimecres']; /*en un objecte de js, profe.nom=profe[nom], per alguna raó en particular*/

let diesObjecte = dies.reduce((obj, dia, index) =>
//objecte-> obj; atribut->dia; index-> index
{
    obj[dia] = index;
    return obj;

}, {});
console.log(diesObjecte); // { dilluns: 0, dimarts: 1, dimecres: 2 }

//A partir d'un array amb objectes Musics (nom i instrument que toca)
//Que torne un array amb els noms de tots els components

let musics = [
    { 'nom': 'Joan', 'instrument': 'vocal' },
    { 'nom': 'Pep', 'instrument': 'guitarra' },
    { 'nom': 'Vicent Lloret', 'instrument': 'guitarra' },
    { 'nom': 'Ariadna', 'instrument': 'bateria' },
    { 'nom': 'Guillem', 'instrument': 'baix' }
]

//Ara feu-ho utilitzant map()
let musicsMap = musics.map((noms) => noms.nom)
console.log(musicsMap) // [ 'Joan', 'Pep', 'Vicent Lloret', 'Ariadna', 'Guillem' ]

//Ara que torne un array només amb els noms del musics que toquen la guitarra

let guitarristes = musics.filter(m => m.instrument == 'guitarra').map(m => m.nom);
console.log(guitarristes); //['Pep', 'Vicent Lloret']

//Amb reduce
let guitarristesReduce = musics.reduce((acc, m) => {
    if (m.instrument === 'guitarra') acc.push(m.nom);
    return acc;
}, []);
console.log(guitarristesReduce); //['Pep', 'Vicent Lloret']

//----------------------------------------------------------------------------------

const users = [
    {
        id: 1,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password"
    },
    {
        id: 2,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password"
    }]

//Que torne un array d'objectes amb l'email, el tel i la web
//const contactInfo = users.map(({ email, website, phone }) => ({ email, website, phone }))

let users2 = users.map((cosa) => {
    return {
        email2: cosa.email,
        phone2: cosa.phone,
        website2: cosa.website
    }
})

console.log(users2)

//-----------------------------------------------------
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


let llistatDeComandes = comandes.map(comanda =>
    comanda.productes.map(producte => ({
        client: comanda.client.nom,
        producte: producte.nom
    }))
);

console.log(llistatDeComandes);

>>>>>>> 48c93373e7b2e87ef59df5551927a999f5a32e24
