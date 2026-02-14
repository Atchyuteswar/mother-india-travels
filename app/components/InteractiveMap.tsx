'use client';

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Map as MapIcon } from 'lucide-react';

const REGIONS = [
  {
    id: 'north',
    name: "The Himalayas",
    description: "Snow-capped peaks, spiritual monasteries, and trekking trails.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    lat: 32.2432, 
    lng: 77.1892
  },
  {
    id: 'west',
    name: "Royal Rajasthan",
    description: "Land of kings, golden deserts, and massive forts.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
    lat: 26.9124, 
    lng: 75.7873
  },
  {
    id: 'central',
    name: "Varanasi & UP",
    description: "The spiritual heart of India along the Ganges.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
    lat: 25.3176, 
    lng: 82.9739
  },
  {
    id: 'south',
    name: "Kerala & South",
    description: "Backwaters, coffee plantations, and temple towns.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    lat: 9.9312, 
    lng: 76.2673
  }
];

// Styles to make the map look like old paper (Sepia)
const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 20.5937,
  lng: 78.9629 
};

const vintageMapStyles = [
  { "elementType": "geometry", "stylers": [{ "color": "#E6D5C0" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#4A3B32" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#F4EBD9" }] },
  { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] },
  { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] },
  { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] },
  // Hide clutter
  { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  { "featureType": "transit", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }
];

const InteractiveMap = () => {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <section className="bg-[#F4EBD9] py-24 overflow-hidden relative border-t border-[#4A3B32]/10">
      
      {/* Fog Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-[#FFFFFF]/40 to-transparent animate-[drift_20s_linear_infinite]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#D97706]">
             <MapIcon className="h-5 w-5" />
             <span className="font-body tracking-widest uppercase text-sm">Interactive Guide</span>
          </div>
          <h2 className="font-heading text-6xl text-[#4A3B32] mb-4 drop-shadow-sm">The Land of Legends</h2>
          <p className="font-body text-xl text-[#4A3B32]/70 italic">"Select a marker to uncover the journey."</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Field Note Card */}
          <div className="order-2 lg:order-1 h-full min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="bg-[#E6D5C0] p-4 shadow-2xl border border-[#4A3B32]/20 relative max-w-md w-full rotate-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#F4EBD9]/80 backdrop-blur-sm border-l border-r border-[#4A3B32]/10 shadow-sm rotate-1 z-30"></div>

                <div className="h-64 overflow-hidden relative border-b-4 border-[#F4EBD9]">
                  <img 
                    src={activeRegion.image} 
                    alt={activeRegion.name} 
                    className="w-full h-full object-cover sepia-[.2]" 
                  />
                </div>
                
                <div className="p-8 bg-[#F4EBD9] border-t border-[#4A3B32]/10 mt-1">
                  <h3 className="font-heading text-4xl text-[#4A3B32] mb-3">{activeRegion.name}</h3>
                  <p className="font-body text-xl text-[#4A3B32]/80 mb-6 leading-relaxed">
                    {activeRegion.description}
                  </p>
                  <button className="group flex items-center gap-2 text-[#D97706] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Google Map (Vintage Style) */}
          <div className="order-1 lg:order-2 relative w-full aspect-square flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-[600px] max-h-[600px] rounded-full overflow-hidden border-4 border-[#E6D5C0] shadow-2xl">
               
              {/* REMEMBER: Replace 'YOUR_API_KEY' with your actual key */}
              <LoadScript googleMapsApiKey="AIzaSyDhQ9Hdj4_TZ5utKX9uGfneBLavYku0Hi4">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={4.5} 
                  options={{
                    styles: vintageMapStyles, 
                    disableDefaultUI: true,   
                    zoomControl: true,
                  }}
                >
                  {REGIONS.map((region) => (
                    <Marker
                      key={region.id}
                      position={{ lat: region.lat, lng: region.lng }}
                      onClick={() => setActiveRegion(region)}
                      // Removed 'animation' prop to fix the crash
                    />
                  ))}
                </GoogleMap>
              </LoadScript>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;