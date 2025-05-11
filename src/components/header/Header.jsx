// import React from 'react';
// import { Link } from 'react-router-dom';
// import bannerImage from '../../assets/others/banner.png'; // Adjust path as needed


// import { useEffect } from 'react';




// const Header = () => {

//     useEffect(() => {
//         const submenuToggles = document.querySelectorAll('.dropdown-submenu > .dropdown-toggle');

//         submenuToggles.forEach(toggle => {
//             toggle.addEventListener('click', function (e) {
//                 e.preventDefault();

//                 // Close other submenus
//                 document.querySelectorAll('.dropdown-submenu').forEach(menu => {
//                     if (menu !== toggle.parentElement) {
//                         menu.classList.remove('show');
//                     }
//                 });

//                 // Toggle current
//                 toggle.parentElement.classList.toggle('show');
//             });
//         });

//         // Cleanup on unmount
//         return () => {
//             submenuToggles.forEach(toggle => {
//                 toggle.removeEventListener('click', () => { });
//             });
//         };
//     }, []);

//     return (
//         <header className="">

//             <div
//                 className="banner"
//                 style={{ backgroundImage: `url(${bannerImage})` }}
//             ></div>
//             <nav>
//                 <Link to="/products" className="mr-4"> Products </Link>
//                 <Link to="/about" className="mr-4">About</Link>
//                 <Link to="/contact">Contact</Link>
//             </nav>

//             <div className="container">
//                 <nav class="navbar navbar-expand-lg">
//                     <div class="container-fluid">
//                         {/* <a class="navbar-brand" href="#">Navbar</a> */}
//                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span class="navbar-toggler-icon"></span>
//                         </button>
//                         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li class="nav-item">
//                                     <Link class="nav-link active" aria-current="page" to="#">Home</Link>
//                                 </li>

//                                 <li className="nav-item dropdown">
//                                     <Link
//                                         className="nav-link dropdown-toggle"
//                                         to="#"
//                                         role="button"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false"
//                                     >
//                                         Products
//                                     </Link>

//                                     <ul className="dropdown-menu">
//                                         <li className="dropdown-submenu position-relative">
//                                         <p
//   className="dropdown-item dropdown-toggle"
//   role="button"
//   onClick={(e) => e.preventDefault()}
// >
//   Product 1
// </p>
//                                             <ul className="dropdown-menu sub-dropdown">
//                                                 <li><Link className="dropdown-item" to="#">Sub Product 1.1</Link></li>
//                                                 <li><Link className="dropdown-item" to="#">Sub Product 1.2</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li><Link className="dropdown-item" to="#">Product 2</Link></li>
//                                     </ul>
//                                 </li>


//                                 <li class="nav-item dropdown">
//                                     <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         Services
//                                     </Link>
//                                     <ul class="dropdown-menu">
//                                         <li><Link class="dropdown-item" to="#">  Service 1</Link></li>
//                                         <li><Link class="dropdown-item" to="#">  Service 2</Link></li>
//                                     </ul>
//                                 </li>

//                                 <li class="nav-item">
//                                     <Link class="nav-link" to="#">Courses</Link>
//                                 </li>
//                                 <li class="nav-item">
//                                     <Link class="nav-link" to="#">Blogs</Link>
//                                 </li>

//                                 <li class="nav-item">
//                                     <Link class="nav-link" to="#">Videos</Link>
//                                 </li>
//                                 <li class="nav-item">
//                                     <Link class="nav-link" to="#">Contact Us</Link>
//                                 </li>

//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import bannerImage from '../../assets/others/banner.png';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [htmlcssOpen, setHtmlcssOpen] = useState(false);
    const [jsOpen, setJsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }} >
                <img src="./src/assets/others/cancel.png" alt="cancel image" className='img-fluid cancel' />
                <p className='mb-0 text-center pt-3 quick'>QUICK BUY! Get up to 25% off on All Stones</p>
            </div>

            <div className='container pt-3 pb-md-4'>
                <div className="row align-items-center">
                    <div className="col-12 col-md-5 col-lg-3">
                        <div className="logo mb-4">
                            <img src="./src/assets/logo.png" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6">
                        <div class="top-input d-flex mb-4">
                            <div className="loc d-flex align-items-center justify-content-center">
                                <IoLocationSharp className='text-white me-1 fs-4' />
                                <p className='mb-0 '>Deliver to <br /> 110094</p>
                            </div>
                            <div>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search for medication & Wellness products.." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-3">
                        <div className="login d-flex align-items-center">
                            <img src="./src/assets/others/cart.png" className='img-fluid' alt="cart" />
                            <div className="login d-flex align-items-center ms-4">
                                <img src="./src/assets/others/login.png" className='img-fluid me-3' alt="login" />
                                <p className='mb-0 signin'>SIGN IN / SIGN UP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className='bg-white container'>
                <div className="navbar">
                    <IoReorderThreeOutline className='text-dark ham fs-3' onClick={toggleSidebar} />

                    <div className={`nav-links ${sidebarOpen ? 'show' : ''}`}>
                        <div className="sidebar-logo">
                            <IoReorderThreeOutline className='text-dark fs-3' onClick={toggleSidebar} />
                        </div>
                        <ul className="links">
                            <li><Link to="/">Home</Link></li>
                            <li className='sm'>
                                <Link to="#"> Products </Link>
                                <FaChevronDown className='ms-2' onClick={() => setHtmlcssOpen(!htmlcssOpen)} />

                                <ul className={`htmlCss-sub-menu sub-menu ${htmlcssOpen ? 'show' : ''}`}>
                                    <li className="more">
                                        <span onClick={() => setMoreOpen(!moreOpen)}>
                                            <Link to="#"> Dhoop Cones </Link>
                                            <FaChevronRight className='ms-2' />
                                        </span>
                                        <ul className={`more-sub-menu sub-menu ${moreOpen ? 'show' : ''}`}>
                                            <li><Link to="/product-details"> Jar Cones  </Link></li>
                                            <li><Link to="/product-details"> Backflow Cone Dhoop </Link></li>
                                            <li><Link to="/product-details"> Buddha Red Incense Cone </Link></li>
                                            <li><Link to="#/product-details"> Cone Sandal Dhoop </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/products"> Incense Holders </Link></li>
                                    <li><Link to="/products"> Yantras </Link></li>
                                    <li><Link to="/products"> Incense Sticks </Link></li>
                                    <li><Link to="/products"> Pooja Thali Sets </Link></li>
                                    <li><Link to="/products"> Shankh </Link></li>
                                    <li><Link to="/products"> Kalash </Link></li>
                                    <li><Link to="/products"> Book Rests </Link></li>

                                </ul>
                            </li>
                            <li>
                                <Link to="#"> Services </Link>
                                <FaChevronDown className='ms-2' onClick={() => setJsOpen(!jsOpen)} />
                                <ul className={`js-sub-menu sub-menu ${jsOpen ? 'show' : ''}`}>
                                    <li><Link to="#"> Service 1 </Link></li>
                                    <li><Link to="#"> Service 2 </Link></li>
                                    <li><Link to="#"> Service 3 </Link></li>
                                    <li><Link to="#"> Service 4 </Link></li>
                                </ul>
                            </li>
                            <li><Link to="#"> Courses </Link></li>
                            <li><Link to="#"> Blogs </Link></li>
                            <li><Link to="#"> Videos </Link></li>
                            <li><Link to="#"> Contact Us </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;

