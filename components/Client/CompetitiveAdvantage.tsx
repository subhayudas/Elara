"use client";
import { Fragment } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Server/SectionTitle";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import ParallaxContainer from "@/components/Client/ParallaxContainer";

export default function CompetitiveAdvantage() {

  const textLines = {
    mobile: [
      <Fragment key="m-1">Our competitive edge</Fragment>,
      <Fragment key="m-2">
        comes from <span>exceptional</span>
      </Fragment>,
      <Fragment key="m-3">
        <span>craftsmanship</span>, master artisans,
      </Fragment>,
      <Fragment key="m-4">and premium boutique locations</Fragment>,
      <Fragment key="m-5">across India.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Our competitive edge comes</Fragment>,
      <Fragment key="d-2">
        from <span>exceptional craftsmanship</span>,
      </Fragment>,
      <Fragment key="d-3">
        master artisans, and premium
      </Fragment>,
      <Fragment key="d-4">boutique locations across India.</Fragment>,
    ],
  };

  const advantages = [
    "Certified diamonds and gemstones",
    "Master craftsmanship & attention to detail",
    "Custom design services",
    "Experienced gemologists and artisans",
    "Premium boutique locations across India"
  ];

  return (
    <div className="flex flex-col bg-[#d1c4c4] text-[#4a1a1a] md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Our Advantage</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />

          <div className="flex flex-col gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-[#4a1a1a]"></div>
                <p className="text-lg font-normal">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ParallaxContainer parallaxAmount={25}>
        <div className="h-full w-full bg-[#5b1a1a]">
          <div className="grid h-full grid-cols-2 grid-rows-2 gap-4 p-8">
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Skechers.jpg"
                  alt="Skechers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Engagement Rings</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Guess.jpg"
                  alt="Wedding Collections"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Wedding Collections</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/CalvinKlein.jpeg"
                  alt="Diamond Jewelry"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Diamond Jewelry</p>
              </div>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
              <div className="relative h-full w-full">
                <Image
                  src="/ImageContainer/Bugatti.jpg"
                  alt="Custom Designs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-center text-xl font-semibold text-white">Custom Designs</p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  );
}
