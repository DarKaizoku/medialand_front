import { TAuteur } from '../../types/auteur.type'
import { TMedia } from '../../types/media.type'
export default function VinylesList(props: { media: TMedia[] }) {
    const { media } = props

    const affichage = media.map((data, i) => (
        <div className="card mb-3 bg-dark" key={i} style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4 m-auto">
                    <img
                        src="./images/disk.png"
                        className="img-fluid rounded-start"
                        alt="disque vinyle"
                    />
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
                            {data.auteur.map((data) => data.nom + ` . `)}
                            <br />
                            Support : {data.support.nom}
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))

    return <div className="pb-5">{affichage}</div>
}

{
    /* <div classNameNameNameName="vinyl" data-aos="zoom-in"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="zoom-out"><VinyleItem /></div>

        <div classNameNameNameName="vinyl" data-aos="slide-up"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-up"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-down"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-right"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-left"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="zoom-in"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="zoom-out"><VinyleItem /></div>

        <div classNameNameNameName="vinyl" data-aos="slide-up"><VinyleItem /></div>

        <div classNameNameNameName="vinyl" data-aos="flip-up"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-down"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-right"><VinyleItem /></div>
        <div classNameNameNameName="vinyl" data-aos="flip-left"><VinyleItem /></div> */
}
