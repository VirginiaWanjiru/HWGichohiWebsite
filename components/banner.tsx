import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "@/app/home/home.module.css";
import { useRouter } from "next/navigation";

interface Slide {
  image: any;
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
      image: "/images/nairobi3.jpg",
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

  // Automatically switch slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.landing}>
      <div
        className={styles.carousel}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          willChange: "transform",
        }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <div
              className="flex items-center justify-start w-full h-screen md:min-h-[85vh] lg:min-h-[99vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="flex flex-col w-full px-4 md:px-8 gap-6 md:gap-8 text-white max-w-4xl ml-8 md:ml-16">
                <p className="text-left text-6xl md:text-6xl lg:text-6xl font-bold mt-24">
                  {slide.text}
                </p>
                <p className="text-left text-xl md:text-2xl">{slide.name}</p>
                <button
                  onClick={() => router.push(slide.buttonLink)}
                  className="self-start py-4 px-8 font-extrabold uppercase max-w-xs rounded-lg text-lg md:text-xl bg-red-600 hover:bg-red-900 transition-colors duration-300 ease-in-out"
                >
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
