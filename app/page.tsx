import HeroSection from "./components/HeroSection";
import GroupTravels from "./components/GroupTravels";
import Features from "./components/Features";
import InstagramGallery from "./components/InstagramGallery";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import JournalSection from "./components/JournalSection";
import InteractiveMap from "./components/InteractiveMap";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <Navbar />
      <HeroSection />
      <InstagramGallery />
      <InteractiveMap />
      <Features />
      <GroupTravels />
      
      {/* Consultation Banner (Simple Text CTA) */}
      <section className="bg-orange-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to plan your dream trip?</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with Leo and Tanu to customize your perfect Indian getaway.
        </p>
        <Link href="/book" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-colors">
          Book Consultation
        </Link>
      </section>
      <Footer />
    </main>
  );
}