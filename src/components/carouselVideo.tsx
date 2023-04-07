export default function CarouselVideo() {
    return (
        <div
            id="carouselVideoExample"
            className="carousel slide carousel-fade mt-3"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <video className="img-fluid" autoPlay loop muted>
                        <source
                            src="https://st4.depositphotos.com/5984732/29489/v/600/depositphotos_294896314-stock-video-old-retro-vintage-cassette-audio.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Mais où sont-elles</h5>
                        <p>???</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <video className="img-fluid" autoPlay loop muted>
                        <source
                            src="https://st2.depositphotos.com/19060372/44325/v/600/depositphotos_443252948-stock-video-man-browsing-vinyl-collection-jazz.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Où est mon Sonny Rollins !?!</h5>
                        <p>!?!</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <video className="img-fluid" autoPlay loop muted>
                        <source
                            src="https://st2.depositphotos.com/19060372/42266/v/600/depositphotos_422668900-stock-video-man-browsing-blu-ray-dvd.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Y a t'il un Blu-Ray dans ma collec</h5>
                        <p>!?!</p>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselVideoExample"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselVideoExample"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
