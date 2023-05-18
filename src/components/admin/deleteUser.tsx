import { TCompte } from '../../types/compte.type'

export function DeleteUser(props: {
    compte: TCompte
    comptes: TCompte[]
    setComptes: (value: TCompte[]) => void
}) {
    const TOKEN = sessionStorage.getItem('token')
    const { compte, comptes } = props

    const delItem = () => {
        async function fetchData() {
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${TOKEN}`,
                },
            }
            const response = await fetch(
                process.env.REACT_APP_URL_UTILISATEUR! + `/${compte.id}`,
                options
            )
            if (response.status === 404) {
                return alert(`Ce compte n'existe pas !`)
            }
            await response.json()

            const newList = comptes.filter((data) => data.id !== compte.id)
            props.setComptes(newList)
        }
        fetchData()
    }

    return (
        <div className="col-6 m-2 text-dark">
            <button
                type="button"
                className="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal${compte.id}`}
            >
                Supprimer
            </button>
            <div
                className="modal fade"
                id={`deleteModal${compte.id}`}
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
                            Etes-vous sur de vouloir supprimer le compte de :
                            <br />
                            {compte.username}
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
