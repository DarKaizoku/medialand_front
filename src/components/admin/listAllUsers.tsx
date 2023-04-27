import { TCompte } from '../../types/compte.type'
import ItemUser from './itemUser'

export function ListAllUsers(props: {
    users: TCompte[]
    setUsers: (value: TCompte[]) => void
}) {
    return <ItemUser comptes={props.users} setComptes={props.setUsers} />
}
