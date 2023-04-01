export default function VinyleItem() {
    return <div className="mx-auto" data-aos="flip-up"
        style={{ cursor: 'pointer' }}
    ><div className="container config-vinyl">
            <img
                className="cover-vinyl"
                src='./images/coverV.png'
                alt='vinyle-cover'
            />
            <img
                className="disk-vinyl"
                src='./images/disk.png'
                alt='vinyle-cover'
            /></div>
    </div>;
}
