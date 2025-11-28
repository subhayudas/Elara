"use client";

import { useRef, useEffect, useState } from "react";
import { inView } from "motion";

// Marketing strategy data
const strategies = [
  {
    id: "demographic",
    title: "Target Demographic",
    description: "Age: 18-30. Location: Delhi, Mumbai, Bangalore. Status: Students + Young Professionals. Income: Middle to Upper-Middle Class.",
    icon: "chart-line"
  },
  {
    id: "psychographic",
    title: "Psychographic",
    description: "Nightlife lover, Aesthetic-first, Beauty & scent conscious, Convenience & longevity seeker.",
    icon: "handshake"
  },
  {
    id: "motivation",
    title: "Motivation",
    description: "All-night fragrance, Confidence boost, Party-look elevating, No-carry scent.",
    icon: "globe"
  },
  {
    id: "behaviour",
    title: "Behaviour",
    description: "Social & club regular, Trendy shopper, Minimal jewellery wearer, Frequent re-applier.",
    icon: "share"
  },
  {
    id: "endorsement",
    title: "Celebrity Endorsement",
    description: "JANHVI KAPOOR - Fit with Brand Personality, aligns with all four moods, reach to Gen Z and Millennial audience.",
    icon: "users"
  },
  {
    id: "solution",
    title: "Our Solution",
    description: "A jewellery-safe, long-lasting fragrance designed for her night out. Wear once and it lasts up to 28 days.",
    icon: "shopping-cart"
  }
];

// Retail marketing strategies
const retailStrategies = [
  "8:30 PM – Gets ready with minimal jewellery",
  "8:45 PM – Perfume touches jewellery and tarnishes it",
  "9:00 PM – Wants all-night fragrance but hates carrying bottle",
  "10:30 PM – At the club, wants seamless look in every photo",
  "1:00 AM – Wants longevity + convenience without damaging jewellery",
  "Our Solution – Jewellery-safe, long-lasting fragrance"
];

export default function MarketingStrategy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStrategy, setActiveStrategy] = useState("growth");

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Animation would go here
        return () => {};
      });
    }

    // Auto-rotate through strategies
    const interval = setInterval(() => {
      const currentIndex = strategies.findIndex(s => s.id === activeStrategy);
      const nextIndex = (currentIndex + 1) % strategies.length;
      setActiveStrategy(strategies[nextIndex].id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeStrategy]);

  const getActiveStrategy = () => {
    return strategies.find(strategy => strategy.id === activeStrategy) || strategies[0];
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "chart-line":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case "handshake":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        );
      case "globe":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "share":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        );
      case "users":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "shopping-cart":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const activeStrategyData = getActiveStrategy();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#4a1a1a] to-[#5b1a1a] text-[#d1bebe] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/marketing-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d1bebe]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d1bebe] to-[#b77e47]">
            Target Consumers
          </span>
        </h2>
        <p className="text-center text-[#d1bebe]/80 mb-16 max-w-3xl mx-auto">
          AANYA: THE NIGHTLIFE ENTHUSIAST. Age 18-30, located in Delhi, Mumbai, Bangalore. Students + Young Professionals. Middle to Upper-Middle Class.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3 space-y-4">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-xl backdrop-blur-sm border
                  ${activeStrategy === strategy.id
                    ? 'bg-gradient-to-r from-[#5b1a1a]/50 to-[#b77e47]/30 border-[#b77e47]/30 shadow-lg shadow-[#b77e47]/20'
                    : 'bg-[#4a1a1a]/50 border-[#5b1a1a]/50 hover:bg-[#4a1a1a]/70'
                  }`}
                onClick={() => setActiveStrategy(strategy.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center rounded-full size-12
                    ${activeStrategy === strategy.id
                      ? 'bg-[#d1bebe] text-[#4a1a1a]'
                      : 'bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] text-[#d1bebe]'
                    }`}
                  >
                    {renderIcon(strategy.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{strategy.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-[#4a1a1a]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#5b1a1a]/50 h-full">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] text-[#d1bebe]">
                  {activeStrategyData.title}
                </div>

                <p className="text-xl text-[#d1bebe] mb-8">
                  {activeStrategyData.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-[#5b1a1a]/30 to-[#b77e47]/20 backdrop-blur-sm rounded-2xl p-6 border border-[#b77e47]/30">
                    <h3 className="text-xl font-bold mb-4 text-[#b77e47]">Aanya's Journey</h3>
                    <ul className="space-y-3">
                      {retailStrategies.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="bg-[#b77e47]/30 rounded-full p-1 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-3 text-[#b77e47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#d1bebe]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#4a1a1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#5b1a1a]/50">
                    <h3 className="text-xl font-bold mb-4 text-[#b77e47]">Brand Positioning</h3>
                    <p className="text-[#d1bebe] mb-4">
                      We asked the "dumb" questions no one in jewellery or perfume industry ever did. Why does fragrance stay in bottles, jewellery stay decorative, and perfume need reapplying?
                    </p>
                    <p className="text-[#d1bebe]">
                      We work for effort-free fragrance + jewellery seekers. Behaviour-driven, not category-driven. While other perfume brands fade in 12 hours, Elara's Jewellery scent lasts for up to 28 days.
                    </p>

                    <div className="mt-6 pt-6 border-t border-[#5b1a1a]/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#d1bebe]/70">Fragrance Duration</span>
                        <span className="text-sm text-[#b77e47]">28 Days</span>
                      </div>
                      <div className="w-full bg-[#5b1a1a]/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 text-center text-[#b77e47]">Key Locations</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                    <div className="text-lg font-bold text-[#d1bebe]">Delhi</div>
                  </div>
                  <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                    <div className="text-lg font-bold text-[#d1bebe]">Mumbai</div>
                  </div>
                  <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                    <div className="text-lg font-bold text-[#d1bebe]">Bangalore</div>
                  </div>
                  <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                    <div className="text-lg font-bold text-[#d1bebe]">Pop Up Party</div>
                    <div className="text-xs text-[#d1bebe]/70">Exclusive Launch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
