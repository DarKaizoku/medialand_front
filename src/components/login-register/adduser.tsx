import { TUtilisateur } from '../../types/utilisateur.type'

const urlAddUser = 'http://localhost:8000/utilisateurs/register'
export default function AddUser(user: TUtilisateur) {
    console.log(user)
    if (user.password !== user.passwordConfirmed) {
        return alert('Merci de vérifier votre mot de passe !!')
    }

    async function fetchData() {
        const response = await fetch(urlAddUser, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })

        const responseJson = await response.json()
        if (responseJson.statusCode !== 201) {
            return alert(responseJson.message.map((data: any) => data + `\n`))
        }
        alert(responseJson.message)
    }
    fetchData()
}
