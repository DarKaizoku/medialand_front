export default function RedPhone(props: { setPage: (value: string) => void }) {
    return (
        <div>
            <img
                style={{
                    position: 'absolute',
                    right: 375,
                    bottom: 125,
                    width: 200,
                    height: 200,
                    cursor: 'pointer',
                }}
                src='./images/redphone.png'
                alt='background'
                onClick={() => props.setPage('Login')}
            />

            <h1 className="animate__animated animate__backOutRight text-warning">HAAAAAAAAAAAAa</h1>
        </div>
    );
}
