"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Address Section */}
        <div className="footer-logo">
          <address className="footer-address not-italic">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </address>
        </div>
        
        {/* Links Section */}
        <div className="footer-links space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="footer-link hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="footer-link hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="/contact" className="footer-link hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Subscribe Section */}
        <div className="footer-newsletter">
          <p className="newsletter-title text-lg font-semibold mb-4">Stay Updated</p>
          <button className="subscribe-button bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            SUBSCRIBE
          </button>
        </div>
        
      </div>
      
      {/* Footer Bottom Text */}
      <div className="footer-bottom text-center mt-8">
        <p>&copy; 2023 Tech Insights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
