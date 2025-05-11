import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";


const productData = [
    {
        id: 1,
        image: "./src/assets/products/product1.png",
        title: "DHOOP INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$2.05"
    },
    {
        id: 2,
        image: "./src/assets/products/product2.png",
        title: "HEM Incense",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$1.05"
    },
    {
        id: 3,
        image: "./src/assets/products/product3.png",
        title: "Mystic Temple Incense",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$2.75"
    },
    {
        id: 4,
        image: "./src/assets/products/product4.png",
        title: "SAC Incense",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$5.05"
    },
    {
        id: 5,
        image: "./src/assets/products/product5.png",
        title: "Frankincense and Myrrh",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$3.05"
    },
    {
        id: 6,
        image: "./src/assets/products/product6.png",
        title: "Eucalyptus INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$10.05"
    },
    {
        id: 7,
        image: "./src/assets/products/product7.png",
        title: "Lavender INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$4.05"
    },
    {
        id: 8,
        image: "./src/assets/products/product8.png",
        title: "Sage INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$0.75"
    },
    {
        id: 9,
        image: "./src/assets/products/product9.png",
        title: "Frankincense and Myrrh",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$3.05"
    },
    {
        id: 10,
        image: "./src/assets/products/product10.png",
        title: "DHOOP INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$2.55"
    },
    {
        id: 11,
        image: "./src/assets/products/product11.png",
        title: "Eucalyptus INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$10.05"
    },
    {
        id: 12,
        image: "./src/assets/products/product12.png",
        title: "Orange Blossom INCENSE",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$4.05"
    },
    {
        id: 13,
        image: "./src/assets/products/product13.png",
        title: "Musk INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$0.75"
    },
    {
        id: 14,
        image: "./src/assets/products/product14.png",
        title: "Bergamot and Myrrh",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$3.05"
    },
    {
        id: 15,
        image: "./src/assets/products/product15.png",
        title: "Gardenia INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$10.05"
    },
    {
        id: 16,
        image: "./src/assets/products/product16.png",
        title: "Yerba Santa INCENSE CONES",
        subtitle: "4 IN 1 Long 100 Pcs Dhoop Cones For Regular Use",
        ratingImg: "./src/assets/products/stars.png",
        price: "$4.05"
    }
];

const Products = () => {
    return (
        <section>
            <div className="container">
                <div className="breadCrumb">
                    <div style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="#" className='b-link'> Product </Link></li>
                            <li className="breadcrumb-item"><Link to="#" className='b-link'> Dhoop Cones </Link></li>
                            <li className="breadcrumb-item active" aria-current="page"> Jar Cones </li>
                        </ol>
                    </div>
                </div>

                <div className="wrapper_filter d-flex mt-3 mb-4">
                    <div className="filter d-flex justify-content-center align-items-center me-3">
                        <span> Price ($) <FaCaretDown /> </span>
                    </div>
                    <div className="filter d-flex justify-content-center align-items-center">
                        <span> Category <FaCaretDown /> </span>
                    </div>
                </div>

                <div className="wrapper_products">
                    <div className="row align-items-center justify-content-center">
                        {productData.map(product => (
                            <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="product_card mb-4">
                                    <div className="product-img">
                                        <img src={product.image} className='img-fluid mb-4' alt="product" />
                                    </div>
                                    <div className="product-details">
                                        <p className='product-title mt-3 mb-2'>{product.title}</p>
                                        <p className='product-subtitle mb-2'>{product.subtitle}</p>
                                        <img src={product.ratingImg} className='img-fluid mb-2' alt="rating" />
                                        <p className='product-price'>{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="wrapper_pagination d-flex align-items-center justify-content-center my-3 my-md-5 py-md-2">
                    <div aria-label="Page navigation example">
                        <ul class="pagination pagination1">
                            <li class="page-item me-3"><a class="page-link page_btn page-click" href="#">1</a></li>
                            <li class="page-item me-3"><a class="page-link page_btn" href="#">2</a></li>
                            <li class="page-item me-3"><a class="page-link page_btn" href="#">3</a></li>
                            <li class="page-item me-3"><a class="page-link page_btn" href="#">4</a></li>
                            <li class="page-item me-3"><a class="page-link page_btn" href="#">5</a></li>
                            <li class="page-item me-3"><a class="page-link page_btn page-next_btn" href="#">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
