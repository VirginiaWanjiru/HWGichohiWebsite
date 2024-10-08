import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "@/app/home/home.module.css";
import { useRouter } from "next/navigation";

interface Slide {
  image: string;
  text: string;
  name: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC = () => {
  const router = useRouter();

  // Carousel data with images, text, and button labels
  const slides: Slide[] = [
    {
      image: "/images/image1.jpg",
      text: "Delivering Results in Advisory and Assurance ",
      name: "H.W. Gichohi & Co. CPA(K)",
      buttonText: "Contact Us",
      buttonLink: "/#contact-us",
    },
    {
      image: "/images/nairobi5.jpg",
      text: "Tailored Financial Solutions for Your Business",
      name: "H.W. Gichohi & Co. CPA(K)",
      buttonText: "Learn More",
      buttonLink: "/#learn-more",
    },
    {
      image: "/images/nairobi3.jpg",
      text: "Partnering with You for Sustainable Growth",
      name: "H.W. Gichohi & Co. CPA(K)",
      buttonText: "Our Services",
      buttonLink: "/#services",
    },
    {
      image: "/images/nairobi.jpg",
      text: "Trusted Advisors, Committed to Your Success",
      name: "H.W. Gichohi & Co. CPA(K)",
      buttonText: "Get Started",
      buttonLink: "/#get-started",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handler to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handler to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1 - slides.length) % slides.length
    );
  };

  return (
    <>
      <div className={styles.landing}>
       
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            willChange: "transform", // Hint to the browser for smoother animation
          }}
        >
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <div
                className="flex items-center h-full w-full md:min-h-[85vh] lg:min-h-[99vh]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
                  height:"99vh",

                }}
              >
                <div className="flex flex-col w-full h-full px-8 md:px-8 gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF] mt-60 ml-10">
                  <h1 className="md:text-start mt-24 md:text-6xl ">
                    {slide.text}
                  </h1>
                  <p>{slide.name}</p>
                  <button
                    onClick={() => router.push(slide.buttonLink)}
                    className="py-4 font-extrabold uppercase md:w-1/4 max-w-[20rem] rounded md:text-2l bg-red-600 hover:bg-red-900 mt-8 transition-colors duration-300 ease-in-out"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*
        <button className={styles.prevButton} onClick={handlePrev}>
          &#10094; {/* Left arrow symbol
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095; {/* Right arrow symbol 
        </button> */}
      </div>
    </>
  );
};

export default Banner;
