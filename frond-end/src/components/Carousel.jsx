import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // High-quality images from Unsplash
    const images = [
        {
            src: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Mountain landscape with lake reflection"
        },
        {
            src: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Forest path with sunlight filtering through trees"
        },
        {
            src: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Tropical beach with crystal clear water"
        },
        {
            src: "https://images.unsplash.com/photo-1613332098721-054a53462d12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Snow-capped mountain peaks at sunset"
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying, images.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <div className="relative w-full max-w-full mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Main carousel container */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                {/* Images */}
                <div 
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* Gradient overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Auto-play indicator */}
                <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'
                    }`} />
                </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 py-6 bg-gradient-to-r from-gray-800 to-gray-900">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-20 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentSlide + 1} / {images.length}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 ease-out"
                    style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default Carousel;