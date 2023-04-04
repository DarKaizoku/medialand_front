import { TAuteur } from "./auteur.type"
import { TCategorie } from "./categorie.type"
import { TSupport } from "./support.type"

export type TMedia = {
    id: number,
    titre: string,
    duree: number, //en minutes
    description: string,
    annee: number,
    format: number, //0:physique, 1:dématérialisé, 2: les deux

    support: TSupport

    categorie: TCategorie[]

    auteur: TAuteur[]
}