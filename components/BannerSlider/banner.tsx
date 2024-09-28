import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from '@/app/home/home.module.css';
import { useRouter } from 'next/navigation';

interface Slide {
  image: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC = () => {
  const router = useRouter();

  // Carousel data with images, text, and button labels
  const slides: Slide[] = [
    {
      image: "/images/1.jpg",
      text: "Delivering Results in Assurance, Advisory and Compliance",
      buttonText: "Contact Us",
      buttonLink: "/#contact-us",
    },
    {
      image: "/images/cafeteria.png",
      text: "Tailored Financial Solutions for Your Business",
      buttonText: "Learn More",
      buttonLink: "/#learn-more",
    },
    {
      image: "/images/3.jpg",
      text: "Partnering with You for Sustainable Growth",
      buttonText: "Our Services",
      buttonLink: "/#services",
    },
    {
      image: "/images/4.jpg",
      text: "Trusted Advisors, Committed to Your Success",
      buttonText: "Get Started",
      buttonLink: "/#get-started",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handler to go to the next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Handler to go to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className={styles.landing}>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <div
                className="flex items-center h-full w-full md:min-h-[85vh] lg:min-h-[99vh]"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  boxShadow: 'inset 0 0 0 1000px rgba(86, 81, 81, 0.31)',
                }}
              >
                <ProgressBar />
                <div className="flex flex-col w-full h-full px-8 md:px-8 gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF]">
                  <h1 className="md:text-start mt-24 md:text-6xl font-serif">
                    {slide.text}
                  </h1>
                  <button
                    onClick={() => router.push(slide.buttonLink)}
                    className="bg-[#C00000] py-4 font-extrabold uppercase md:w-1/3 max-w-[20rem] rounded-2xl md:text-2l hover:bg-sky-700"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <button className={styles.prevButton} onClick={handlePrev}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>
      <hr />
    </>
  );
};

export default Banner;
