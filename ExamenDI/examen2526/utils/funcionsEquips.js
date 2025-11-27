
import * as file from '../assets/dades/dades.json' with { type: "json" };
const dades = file.default.equips;//dades és un array d'equips, ara

// A partir d'un nom d'un equip, obtinc l'objecte d'eixe equip amb totes les dades.
export const getObjEquip = (nomEquip)=> {
    const trobat = dades.filter((unEquip)=> unEquip.strTeam===nomEquip);
    return trobat[0]; //tornem el 1r element de l'array trobat
}

//a partir d'un obj amb les dades d'un equip, obtinc la urlde la imatge (strBadge")
export const getUrlImatgeEscut = (unEquipObj)=>{
    return (unEquipObj.strBadge);
}

//obtinc l'any de fundació (intFormedYear)
export const getAnyFundacio = (unEquipObj)=>{
    return (unEquipObj.intFormedYear);
}

//obtinc l'any de fundació (intFormedYear)
export const getNomEstadi = (unEquipObj)=>{
    return (unEquipObj.strStadium);
}

//obtinc el nom de l'equip (strTeam)
export const getNomEquip = (unEquipObj)=>{
    return (unEquipObj.strTeam);
}
//obtinc la fitxa de l'equip
export const getFitxaEquip = (unEquipObj)=>{
    return (
        {   nom: getNomEquip(unEquipObj),
            imatgeEscut: getUrlImatgeEscut(unEquipObj),
            anyFundacio: getAnyFundacio(unEquipObj),
            estadi: getNomEstadi(unEquipObj)
        }
    );
}

//const equipACercar = 'Girona';
//getObjEquip(equipACercar);
//console.log(getFitxaEquip(getObjEquip(equipACercar)));
