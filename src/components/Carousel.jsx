import React, { useState } from "react";
import Slide1 from '../assets/carousel/slide1.jpeg';
import Slide2 from '../assets/carousel/slide2.webp';

const Carousel = () => {
    // Menambahkan gambar ke dalam array images
    const images = [Slide1, Slide2];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full mx-auto">
            <div className="relative w-full">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                />
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 btn btn-circle bg-white bg-opacity-50 hover:bg-opacity-75 z-10"
                >
                    ❮
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 btn btn-circle bg-white bg-opacity-50 hover:bg-opacity-75 z-10"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Carousel;