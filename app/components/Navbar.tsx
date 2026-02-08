'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-white">
                    Mother India <span className="text-orange-500">Travels</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-bold text-white hover:text-orange-400 transition-colors">Home</Link>
                    <Link href="/personalized-trips" className="text-sm font-bold text-white hover:text-orange-400 transition-colors">Personalized Trips</Link>
                    <Link href="/experience" className="text-sm font-bold text-white hover:text-orange-400 transition-colors">The Experience</Link>
                    <Link href="/about" className="text-sm font-bold text-white hover:text-orange-400 transition-colors">About Us</Link>
                    <Link href="/book">
                        <button className="rounded-full bg-orange-600 px-6 py-2 text-sm font-bold text-white hover:bg-orange-700 transition-colors">
                            Book Now
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            <Link href="/" className="text-white text-lg">Home</Link>
                            <Link href="/personalized-trips" className="text-white text-lg">Personalized Trips</Link>
                            <Link href="/experience" className="text-white text-lg">The Experience</Link>
                            <Link href="/about" className="text-white text-lg">About Us</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;