import React from "react";

const Hero = () => {
  return (
    <div 
      className="hero bg-cover bg-center bg-no-repeat text-orange-700 py-24"
      style={{
        backgroundImage: "url('/images/download2.jpg')", // Light mode image
      }}
    >
      <div className="hero-container max-w-screen-lg mx-auto px-6">
        <div className="hero-content text-center">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to TechInsight
          </h1>
          <h4 className="hero-subtitle text-lg sm:text-xl mb-6">
            Innovative insights for a digital world
          </h4>
          <p className="hero-description text-sm sm:text-base md:text-lg mb-8">
            Join us to explore the latest trends and breakthroughs in technology. Discover insights, expert analysis, and tools to keep you at the forefront of innovation.
          </p>
          <button className="hero-button bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>  
  );
};

export default Hero;
