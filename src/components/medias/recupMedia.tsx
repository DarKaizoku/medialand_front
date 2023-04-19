import { useContext, useEffect, useState } from 'react'
import { TMedia } from '../../types/media.type'
import { MediaContext } from '../../contexts/medias.context'
import { SupportContext } from '../../contexts/supports.context'
import { TSupport } from '../../types/support.type'
import { LISTSUPPORTS } from '../../constants/listSupports'

export default function RecupMedia(props: {
    TOKEN: string
    setPage: (value: string) => void
}) {
    const { media, setMedia } = useContext(MediaContext)
    const { setSupport } = useContext(SupportContext)

    let nbVinyles: number = media.filter(
        (data) => (data.support as TSupport).id === 1
    ).length
    let nbK7audio: number = media.filter(
        (data) => (data.support as TSupport).id === 2
    ).length
    let nbBluray: number = media.filter(
        (data) => (data.support as TSupport).id === 3
    ).length
    let nbLivres: number = media.filter(
        (data) => (data.support as TSupport).id === 4
    ).length
    let nbPS5: number = media.filter(
        (data) => (data.support as TSupport).id === 5
    ).length
    let nbSnes: number = media.filter(
        (data) => (data.support as TSupport).id === 6
    ).length

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
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row justify-content-around custom-line m-3">
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top Cpointer"
                        src="./images/disk.png"
                        alt="un vinyle"
                        title="vos Vinyles"
                        onClick={() => {
                            props.setPage('Vinyles')
                            setSupport(LISTSUPPORTS[1])
                        }}
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
                        alt="une cassette audio"
                        title="vos K7-audio"
                        onClick={() => {
                            props.setPage('K7audio')
                            setSupport(LISTSUPPORTS[2])
                        }}
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
                        alt="un disque Blu-ray"
                        title="vos Blu-Ray"
                        onClick={() => {
                            props.setPage('Blu-ray')
                            setSupport(LISTSUPPORTS[3])
                        }}
                    />
                </div>
                <div className="card bg-black" style={{ width: 18 + 'rem' }}>
                    <img
                        className="card-img-top h-100 w-75 m-auto Cpointer"
                        src="./images/livre.png"
                        alt="un livre ouvert"
                        title="vos Livres"
                        onClick={() => {
                            props.setPage('Livres')
                            setSupport(LISTSUPPORTS[4])
                        }}
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
                        alt="une console PS5"
                        title="vos jeux PS5"
                        onClick={() => {
                            props.setPage('PS5')
                            setSupport(LISTSUPPORTS[5])
                        }}
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
                        alt="une console Super-Nintendo"
                        title="vos jeux de Super-Nintendo"
                        onClick={() => {
                            props.setPage('Snes')
                            setSupport(LISTSUPPORTS[6])
                        }}
                    />
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {nbSnes}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
