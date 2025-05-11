import React from 'react'
import { Link } from 'react-router-dom';

const TopCategories = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="wrapper_top-categories">
                        <h3>Shop From Our Top Categories</h3>

                        <div className="top_categories">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/ctgr1.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2">Cone Dhoop</p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/cgtr2.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2"> Incense Holders </p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/cgtr3.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2"> Incense Sticks</p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/cgtr4.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2"> Shankh </p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/cgtr5.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2"> Kalash </p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="category_card text-center mb-3">
                                        <img src="./src/assets/categories/cgtr6.jpg" alt="category image"
                                            className="img-fluid rounded-3 mb-3 mb-md-4" />
                                        <p className="category_name mb-2"> Buddha Statue </p>
                                        <Link to="#" className="shop_now-btn"> Shop Now </Link>
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

export default TopCategories;
