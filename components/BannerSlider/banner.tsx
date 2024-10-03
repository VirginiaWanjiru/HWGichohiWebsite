import React, { useState, useEffect } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from '@/app/home/home.module.css';
import { useRouter } from 'next/navigation';

interface Slide {
  image: string;
  text: string;
  name:string,
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC = () => {
  const router = useRouter();

  // Carousel data with images, text, and button labels
  const slides: Slide[] = [
    {
      image: "/images/image1.jpg",
      text: "Delivering Results in Assurance, Advisory and Compliance",
      name:"H.W GICHOHI AND CO CPA (K)",
      buttonText: "Contact Us",
      buttonLink: "/#contact-us",
    },
    {
      image: "/images/nairobi5.jpg",
      text: "Tailored Financial Solutions for Your Business",
      name:"H.W GICHOHI AND CO CPA (K)",
      buttonText: "Learn More",
      buttonLink: "/#learn-more",
    },
    {
      image: "/images/nairobi3.jpg",
      text: "Partnering with You for Sustainable Growth",
      name:"H.W GICHOHI AND CO CPA (K)",
      buttonText: "Our Services",
      buttonLink: "/#services",
    },
    {
      image: "/images/nairobi.jpg",
      text: "Trusted Advisors, Committed to Your Success",
      name:"H.W GICHOHI AND CO CPA (K)",
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
    setCurrentSlide((prevSlide) => (prevSlide + 1 - slides.length) % slides.length);
  };

  return (
    <>
      <div className={styles.landing}>
      <ProgressBar />
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
                  boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)',
                
                }}
              >
                
                <div className="flex flex-col w-full h-full px-8 md:px-8 gap-8 md:max-w-4xl md:gap-8 text-[#FFFFFF] mt-60">
                  <h1 className="md:text-start mt-24 md:text-5xl font-serif">
                    {slide.text}
                    
                  </h1>
                  <p>{slide.name}</p>
                  <button
                    onClick={() => router.push(slide.buttonLink)}
                    className="bg-[#C00000] py-4 font-extrabold uppercase md:w-1/3 max-w-[20rem] rounded-2xl md:text-2l hover:bg-sky-700 mt-8"
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
