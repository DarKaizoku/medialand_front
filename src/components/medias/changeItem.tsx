import { TMedia } from '../../types/media.type'

export function ChangeItem(props: { leMedia: TMedia }) {
    const { leMedia } = props

    return (
        <div className="col-6">
            <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
            >
                Modifier
            </button>
            <div
                className="modal fade"
                id="updateModal"
                tabIndex={-1}
                aria-labelledby="updateModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="updateModalLabel"
                            >
                                ! Modifier votre Média !
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">...</div>
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
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
