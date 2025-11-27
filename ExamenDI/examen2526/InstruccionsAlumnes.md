## Instruccions ##
### 1a sessió ###
1. Preparar l'entorn, tal i com diu el README.md del repo https://github.com/Florida2DAM/Futbol.git
2. Creeu una branca anomenada infoEquip
3. Observar el format del fitxer assets/dades/dades.json
4. Completar el fitxer utils/funcionsEquips.js, per a poder gestionar  el fitxer dades.json
5. Creeu un component anomenat InfoEquip, que mostre la informació d'un equip.
D'un equip ens interesa mostrar:
  * la imatge de l'escut
  * el nom de l'equip
  * l'any de fundació
Penseu, si eixe component ha de rebre algun tipus d'informació, per a que servisca per a mostrar qualsevol equip dels que apareixen al fitxer dades.json.
6. Proveu que funciona per a qualsevol equip.
7. Feu un merge de la branca infoEquip a Inicial
### 2a sessió ###
Ara que ja tenim un component (InfoEquip) que és capaç de mostrar 
la informació d'un equip, a partir del seu nom, anem a acometre la construcció d'un altre component (InfoPartit) per a registrar un partit.
1. Cal pensar quina informació necessitem per a representar un partit.
2. Després de debatre una miqueta a classe, aquesta informació serà la que li passarem al component InfoPartit.
3. Programem el component per a que mostre la informació d'un partit tal i com mostra la imatge.
4. Comprovar que funciona per a diferents equips.
### RECAPITULACIONS ###
Fins ara hem fet:
1. Programar les funcions que gestionaran les dades del fitxer json, per a extreure la informació que ens interessa, per als components que anem a crear.
2. Hem creat un component **InfoEquip**, que rep un atribut anomenat *nom*, que conté el nom d'un Equip, i a partir d'ahí, fent ús de les funcions anteriors, mostrem l'escut, el nom de l'equip i l'any de fundació.
3. Hem creat un component anomenat **InfoPartit**, que conté 4 propietats, *local*, *visitant*, *hora* (del partit), *estadi* (on es jugarà el partit)
### 3a Sessió ###
1. Modificar els components per a mostrar, l'*àrbitre* i la *capacitat* de l'estadi. Mostreu-ho de la millor manera que pugueu.
2. Permeteu que el component **InfoPartit** tinga opcional els atributs *estadi* i *capacitat*, de manera que si no els passem, agafe automàticament l'estadi de l'equip local i la capacitat de l'estadi de l'equip local.
### 4a Sessió ###
1. Afegiu un component que permeta cercar equips, i faça que es mostre el/ls partits que juguen equips amb el critèri de cerca.
L'usuari a de poder escriure lletres en minuscula/Majuscula, però no s'han de tindre en compte a l'hora de cercar.
EXEMPLE: Si l'usuari cerca '**el**', mostrarà els partits on jugue el Barc**el**ona i els partits on jugue el **El**che.
2. Modifiqueu el codi per si la cerca no troba cap resultat, que mostre una imatge (indicada pel professor) i el missatge "No he trobat cap partit amb els equips que contenen xxxx" on XXXX és el criteri de cerca introduït per l'usuari.
3. Customitzeu el component Searchbar per a que siga del color de la targeta *InfoPartit*.
Feu que el text d'entrada siga de color verd, amb un tamany de lletra de 25 (Apte per al sr. professor).