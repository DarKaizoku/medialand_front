import { useContext } from 'react'
import { TMedia } from '../../types/media.type'
import { MediaContext } from '../../contexts/medias.context'

//const urlUser = 'http://localhost:8000/medias/'

export function DeleteItem(props: { leMedia: TMedia }) {
    const TOKEN = sessionStorage.getItem('token')
    const { leMedia } = props

    const { media, setMedia } = useContext(MediaContext)

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    }
    const delItem = () => {
        async function fetchData() {
            const response = await fetch(
                `http://localhost:8000/medias/${leMedia.id}`,
                options
            )
            if (response.status === 404) {
                return alert(`Ce média n'existe pas !`)
            }
            await response.json()

            const newList = media.filter((data) => data.id !== leMedia.id)
            setMedia(newList)
        }
        fetchData()
    }

    return (
        <div className="col-6">
            <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal${leMedia.id}`}
            >
                Supprimer
            </button>
            <div
                className="modal fade"
                id={`deleteModal${leMedia.id}`}
                tabIndex={-1}
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="deleteModalLabel"
                            >
                                !! Suppression !!
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Etes-vous sur de vouloir supprimer le média :
                            <br />
                            {leMedia.titre}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => delItem()}
                            >
                                Confirmer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
