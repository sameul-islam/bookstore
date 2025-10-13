import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

import Testimonial1 from "../../assets/website/testimonial1.jpg";
import Testimonial2 from "../../assets/website/testimonial2.jpg";
import Testimonial3 from "../../assets/website/testimonial3.jpg";
import Testimonial4 from "../../assets/website/testimonial4.jpg";
import Testimonial5 from "../../assets/website/testimonial5.jpg";
import Testimonial6 from "../../assets/website/testimonial6.jpg";
import Testimonial7 from "../../assets/website/testimonial7.jpg";
import Testimonial8 from "../../assets/website/testimonial8.jpg";
import Testimonial9 from "../../assets/website/testimonial9.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Alice",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial1,
  },
  {
    id: 2,
    name: "Anastasiya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial2,
  },
  {
    id: 3,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial3,
  },
  {
    id: 4,
    name: "Samantha",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial4,
  },
  {
    id: 5,
    name: "Brown",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial5,
  },
  {
    id: 6,
    name: "Babar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial6,
  },
  {
    id: 7,
    name: "Zara Islam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial7,
  },
  {
    id: 8,
    name: "Nadia Khanam",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial8,
  },
  {
    id: 9,
    name: "Subrina Ahmed",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde quia omnis possimus inventore reprehenderit illo deserunt minus aliquam.",
    img: Testimonial9,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div data-aos="fade-up" className="py-16">
      <div className="container m-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14 max-w-[650px] mx-auto">
          <p className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">
            What our Customers Say
          </p>
          <h1 className="text-3xl font-bold">
            Testi
            <span className="text-amber-700 dark:text-amber-400">monial</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            cupiditate obcaecati molestias doloremque amet iste. Rem repudiandae
            possimus quasi nobis.
          </p>
        </div>

        {/* Slider Section */}
        <div className="max-w-[900px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="px-4">
                <div className="relative dark:bg-[#dfe6e9] bg-[#3c6382] shadow-xl rounded-xl p-8 flex flex-col items-center gap-5 hover:scale-105 duration-300">
                  {/* Quote Icon */}
                  <FaQuoteRight className="text-amber-500 text-4xl absolute top-4 right-4 opacity-40" />

                  {/* Image */}
                  <img
                    src={data.img}
                    alt={data.name}
                    className="rounded-full w-24 h-24 border-4 border-amber-500 shadow-md"
                  />

                  {/* Text */}
                  <p className="text-gray-200 dark:text-gray-700 text-center text-sm leading-relaxed">
                    {data.text}
                  </p>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-white dark:text-gray-800">
                    {data.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
