import React from 'react';
import { ArrowRight } from 'lucide-react';

const ARTICLES = [
  {
    category: "Guide",
    title: "5 Hidden Cafes in Jaipur You Must Visit",
    excerpt: "Beyond the forts and palaces, the Pink City hides a vibrant cafe culture...",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Culture",
    title: "Why Varanasi Changes You",
    excerpt: "It's not just a city; it's an experience of life and death co-existing...",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Tips",
    title: "Packing for the Himalayas: A Checklist",
    excerpt: "Don't let the cold surprise you. Here is the ultimate packing list for Manali...",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
  }
];

const JournalSection = () => {
  return (
    <section className="bg-neutral-900 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white">The Travel Journal</h2>
            <p className="text-neutral-400 mt-2">Stories, tips, and guides from the road.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all">
            Read all articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-[24px]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500">{article.category}</span>
              <h3 className="mt-2 text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{article.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;