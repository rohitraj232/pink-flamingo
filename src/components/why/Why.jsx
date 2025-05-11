import React from 'react'

const Why = () => {
    return (
        <>
            <section>
                <div class="container">
                    <div className="wrapper_whyChoose p-4" style={{ backgroundColor: '#FFF2F8' }}>
                        <h2 class="section-title"> Why PINK FLAMINGO ? </h2>

                        <div className="main_whyChoose">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-5">
                                    <div className="why_img text-center text-md-end">
                                        <img src="./src/assets/others/why-choose.png" className='img-fluid mb-4' alt="why image" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="whyChoose_content">
                                        <div className="d-flex align-items-start content_p">
                                            <img src="./src/assets/others/check-icon.png" className='img-fluid me-2' alt="why image" />
                                            <p> Spirituality can provide them with a framework for understanding the universe and their role in it </p>
                                        </div>
                                        <div className="d-flex align-items-start content_p">
                                            <img src="./src/assets/others/check-icon.png" className='img-fluid me-2' alt="why image" />
                                            <p> Coping with stress and uncertainty </p>
                                        </div>
                                        <div className="d-flex align-items-start content_p">
                                            <img src="./src/assets/others/check-icon.png" className='img-fluid me-2' alt="why image" />
                                            <p> Spirituality can be a path to personal growth and self-discovery </p>
                                        </div>
                                        <div className="d-flex align-items-start content_p">
                                            <img src="./src/assets/others/check-icon.png" className='img-fluid me-2' alt="why image" />
                                            <p> Spirituality can provide people with a sense of community and connection with others </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why;
