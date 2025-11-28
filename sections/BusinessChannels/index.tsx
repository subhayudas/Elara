"use client";

import { useRef, useEffect, useState } from "react";
import { animate, inView, stagger } from "motion";

// Business channels data for jewelry company
const businessChannels = [
  {
    id: "retail",
    title: "Four-Quadrant Experience",
    description: "Our store is designed as a four-quadrant experience, each representing a distinct jewellery vibe and its matching sample scent. When customers walk in, they begin with a short digital quiz that identifies their personal vibe: Floral Feminine, Fruity Bright, Minimal, or Party, creating a personalised, immersive try-and-shop journey.",
    icon: "store",
    color: "from-[#5b1a1a] to-[#b77e47]",
    image: "/images/retail-store.jpg" // Placeholder image path
  },
  {
    id: "custom",
    title: "Personal Vibe Quiz",
    description: "A short digital quiz identifies your personal vibe: Floral Feminine, Fruity Bright, Minimal, or Party. This creates a personalised, immersive try-and-shop journey tailored to your preferences.",
    icon: "truck",
    color: "from-[#b77e47] to-[#4a1a1a]",
    image: "/images/distribution.jpg" // Placeholder image path
  },
  {
    id: "online",
    title: "Immersive Try-and-Shop",
    description: "Experience our fragrance-infused jewellery through an immersive journey. Each quadrant represents a distinct vibe with matching sample scents, allowing you to discover the perfect piece that amplifies your presence.",
    icon: "globe",
    color: "from-[#4a1a1a] to-[#5b1a1a]",
    image: "/images/institutional.jpg" // Placeholder image path
  }
];

export default function BusinessChannels() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = useState("retail");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        // Animate section title and description
        const titleElements = sectionRef.current?.querySelectorAll('.section-title');
        if (titleElements) {
          titleElements.forEach((el, i) => {
            animate(el,
              { opacity: [0, 1], y: [20, 0] },
              { duration: 0.8, delay: 0.1 * i }
            );
          });
        }

        // Animate channel cards with stagger
        const channelCards = sectionRef.current?.querySelectorAll('.channel-card');
        if (channelCards) {
          channelCards.forEach((el, i) => {
            animate(el,
              { opacity: [0, 1], x: [-20, 0] },
              { duration: 0.6, delay: 0.3 + (0.15 * i) }
            );
          });
        }

        // Animate channel detail container
        const channelDetail = sectionRef.current?.querySelector('.channel-detail');
        if (channelDetail) {
          animate(channelDetail,
            { opacity: [0, 1], transform: ['scale(0.95)', 'scale(1)'] },
            { duration: 0.5, delay: 0.8 }
          );
        }
      });

      // No need to return a cleanup function as inView handles this internally
      return () => {};
    }
  }, []);

  const handleChannelChange = (channelId: string) => {
    if (isAnimating || channelId === activeChannel) return;

    setIsAnimating(true);

    // Animate out current channel
    const contentElement = document.querySelector('.channel-detail-content');
    if (contentElement) {
      const animateOut = () => {
        return new Promise<void>((resolve) => {
          animate(contentElement,
            { opacity: [1, 0], y: [0, -10] },
            { duration: 0.3 }
          );

          // Use setTimeout instead of .finished
          setTimeout(() => resolve(), 300);
        });
      };

      // Execute animation sequence
      animateOut().then(() => {
        setActiveChannel(channelId);

        // Animate in new channel after a small delay to ensure DOM update
        setTimeout(() => {
          const newContentElement = document.querySelector('.channel-detail-content');
          if (newContentElement) {
            animate(newContentElement,
              { opacity: [0, 1], y: [10, 0] },
              { duration: 0.3 }
            );
          }
        }, 50);

        setIsAnimating(false);
      });
    } else {
      setActiveChannel(channelId);
    }
  };

  const getActiveChannel = () => {
    return businessChannels.find(channel => channel.id === activeChannel) || businessChannels[0];
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "store":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3z M3 9h18 M9 21V9 M15 21V9" />
          </svg>
        );
      case "truck":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        );
      case "globe":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const activeChannelData = getActiveChannel();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#4a1a1a] to-[#4a1a1a] text-[#d1bebe] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#b77e47]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#d1bebe]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-4xl md:text-10xl font-bold mb-4 text-center opacity-0">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d1bebe] to-[#b77e47]">
            Store Experience
          </span>
        </h2>
        <p className="section-title text-center text-[#d1bebe]/80 mb-16 max-w-3xl mx-auto opacity-0">
          Our store is designed as a four-quadrant experience, each representing a distinct jewellery vibe and its matching sample scent.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 space-y-6">
            {businessChannels.map((channel, index) => (
              <div
                key={channel.id}
                className={`channel-card cursor-pointer transition-all duration-300 opacity-0 backdrop-blur-sm rounded-2xl p-6 border
                  ${activeChannel === channel.id
                    ? `bg-gradient-to-r ${channel.color} border-[#b77e47]/30 shadow-lg`
                    : 'bg-[#4a1a1a]/50 border-[#5b1a1a]/50 hover:bg-[#4a1a1a]/70'
                  }`}
                onClick={() => handleChannelChange(channel.id)}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center rounded-full size-12
                    ${activeChannel === channel.id
                      ? 'bg-[#d1bebe] text-[#4a1a1a]'
                      : `bg-gradient-to-r ${channel.color} text-[#d1bebe]`
                    }`}
                  >
                    {renderIcon(channel.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{channel.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="channel-detail relative bg-[#4a1a1a]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#5b1a1a]/50 h-[500px] opacity-0">
              <div className="absolute inset-0 opacity-30">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{ backgroundImage: `url(${activeChannelData.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#4a1a1a] via-[#4a1a1a]/80 to-transparent"></div>
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="channel-detail-content">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${activeChannelData.color} text-[#d1bebe]`}>
                    {activeChannelData.title}
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-[#d1bebe] max-w-2xl">
                      {activeChannelData.description}
                    </p>

                    {activeChannelData.id === "retail" && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-3xl font-bold text-[#b77e47]">4</div>
                          <div className="text-xs text-[#d1bebe]/70">Quadrants</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-3xl font-bold text-[#b77e47]">4</div>
                          <div className="text-xs text-[#d1bebe]/70">Vibes</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-3xl font-bold text-[#b77e47]">28</div>
                          <div className="text-xs text-[#d1bebe]/70">Days Lasting</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-3xl font-bold text-[#b77e47]">100%</div>
                          <div className="text-xs text-[#d1bebe]/70">Jewellery Safe</div>
                        </div>
                      </div>
                    )}

                    {activeChannelData.id === "custom" && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Floral</div>
                          <div className="text-xs text-[#d1bebe]/70">Feminine</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Fruity</div>
                          <div className="text-xs text-[#d1bebe]/70">Bright</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Minimal</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Party</div>
                        </div>
                      </div>
                    )}

                    {activeChannelData.id === "online" && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Try</div>
                          <div className="text-xs text-[#d1bebe]/70">Sample Scents</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Shop</div>
                          <div className="text-xs text-[#d1bebe]/70">Your Vibe</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Wear</div>
                          <div className="text-xs text-[#d1bebe]/70">Your Fragrance</div>
                        </div>
                        <div className="bg-[#5b1a1a]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-[#b77e47]/20">
                          <div className="text-2xl font-bold text-[#b77e47]">Refill</div>
                          <div className="text-xs text-[#d1bebe]/70">Endless</div>
                        </div>
                      </div>
                    )}
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
