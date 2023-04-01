export default function VinylClick(props: { setPage: (value: string) => void }) {

    return <div className="container m-auto row">
        <img className="p-1 col-12 col-md-8 col-lg-6 col-xl-5"
            style={{
                position: 'sticky',
                right: -250,
                bottom: -300,
                cursor: 'pointer',
            }}
            src='./images/disk.png'
            alt='Vinyl disk'
            onClick={() => props.setPage('listVinyl')}
        />
    </div>
}