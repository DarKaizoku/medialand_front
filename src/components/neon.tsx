export default function Neon(props: { setPage: (value: string) => void }) {
    return (
        <div className="row align-self-center w-100">
            <img
                className="img-fluid neon"
                src='./images/Neon.gif'
                alt='background'
                onClick={() => props.setPage('Login')}
            />
        </div>
    );
}
