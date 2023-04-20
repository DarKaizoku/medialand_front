import { TAuteur } from '../../types/auteur.type'
import { TMedia } from '../../types/media.type'
import { TSupport } from '../../types/support.type'

export default function Items(props: { medias: TMedia[] }) {
    const { medias } = props

    const affichage = medias.map((data, i) => (
        <div className="card mb-3 bg-dark" key={i} style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4 m-auto">
                    <img
                        src="./images/disk.png"
                        className="img-fluid rounded-start"
                        alt={data.titre}
                        title={data.titre}
                    />
                    <div className="row">
                        {/* <ChangeItem leMedia={data} />
                        <DeleteItem leMedia={data} /> */}
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body text-light">
                        <h5 className="card-title">{data.titre}</h5>
                        <p className="card-text mt-3 p-0">
                            Description : {data.description}
                            <br />
                            Année : {data.annee}
                            <br />
                            Auteur.e.s :{' '}
                            {data.auteur.map(
                                (data) => (data as TAuteur).nom + ` . `
                            )}
                            <br />
                            Support : {(data.support as TSupport).nom}
                        </p>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            <div className="row justify-content-around custom-line">
                {affichage}
            </div>
        </div>
    )
}
