import { TUtilisateur } from '../../types/utilisateur.type'

const urlAddUser = 'http://localhost:8000/utilisateurs/register'
export default function AddUser(user: TUtilisateur) {
    if (user.password !== user.passwordConfirmed) {
        return alert('Merci de vérifier votre mot de passe !!')
    }

    let registerOK: string = ''
    async function fetchData() {
        const response = await fetch(urlAddUser, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })

        const responseJson = await response.json()
        console.log(responseJson.message)

        if (responseJson.status === 'SUCCESS') {
            alert(responseJson.message)
            return (registerOK = 'OK')
        }
        alert(responseJson.message)
    }
    fetchData()
    console.log(registerOK)

    return registerOK
}
