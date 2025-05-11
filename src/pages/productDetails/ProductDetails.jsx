import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoCartOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const PrevArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow left-arrow`} onClick={onClick}>
        <FaAngleLeft />
    </div>
);

const NextArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow right-arrow`} onClick={onClick}>
        <FaAngleRight />
    </div>
);



const relatedProduct = [
    {
        id: 1,
        title: 'Musk INCENSE CONES',
        subtitle: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. ',
        date: '08-05-2022',
        image: './src/assets/products/product12.png',
        link: '#',
        cart: 'Add to cart',
    },
    {
        id: 2,
        title: 'Sage INCENSE CONES',
        subtitle: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness. ',
        date: '11-05-2022',
        image: './src/assets/products/product16.png',
        link: '#',
        cart: 'Add to cart',
    },
    {
        id: 3,
        title: 'Sage INCENSE CONES',
        subtitle: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of',
        date: '11-07-2022',
        image: './src/assets/products/product15.png',
        link: '#',
        cart: 'Add to cart',
    },
    {
        id: 4,
        title: 'Frankincense and Myrrh',
        subtitle: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of',
        date: '11-07-2022',
        image: './src/assets/products/product9.png',
        link: '#',
        cart: 'Out of Stock',
    }
];


const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3 },
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
        },
    ],
};

const ProductDetails = () => {
    return (
        <>
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

                    <div className="wrapper_productDetails mt-5">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                                <div className="pro_img mb-3">
                                    <img src="./src/assets/productDetails/product1.png" className='img-fluid first mb-3' alt="product image" />
                                    <img src="./src/assets/productDetails/product4.png" className='img-fluid mb-3' alt="product image" />
                                    <img src="./src/assets/productDetails/product3.png" className='img-fluid mb-3' alt="product image" />
                                    <img src="./src/assets/productDetails/product2.png" className='img-fluid mb-3' alt="product image" />
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4 col-xl-4">
                                <div className="wrapper-main-pro-img text-center rounded-3 mb-3">
                                    <img src="./src/assets/productDetails/product1.png" className='img-fluid mb-3 rounded-3' alt="product image" />
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 col-xl-6">
                                <div className="position-relative mb-3">
                                    <div className="pro-details">
                                        <p className='mb-1 detail-title'>Brand: Rashmi Divine Solutions</p>
                                        <p className='mb-1 detail-title'>Scent: Floral</p>
                                        <p className='mb-3 detail-title'>Availability: Only 2 in Stock</p>
                                        <h6 className="pro-title">Lavender Dhoop Cone Sticks Pack of 100-Piece/Jar by Rashmi Divine</h6>
                                        <img src="./src/assets/products/stars.png" className='img-fluid mb-3' alt="product image" />
                                        <ul>
                                            <li className='mb-3 detail-title'>Lavender Dhoop sticks activate your senses and relax the nerves, making you less anxious. They also hold the power to cleanse the air.</li>
                                            <li className='mb-3 detail-title'>Lavender Crafted out of the finest quality ingredients, this leaves a magnificent and alluring fragrance and adds more to your ‘spiritual time</li>
                                            <li className='mb-3 detail-title'>Lavender Dhoop sticks are Charcoal Free Dhoop Sticks with soothing fragrances which don't cause eye irritation and headache</li>
                                        </ul>
                                    </div>

                                    <div className="pro-details_btn mt-md-5">
                                        <hr />
                                        <p className='usd-title'>USD(incl. of all taxes)</p>
                                        <p><span className='pro-title me-3'>$4.05</span> <span className='discount'><del>$8.00</del></span></p>

                                        <div className=''>
                                            <div className="row align-items-center">
                                                <div className="col-12 col-sm-3 col-xl-3">
                                                    <nav aria-label="Page navigation example">
                                                        <ul class="pagination pagination2 mb-0">
                                                            <li class="page-item"><a class="page-link text-dark fw-bold" href="#"> - </a></li>
                                                            <li class="page-item"><a class="page-link text-dark fw-bold" href="#"> 1 </a></li>
                                                            <li class="page-item"><a class="page-link text-dark fw-bold" href="#"> + </a></li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="col-12 col-sm-9 col-xl-9">
                                                    <div className="my-3 my-sm-0 text-lg-end text-xl-start buyNow">
                                                        <Link to="#" className="blog-btn me-3"> Buy Now</Link>
                                                        <Link to="#" className="blog-btn2 me-3"> Add to Cart </Link>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="product-description">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 d-flex justify-content-center">
                                <div className="desc-btn">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product Information</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-9">
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active desc-content" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                        Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.
                                    </div>
                                    <div class="tab-pane fade desc-content" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                        Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.
                                    </div>
                                    <div class="tab-pane fade desc-content" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                        Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section>
                <div className="container">
                    <div className="relate-products">
                        <h2 class="related-title text-center"> Related Products </h2>

                        <Slider {...sliderSettings}>
                            {relatedProduct.map((prod) => (
                                <div key={prod.id} className="">

                                    <div className="prod_card">
                                        <div className="prod-img d-flex justify-content-center">
                                            <img src={prod.image} className="img-fluid" alt="prod" />
                                        </div>
                                        <div className="blog_content p-3">
                                            <div className="text-center mt-4 pt-md-3">
                                                <Link to={prod.link} className="blog-btn" style={{
                                                      background: prod.cart === 'Out of Stock' ? '#C6C6C6' : '#DC8064'
                                                }}> <IoCartOutline className='fw-bold' /> {prod.cart} </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='text-center mt-3'>
                                        <p className='product-title mb-2'>{prod.title}</p>
                                        <p><span className='pro-title1 me-3'>$0.75</span> <span className='discount'><del>$2.66</del></span></p>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
