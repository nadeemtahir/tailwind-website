import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="about py-16 bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* About Text Content */}
        <div className="about-content">
          <h2 className="about-title text-3xl sm:text-4xl font-semibold text-white mb-6">
            About TechInsight
          </h2>
          <p className="about-description text-base sm:text-lg text-gray-300 leading-relaxed">
            TechInsight is your gateway to the latest in technology, innovation, and industry trends. Our mission is to empower enthusiasts and professionals alike with deep insights, expert analysis, and the latest news shaping the future of technology. Join us as we delve into the ever-evolving digital landscape, covering everything from AI advancements to software development, cybersecurity, and beyond.
          </p>
        </div>
        
        {/* About Image */}
        <div className="about-image">
          <img src="/images/download 1.jpg" alt="About TechInsight" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
