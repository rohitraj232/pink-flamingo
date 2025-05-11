import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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


const blogData = [
  {
    id: 1,
    title: 'The Power of Mindfulness',
    subtitle: 'Mindfulness is the practice of being present and fully engaged in the moment. It is about paying attention to our thoughts, feelings, and sensations in a non-judgmental way. ',
    date: '08-05-2022',
    image: './src/assets/blogs/blog1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Connecting with the Divine',
    subtitle: 'Connecting with the Divine refers to the process of establishing a spiritual connection or relationship with a higher power, such as God, the Universe, or a higher consciousness. ',
    date: '11-05-2022',
    image: './src/assets/blogs/blog2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'The Beauty of Forgiveness',
    subtitle: 'The beauty of forgiveness lies in its transformative power. It has the ability to heal wounds and to restore relationships that have been damaged. Forgiveness brings a new level of',
    date: '11-07-2022',
    image: './src/assets/blogs/blog3.png',
    link: '#',
  }
];

const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
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
  
const Blogs = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Our Latest Blogs</h2>

        <Slider {...sliderSettings}>
          {blogData.map((blog) => (
            <div key={blog.id} className="px-2">
              <div className="blog_card">
                <div className="blog-img">
                  <img src={blog.image} className="img-fluid" alt="blog" />
                </div>
                <div className="blog_content p-3">
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-subtitle">{blog.subtitle}</p>
                  <div className="text-center mt-4 pt-md-3">
                    <Link to={blog.link} className="blog-btn">Read More</Link>
                  </div>
                  <p className="blog-date mb-1 mt-4">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;
