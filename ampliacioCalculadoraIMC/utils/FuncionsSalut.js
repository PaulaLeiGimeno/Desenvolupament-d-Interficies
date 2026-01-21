// Conjunt de funcions per a fer els càlculs de l'ampliació de la calculadoraIMC
/** @module FuncionsSalut */

/**
 * Funció que converteix un unitat en metres a centímetres
 * 
 * @function m2cm
 * @param {string} stringEnMetres - Un string que representa una quantitat en metres.
 * @returns {float} Els metres convertits en centímetres
 */

export const m2cm = (stringEnMetres) =>{
    return (parseFloat(stringEnMetres)*100)
}

/**
 * Funció que converteix un unitat en centímetres a metres
 * 
 * @function cm2m
 * @param {string} stringEnCentimetres - Un string que representa una quantitat en centímetres.
 * @returns {float} Els centímetres convertits a metres
 */
export const cm2m = (stringEnCentimetres) =>{
    return (parseFloat(stringEnCentimetres)/100)
}

/**
 * Funció que torna el pes ideal d'una persona, en base a la seua alçada
 *
 * El pes ideal és un rang
 *  - Tornarà el minim i el màxim
 *
 * @function pesIdeal
 * @param {string} alcada - Alçada d'una persona en metres.
 * @returns {{min: string, max: string}} Objecte amb el resultat de la validació:
 *   - min: indica el pes mínim (amb un decimal) per a eixa persona.
 *   - max: indica el pes màxim (amb un decimal) per a eixa persona.
 *
 * @example
 * pesIdeal("1.70");
 * // -> { min: '53.5', max: '72.0' } 
 */

export const pesIdeal = (alcada)=>{
    const alt = parseFloat(alcada);
    const LIMIT_INFERIOR = 18.5;
    const LIMIT_SUPERIOR = 24.9;
    const minKg = LIMIT_INFERIOR*Math.pow(alt,2);
    const maxKg = LIMIT_SUPERIOR*Math.pow(alt,2);
    
    return({min:minKg.toFixed(1), max:maxKg.toFixed(1)});
}

/**
 * Funció que Indicar a l’usuari si ha de guanyar, perdre o mantindre el 
 * pes per a situar-se dins del rang saludable
 *
 * El pes ideal és un rang
 *  - Tornarà el minim i el màxim
 *
 * @function guanyarOperdrePes
 * @param {string} pesActual - Pes actual d'una persona en Kg.
 * @param {string} alcada - Alçada d'una persona en metres.
 * @returns {{msg: string, color: string, diferenciaPes: string}} Objecte amb el resultat del càlcul:
 *   - msg: guanyar|perdre|mantindre pes.
 *   - color: verd|roig|taronja.
 *   - diferenciaPes: Quantitat de pes que necessita, respecte al pes ideal.
 *
 * @example
 * guanyarOperdrePes("78","1.74");
 * // -> { msg: 'perdre', color: 'red', diferenciaPes: '2.6' } 
 */

export const guanyarOperdrePes = (pesActual, alcada)=>{
   const rangPesIdeal = pesIdeal(alcada);
   const pes = parseFloat(pesActual);
   const pesMinim = parseFloat(rangPesIdeal.min);
   const pesMaxim = parseFloat(rangPesIdeal.max);
   
   if (pesActual<rangPesIdeal.min)
    return({msg: 'guanyar', color:'green', diferenciaPes:(pesMinim-pes).toFixed(1)});
   else{
        if (pesActual<=rangPesIdeal.max)
            return({msg: 'mantindre', color:'orange', diferenciaPes:(pesMaxim-pes).toFixed(1)});
        else
            return({msg: 'perdre', color:'red', diferenciaPes:(pes-pesMaxim).toFixed(1)});
   }
}

/**
 * Funció que obtindre les calories diàries recomanades. Utilitzem la formula
 * fórmula Mifflin–St Jeor.
 *
 * @function caloriesDiariesRecomanades
 * @param {string} pes - Pes actual d'una persona en Kg.
 * @param {string} alcada - Alçada d'una persona en metres.
 * @param {string} edat - Edat de la persona en anys.
 * @param {string} sexe - Un dels següents valors [Femella, Mascle].
 * @param {string} nivellActivitat - Algun dels següents valors [sedentari, lleu, moderat, alt, molt alt].
 * @returns {kcal: integer} Un nombre enter indicant la quantitat de kcal
 * 
 * @example
 * caloriesDiariesRecomanades("65", "1.70", 25, "Mascle", "lleu");
 * // ->  kcal: 2190
 */

export const caloriesDiariesRecomanades = (pes, alcada, edat, sexe, nivellActivitat)=>{
    //Valors constant del nivell d'activitat
    const  valorsNivellActivitat = new Map();
    valorsNivellActivitat.set("Sedentari", 1.2);
    valorsNivellActivitat.set("Lleu", 1.375);
    valorsNivellActivitat.set("Moderat", 1.55);
    valorsNivellActivitat.set("Alt", 1.725);
    valorsNivellActivitat.set("Molt alt", 1.9);

    //convertim l'alcada a cm.
    const alcadaEnCM = m2cm(alcada);
    //Calculem MBR segons sexe
    let MBR = 10*parseFloat(pes)+6.25*alcadaEnCM-5*parseInt(edat);
    if(sexe==='Mascle')
        MBR = MBR + 5;
    else
        MBR = MBR - 161;

    return (Math.ceil(MBR*valorsNivellActivitat.get(nivellActivitat)))
}

/**
 * Funció que obté el percentatge de greix corporal. 
 * S’utilitza la fòrmula de Deurenberg, basada en l’IMC, l’edat i el sexe.
 * (% greix) = (1.20 × IMC) + (0.23 × edat) − (10.8 × sexe) − 5.4
 * 
 * @function percentatgeGreixCorporal
 * @param {float} IMC - IMC.
 * @param {string} edat - Edat de la persona en anys.
 * @param {string} sexe - Un dels següents valors [Femella, Mascle].
 * @returns {%greix: string} Valor amb un decimal. 
 * 
 * @example
 * percentatgeGreixCorporal(25.47,"38","Mascle");
 * // ->  %greix: 23.1%
 */

export const percentatgeGreixCorporal = (IMC, edat,sexe)=>{
    const percentatge = (1.2*IMC)+(0.23*parseInt(edat));
    if(sexe==="Mascle")
        return((percentatge - (10.8*1) - 5.4).toFixed(1));
    else
        return((percentatge - 5.4).toFixed(1));
}

export const calculsDadesSalut = (imc,alcada,pes,sexe,edat,nivellAct)=>{
    
    const pesI = pesIdeal(alcada);
    const gopPes = guanyarOperdrePes(pes,alcada);
    const kcalDiaries = caloriesDiariesRecomanades(pes,alcada,edat,sexe,nivellAct);
    const percGC = percentatgeGreixCorporal(imc,edat,sexe);
    return ({
        imc:imc,
        pesIdeal:pesI,
        gopPes:gopPes,
        kcalDiaries:kcalDiaries,
        percGC:percGC
    });
}

/*
console.log(pesIdeal("1.74"));
console.log(guanyarOperdrePes("78","1.74"));
console.log("kcal: "+caloriesDiariesRecomanades("80","1.84",40,"Mascle","Lleu"));
console.log(percentatgeGreixCorporal(25.47,"38","Mascle")+"%");
*/
