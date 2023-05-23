import { useContext } from 'react'
import { TAuteur } from '../../types/auteur.type'
import { TMedia } from '../../types/media.type'
import { AddMedia } from './addMedia'
import { ChangeItem } from './changeItem'
import { DeleteItem } from './deleteItem'
import { PageContext } from '../../contexts/page.context'
import { TSupport } from '../../types/support.type'
import { FORMATLIST } from '../../constants/formatList'
import { TCategorie } from '../../types/categorie.type'

export default function Items(props: { medias: TMedia[] }) {
    const { medias } = props
    //const { media } = useContext(MediaContext)
    const { page, setPage } = useContext(PageContext)

    const affichage = medias.map((data) => {
        console.log(
            (data.support as TSupport).nom ===
                ('Vinyle' || 'K7-Audio' || 'Blu-ray')
        )
        return (
            <div
                className="card mb-3 bg-dark"
                key={data.id}
                style={{ maxWidth: 540 }}
            >
                <div className="row g-0">
                    <div className="col-md-4 m-auto">
                        <img
                            src={`./images/${
                                (data.support as TSupport).nom
                            }.png`}
                            className="img-fluid rounded-start w-75"
                            alt={data.titre}
                            title={data.titre}
                        />
                        <div className="row">
                            <ChangeItem leMedia={data} />
                            <DeleteItem leMedia={data} />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-light">
                            <h5 className="card-title">{data.titre}</h5>
                            <p className="card-text mt-3 p-0">
                                Description : {data.description}
                                <br />
                                Année : {data.annee}
                                {(data.support as TSupport).nom === 'Vinyle' ||
                                (data.support as TSupport).nom === 'K7-Audio' ||
                                (data.support as TSupport).nom === 'Blu-ray' ? (
                                    <>
                                        <br />
                                        Durée : {`${data.duree} minutes`}
                                    </>
                                ) : (
                                    ''
                                )}
                                <br />
                                Auteur.e.s :{' '}
                                {data.auteur.map(
                                    (data) => (data as TAuteur).nom + ` . `
                                )}
                                <br />
                                Format : {FORMATLIST[data.format]}
                                <br />
                                Emplacement : {data.emplacement}
                                <br />
                                Catégorie :{' '}
                                {(data.categorie as TCategorie[])[0]?.nom}
                            </p>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {page !== 'Accueil' && (
                <h1 className="text-light">
                    Votre Collection de Médias {page}
                </h1>
            )}
            {page !== 'Accueil' && (
                <img
                    className="Cpointer"
                    src="./images/retour.png"
                    title={`Retour à l'accueil`}
                    alt={`Retour à l'accueil`}
                    onClick={() => setPage('Accueil')}
                />
            )}
            {page !== 'Accueil' && <AddMedia />}
            {/* si list global pas d'ajout d'item mais consultation/modification et suppression */}
            <div className="row justify-content-around custom-line">
                {affichage}
            </div>
        </div>
    )
}
