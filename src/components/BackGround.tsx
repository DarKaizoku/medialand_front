export default function BackGround() {
    return (
        <>
            <img
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: -1,
                    width: 100 + '%',
                    height: 100 + '%',
                }}
                src='./images/wallBG.jpg'
                alt='background'
            />
        </>
    );
}
