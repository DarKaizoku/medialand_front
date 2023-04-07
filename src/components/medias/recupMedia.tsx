import { useContext, useEffect, useState } from 'react'
import { TMedia } from '../../types/media.type'

export default function RecupMedia(props: {
    TOKEN: string
    setPage: (value: string) => void
    media: TMedia[]
    setMedia: (value: TMedia[]) => void
}) {
    const { media, setMedia } = props

    //const { media, setMedia } = useContext(MediaContext)

    let nbVinyles: number = 0
    let nbK7audio: number = 0
    let nbBluray: number = 0
    let nbLivres: number = 0
    let nbPS5: number = 0
    let nbSnes: number = 0

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${props.TOKEN}`,
            },
        }

        fetch('http://localhost:8000/medias/user', options)
            .then((response) => response.json())
            .then((response) => {
                setMedia(response.data as TMedia[])
                console.log(media)
            })
            .catch((err) => console.error(err))
    }, [])

    if (media[0].id) {
        nbVinyles = media.filter((data) => data.support.id === 1).length
        nbK7audio = media.filter((data) => data.support.id === 2).length
        nbBluray = media.filter((data) => data.support.id === 3).length
        nbLivres = media.filter((data) => data.support.id === 4).length
        nbPS5 = media.filter((data) => data.support.id === 5).length
        nbSnes = media.filter((data) => data.support.id === 6).length
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-around custom-line m-3">
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top Cpointer"
                        src="./images/disk.png"
                        alt="vos vinyles"
                        onClick={() => props.setPage('listVinyl')}
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbVinyles}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top Cpointer"
                        src="./images/K7audio-V2.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbK7audio}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div
                    className="card bg-black mb-5"
                    style={{ width: 18 + 'rem' }}
                >
                    <div className=" mb-5">
                        <span className="position-absolute top-0 start-33 translate-middle badge rounded-pill bg-danger">
                            {nbBluray}
                            <span className="visually-hidden">
                                unread messages
                            </span>
                        </span>
                    </div>
                    <img
                        className="card-img-top h-55 w-50 m-auto Cpointer"
                        src="./images/Blu-ray.png"
                        alt="vos vinyles"
                    />
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top h-100 w-75 m-auto Cpointer"
                        src="./images/livre.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbLivres}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top Cpointer"
                        src="./images/PS5.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbPS5}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top Cpointer"
                        src="./images/Snes.png"
                        alt="vos vinyles"
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbSnes}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
                <h1 className="color-success start-50">MEDIAS</h1>
            </div>
        </div>
    )
}
