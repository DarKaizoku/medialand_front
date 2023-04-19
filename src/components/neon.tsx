export default function Neon(props: { setPage: (value: string) => void }) {
    const TOKEN = localStorage.getItem('token')
    return (
        <div className="container pe-0 align-self-center w-100">
            <img
                className="img-fluid Cpointer"
                src="./images/Neon.gif"
                alt="background"
                onClick={() => (!TOKEN ? props.setPage('Login') : null)}
            />
        </div>
    )
}
