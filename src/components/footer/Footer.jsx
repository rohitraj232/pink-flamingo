import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer-bg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="sign-up d-flex align-items-center my-5 ms-lg-5">
                            <MdOutlineEmail className='text-white fs-3' /> <p className='mb-0 ms-2'>Sign Up To Shop Now</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div class="position-relative">
                            <input type="email" className="form-control py-3" id="exampleFormControlInput1" placeholder="Enter your email" />
                            <button className='btn sub-btn'> SUBSCRIBE </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='hline' />

            <div className="container">
                <div className="row mt-5 mb-3 pt-md-3">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-links ">
                            <div className="links">
                                <h6>Contact Us</h6>
                                <p> <Link to="#" className='f-link'> Demo Store </Link> </p>
                                <p> <Link to="#" className='f-link'> No. 1258 Utawala, Nairobi, 01010 </Link></p>
                                <p> <Link to="#" className='f-link'> Kenya </Link></p>
                                <p> <Link to="#" className='f-link'> +25470101010 </Link></p>
                                <p> <Link to="#" className='f-link'> example@gmail.com </Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-links d-md-flex justify-content-md-center">
                            <div className="links">
                                <h6> Information </h6>
                                <p> <Link to="#" className='f-link'> Privacy Policy </Link> </p>
                                <p><Link to="#" className='f-link'> Refund Policy </Link> </p>
                                <p><Link to="#" className='f-link'> Shipping Policy </Link> </p>
                                <p><Link to="#" className='f-link'> Terms Of Service </Link> </p>
                                <p> <Link to="#" className='f-link'> Blogs </Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-links d-md-flex justify-content-md-center">
                            <div className="links">
                                <h6> Account </h6>
                                <p> <Link to="#" className='f-link'> Search </Link> </p>
                                <p><Link to="#" className='f-link'> About Us </Link> </p>
                                <p><Link to="#" className='f-link'> Faq </Link> </p>
                                <p><Link to="#" className='f-link'> Contact </Link> </p>
                                <p> <Link to="#" className='f-link'> Help </Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                        <div className="footer-links d-md-flex justify-content-lg-center">
                            <div className="links">
                                <h6> Quick Links </h6>
                                <p> <Link to="#" className='f-link'> Incense Sticks </Link> </p>
                                <p><Link to="#" className='f-link'> Shankh </Link> </p>
                                <p><Link to="#" className='f-link'> Kalash </Link> </p>
                                <p><Link to="#" className='f-link'> Incense Holders </Link> </p>
                                <p> <Link to="#" className='f-link'> Cone Dhoop </Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12 col-xl-4">
                        <div className="footer-links d-md-flex justify-content-xl-center">
                            <div className="links">
                                <h6> Social Media. </h6>
                                <p className='text-white'>Follow us on social media and stay updated.</p>
                                <div className='d-flex align-items-center mt-4'>
                                <div className='me-2'>
                                    <span className="sm-link">
                                        <FaTwitter className='fs-5 text-white' />
                                    </span>
                                </div>
                                <div className='me-2'>
                                    <span className="sm-link">
                                        <FaFacebookSquare className='fs-4 text-white' />
                                    </span>
                                </div>
                                <div className='me-2'>
                                    <span className="sm-link">
                                        <AiFillInstagram className='fs-4 text-white' />
                                    </span>
                                </div>
                                <div className='me-2'>
                                    <span className="sm-link">
                                        <FaYoutube className='fs-4 text-white' />
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
