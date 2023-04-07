export default function Neon(props: {
    TOKEN: string | null
    setPage: (value: string) => void
}) {
    return (
        <div className="container pe-0 align-self-center w-100">
            <img
                className="img-fluid Cpointer"
                src="./images/Neon.gif"
                alt="background"
                onClick={() => (!props.TOKEN ? props.setPage('Login') : null)}
            />
        </div>
    )
}
