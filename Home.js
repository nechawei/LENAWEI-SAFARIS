import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button className="lg:hidden text-white" onClick={toggleMenu}>
        &#9776;
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-blue-500 text-white p-4">
          <Link href="#gallery" className="block py-2">Gallery</Link>
          <Link href="#faq" className="block py-2">FAQs</Link>
          {/* Add other links similarly */}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [countdown, setCountdown] = useState(864000);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const eventDate = new Date('2025-02-28T09:00:00'); // Adjust this date as needed

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeLeft = eventDate - now;
      setCountdown(timeLeft > 0 ? timeLeft : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 via-yellow-300 to-blue-500 text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Lenawei Safaris</h1>
        <p className="text-lg mt-2">Adventures That Teach, Memories That Last!</p>
      </header>

      <nav className="text-center mb-5">
        <MobileNav />
        <Link href="#gallery" className="mx-4">Gallery</Link>
        <Link href="#faq" className="mx-4">FAQs</Link>
        <Link href="#testimonials" className="mx-4">Testimonials</Link>
        <Link href="#booking" className="mx-4">Book Now</Link>
        <Link href="#contact" className="mx-4">Contact</Link>
        {/* Add other links as necessary */}
      </nav>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto p-5"
      >
        <h2 className="text-2xl font-semibold text-center">Next Safari Starts In:</h2>
        <p className="text-center text-3xl mt-3 font-bold">{formatTime(countdown)}</p>
      </motion.section>

      <section id="requirements" className="container mx-auto p-5 mt-10 text-center">
        <h2 className="text-2xl font-semibold">Student Safari Essentials 🌿🎒</h2>
        <ul className="mt-4 text-lg">
          <li>👕 Comfortable clothing & sturdy shoes for adventure.</li>
          <li>🎒 Backpack for water, snacks, and discoveries.</li>
          <li>📖 Notebook & pen – record the wild wonders!</li>
          <li>🔭 Binoculars for spotting animals up close.</li>
          <li>💧 Reusable water bottle – hydration is key!</li>
          <li>🦟 Sunscreen & bug repellent – nature loves you, but bugs do too!</li>
          <li>🌍 Respect & enthusiasm – bring your best safari spirit!</li>
          <li>❤️ Medical alert bracelet (if needed) – stay safe while having fun!</li>
          <li>📜 Permission slip – adventure approved by parents/guardians!</li>
          <li>🚑 Health insurance details – be covered for any emergencies!</li>
        </ul>
        <Button className="mt-4 bg-green-500">Download Full Checklist</Button>
      </section>

      <footer className="text-center py-6 bg-blue-700 mt-10">
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
          {/* Add other social media icons */}
        </div>
        <div className="mt-4">
          <Link href="/privacy-policy" className="text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-white ml-4">Terms of Service</Link>
        </div>
        <p className="mt-4">© 2025 Lenawei Safaris. All rights reserved.</p>
      </footer>
    </div>
  );
}
