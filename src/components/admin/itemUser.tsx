import { TCompte } from '../../types/compte.type'
import { DeleteUser } from './deleteUser'

export default function ItemUser(props: {
    comptes: TCompte[]
    setComptes: (value: TCompte[]) => void
}) {
    const { comptes, setComptes } = props

    const affichage = comptes?.map((data, i) => (
        <div className="card mb-3 bg-dark" key={i} style={{ maxWidth: 540 }}>
            <div className="row g-0">
                <div className="col-md-4 m-auto">
                    <img
                        src="./images/ninja.png"
                        className="img-fluid rounded-start"
                        alt="avatar généré aléatoirement"
                        title={data.username}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-light">
                        <h5 className="card-title">{data.username}</h5>
                        <p className="card-text mt-3 p-0">
                            Nom : {data.nom}
                            <br />
                            Prénom : {data.prenom}
                            <br />
                            Email :{data.email}
                            <br />
                            Status : {data.admin ? 'Admin' : 'User'}
                        </p>
                        <p className="card-text"></p>
                        <div className="row justify-content-center">
                            <DeleteUser
                                compte={data}
                                comptes={comptes}
                                setComptes={setComptes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div>
            <h1 className="text-light">Votre Collection Users</h1>
            <div className="row justify-content-around custom-line">
                {affichage}
            </div>
        </div>
    )
}
