"use client";

import { useRef, useEffect, useState } from "react";
import { inView } from "motion";

// Future growth projections data
const growthData = {
  revenue: [
    { year: "2024-25", value: 287, isProjected: true },
    { year: "2025-26", value: 359, isProjected: true },
    { year: "2026-27", value: 449, isProjected: true },
    { year: "2027-28", value: 561, isProjected: true }
  ],
  ebitda: [
    { year: "2024-25", value: 49, isProjected: true },
    { year: "2025-26", value: 55, isProjected: true },
    { year: "2026-27", value: 81, isProjected: true },
    { year: "2027-28", value: 110, isProjected: true }
  ]
};

// Growth initiatives
const initiatives = [
  {
    title: "Effortless Functionality",
    description: "We eliminate reapplication entirely. Wear once and it lasts up to 28 days. One piece, multiple refills, endless fragrance.",
    icon: "brand"
  },
  {
    title: "Self-Expression & Choice",
    description: "Four distinct vibes: Floral Feminine, Fruity Bright, Minimal, or Party. Personalised, immersive try-and-shop journey.",
    icon: "map"
  },
  {
    title: "Bold Modern Identity",
    description: "Rooted in bold design and sensory expression, the brand embodies a dark, confident, magnetic personality.",
    icon: "store"
  },
  {
    title: "Freedom",
    description: "ELARA stands for freedom: freedom from bags, from fading perfumes, from routine and the freedom to live unrestrained.",
    icon: "digital"
  }
];

export default function FutureGrowth() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"revenue" | "ebitda">("revenue");
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Initialize animated values to 0
        const initialValues: {[key: string]: number} = {};
        growthData[activeTab].forEach(item => {
          initialValues[item.year] = 0;
        });
        setAnimatedValues(initialValues);

        // Animate values
        const animateValues = async () => {
          for (const item of growthData[activeTab]) {
            for (let i = 0; i <= 20; i++) {
              await new Promise(resolve => setTimeout(resolve, 30));
              setAnimatedValues(prev => ({
                ...prev,
                [item.year]: Math.round(item.value * (i / 20))
              }));
            }
          }
        };

        animateValues();

        return () => {};
      });
    }
  }, [activeTab]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "brand":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case "map":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case "store":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "digital":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Calculate the maximum value for scaling the chart
  const maxValue = Math.max(...growthData[activeTab].map(item => item.value));

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#4a1a1a] to-[#5b1a1a] text-[#d1bebe] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/growth-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d1bebe]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d1bebe] to-[#b77e47]">
            Future Growth
          </span>
        </h2>
        <p className="text-center text-[#d1bebe]/80 mb-16 max-w-3xl mx-auto">
          We asked the "dumb" questions no one in jewellery or perfume industry ever did. Why does fragrance stay in bottles, jewellery stay decorative, and perfume need reapplying?
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-1/2">
            <div className="bg-[#4a1a1a]/50 backdrop-blur-sm rounded-3xl p-8 border border-[#5b1a1a]/50">
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("revenue")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === "revenue"
                      ? "bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] text-[#d1bebe] shadow-lg shadow-[#b77e47]/25"
                      : "bg-[#4a1a1a] text-[#d1bebe]/80 hover:bg-[#4a1a1a]/70"
                    }`}
                >
                  Revenue
                </button>
                <button
                  onClick={() => setActiveTab("ebitda")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    ${activeTab === "ebitda"
                      ? "bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] text-[#d1bebe] shadow-lg shadow-[#b77e47]/25"
                      : "bg-[#4a1a1a] text-[#d1bebe]/80 hover:bg-[#4a1a1a]/70"
                    }`}
                >
                  EBITDA
                </button>
              </div>

              <h3 className="text-xl font-semibold mb-8 text-center text-[#d1bebe]">
                Projected {activeTab === "revenue" ? "Revenue" : "EBITDA"} Growth (₹ Crore)
              </h3>

              <div className="relative h-80">
                <div className="absolute inset-0 flex items-end justify-between gap-4 pb-10">
                  {growthData[activeTab].map((item, index) => {
                    const heightPercentage = (item.value / maxValue) * 100;
                    return (
                      <div
                        key={item.year}
                        className="flex flex-col items-center w-full"
                        onMouseEnter={() => setHoveredYear(item.year)}
                        onMouseLeave={() => setHoveredYear(null)}
                      >
                        <div className="relative w-full h-full flex justify-center items-end">
                          <div
                            className={`w-full max-w-[60px] rounded-t-lg bg-gradient-to-t from-[#5b1a1a] to-[#b77e47] transition-all duration-1000`}
                            style={{
                              height: `${heightPercentage}%`,
                              opacity: hoveredYear === item.year ? 1 : 0.7
                            }}
                          >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-base font-bold text-[#d1bebe]">
                              {animatedValues[item.year] || 0}
                            </div>
                          </div>

                          {item.isProjected && (
                            <div className="absolute inset-0 bg-gradient-to-t from-[#d1bebe]/10 to-[#d1bebe]/0 rounded-t-lg opacity-50"></div>
                          )}
                        </div>
                        <div className="mt-2 text-sm text-[#d1bebe]/70">
                          {item.year}
                          {item.isProjected && <span className="text-xs text-[#d1bebe]/50 block">(Projected)</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="w-full h-px bg-[#5b1a1a]/50"></div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#5b1a1a]/50">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-sm text-[#d1bebe]/70 mb-1">CAGR</div>
                    <div className="text-2xl font-bold text-[#b77e47]">~22%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-[#d1bebe]/70 mb-1">EBITDA Margin (2027-28)</div>
                    <div className="text-2xl font-bold text-[#b77e47]">20%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-[#d1bebe]/70 mb-1">Current EBITDA Margin</div>
                    <div className="text-2xl font-bold text-[#b77e47]">14%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-[#b77e47]">Growth Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div
                  key={initiative.title}
                  className="bg-[#4a1a1a]/50 backdrop-blur-sm rounded-xl p-6 border border-[#5b1a1a]/50 transition-all duration-300 hover:bg-[#5b1a1a]/20 hover:border-[#b77e47]/30 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-[#b77e47]/20 p-3 rounded-lg group-hover:bg-[#b77e47]/30 transition-all duration-300">
                      <div className="text-[#b77e47]">
                        {renderIcon(initiative.icon)}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-[#d1bebe]">{initiative.title}</h4>
                  </div>
                  <p className="text-[#d1bebe]/80">{initiative.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#5b1a1a]/30 to-[#b77e47]/20 backdrop-blur-sm rounded-xl p-6 border border-[#b77e47]/30">
              <h4 className="text-xl font-bold mb-4 text-[#b77e47]">Competitive Advantage</h4>
              <p className="text-[#d1bebe] mb-4">
                While other perfume brands fade in 12 hours and less, Elara's Jewellery scent lasts for up to 28 days. We make fragrance wearable: unlike other jewellery brands that focus solely on appearance, our scented jewellery bead releases aroma continuously.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex-1 bg-[#4a1a1a]/70 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="text-[#b77e47] font-bold">28 Days</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-[#b77e47]">Wear Your Fragrance</h3>
          <p className="text-xl text-[#d1bebe] mb-8">
            Perfume that stays. Jewellery that lasts. Fragrance that you wear. Don't listen to brand ambassadors. Don't trust fancy bottles. Trust what's proven to last.
          </p>

          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#5b1a1a] to-[#b77e47] text-[#d1bebe] font-medium shadow-lg shadow-[#b77e47]/25">
            Wear Moments. Wear Your Fragrance.
          </div>
        </div>
      </div>
    </section>
  );
}
