import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="ca-banner">
                <div id="carouselExampleDark" class="carousel carousel-dark slide">

                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-5 d-flex justify-content-end">
                                    <img src="./src/assets/others/Frame.png" className='img-fluid mb-3' alt="image" />
                                </div>
                                <div className="col-9 col-md-7">
                                    <p className='ca-text'>
                                        Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <div className="row align-items-center justify-content-center">
                                <div className="col-5 d-flex justify-content-end">
                                    <img src="./src/assets/others/Frame.png" className='img-fluid mb-3' alt="image" />
                                </div>
                                <div className="col-9 col-md-7">
                                    <p className='ca-text'>
                                        Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="row align-items-center justify-content-center">
                                <div className="col-5 d-flex justify-content-end">
                                    <img src="./src/assets/others/Frame.png" className='img-fluid mb-3' alt="image" />
                                </div>
                                <div className="col-9 col-md-7">
                                    <p className='ca-text'>
                                        Transform Your Mind & Soul: Discover Your Spiritual Path with Our Courses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner;
