export default function VinylClick(props: { setPage: (value: string) => void }) {

    return <div>
        <img
            style={{
                position: 'relative',
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