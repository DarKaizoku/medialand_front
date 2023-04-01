export default function recupMedia() {
    const TOKEN = localStorage.getItem('token')

    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    };

    fetch('http://localhost:8000/medias/user', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}