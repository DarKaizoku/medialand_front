import { TAuteur } from "./auteur.type"
import { TCategorie } from "./categorie.type"
import { TSupport } from "./support.type"

export type TMedia = {
    id?: number,
    titre: string,
    duree: number, //en minutes
    description: string,
    annee: number,
    emplacement: string,
    format: number, //0:physique, 1:dématérialisé, 2: les deux

    //proprietaire: [],

    support: TSupport | number,

    categorie: TCategorie[] | number[],

    auteur: TAuteur[] | number[]
}