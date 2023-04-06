import { useEffect, useState } from 'react'
import { TMedia } from '../../types/media.type'

export default function RecupMedia(props: { TOKEN: string }) {
    const newMedia: TMedia = {
        id: 0,
        duree: 0,
        description: '',
        titre: '',
        annee: 0,
        format: 0,
        support: {
            id: 0,
            nom: '',
        },

        categorie: [],

        auteur: [],
    }

    const [media, setMedia] = useState<TMedia[]>([newMedia])
    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${props.TOKEN}`,
        },
    }
    let test: string[] = ['rien']

    useEffect(() => {
        fetch('http://localhost:8000/medias/user', options)
            .then((response) => response.json())
            .then((response) => {
                setMedia(response.data)
            })
            .catch((err) => console.error(err))

        if (media![0]) {
            test = media!.map((data) => data.description)
        }
    }, [])

    console.log(test)

    return (
        <div className="container-fluid">
            <div className="row justify-content-around custom-line">
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top"
                        src="./images/disk.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top"
                        src="./images/K7audio-V2.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <div>
                        <span className="position-absolute top-0 start-33 translate-middle badge rounded-pill bg-danger">
                            7
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </div>
                    <img
                        className="card-img-top h-55 w-50 m-auto"
                        src="./images/Blu-ray.png"
                        alt="vos vinyles"
                    />
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top h-100 w-75 m-auto"
                        src="./images/livre.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top"
                        src="./images/PS5.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top"
                        src="./images/Snes.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <h1 className="color-success start-50">MEDIAS</h1>
            </div>
        </div>
    )
}
