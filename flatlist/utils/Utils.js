
import dades from "../assets/dades.json" with { type: "json" };

//Tengo la pequeña sospecha que esto que me he tirado treinta años en sacar no me vale para mucho


export const getProfesDAM = dades.unitatTics.filter((unitatTic) => unitatTic.cicle == "DAM")[0].curs.map((any) => any.profes)
export const getProfesDAW = dades.unitatTics.filter((unitatTic) => unitatTic.cicle == "DAW")[0].curs.map((any) => any.profes)
export const getProfesASIR = dades.unitatTics.filter((unitatTic) => unitatTic.cicle == "ASIR")[0].curs.map((any) => any.profes)

export const getProfesPrimer = dades.unitatTics.map((unitatTic) => unitatTic.curs.filter((cuurs) => cuurs.numCurs == "1r")).map((e) => e[0]).map((i) => i.profes)
export const getProfesSegon = dades.unitatTics.map((unitatTic) => unitatTic.curs.filter((cuurs) => cuurs.numCurs == "2n")).map((e) => e[0]).map((i) => i.profes)

console.log(JSON.stringify(getProfesDAM, null, 2))

