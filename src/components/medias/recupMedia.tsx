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
        <div className="container fluidnpm">
            <h1 className="color-warning">MEDIAS</h1>
            <div className="row">
                <div className="col-3 position-relative">
                    <img className="m-0" src="./images/disk.png" alt="vinyle" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="col-3 position-relative">
                    <img className="m-0" src="./images/disk.png" alt="vinyle" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="col-3 position-relative">
                    <img className="m-0" src="./images/disk.png" alt="vinyle" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="col-3 position-relative">
                    <img className="m-0" src="./images/disk.png" alt="vinyle" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        7
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
