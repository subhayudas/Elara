"use client";
import { Fragment } from "react";
import Image from "next/image";
import SectionTitle from "@/components/Server/SectionTitle";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";

export default function FoundersSection() {

  const textLines = {
    mobile: [
      <Fragment key="m-1">Meet our visionary</Fragment>,
      <Fragment key="m-2">
        <span>founders</span> with over 25 years
      </Fragment>,
      <Fragment key="m-3">
        <span>combined experience</span> in fine
      </Fragment>,
      <Fragment key="m-4">jewelry and gemology</Fragment>,
      <Fragment key="m-5">across India.</Fragment>,
    ],
    desktop: [
      <Fragment key="d-1">Meet our visionary founders</Fragment>,
      <Fragment key="d-2">
        with over <span>25 years combined</span>
      </Fragment>,
      <Fragment key="d-3">
        <span>experience</span> in fine jewelry and
      </Fragment>,
      <Fragment key="d-4">gemology across India.</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#30493D] text-[#D1CCBF] md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Our Founders</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <div className="flex flex-col gap-8">
            <MaskText
              lines={[
                <>Vishnu Pillai: Founder with 15+ years</>,
                <>experience in fine jewelry and gemology.</>,
                <>Certified gemologist specializing in</>,
                <>diamonds and precious stones. Established</>,
                <>25+ boutique stores across North & South India.</>,
              ]}
              className="text-lg [line-height:1.3] font-normal"
            />
            <MaskText
              lines={[
                <>Rajesh Dudi: Founder with 10+ years</>,
                <>experience in jewelry design and craftsmanship.</>,
                <>Master craftsman specializing in custom</>,
                <>designs and intricate settings. Passionate</>,
                <>about creating timeless pieces of art.</>,
              ]}
              className="text-lg [line-height:1.3] font-normal"
            />
          </div>
          <StyledLink href="#">
            Meet Our Team
          </StyledLink>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#2B3530] p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <Image
                src="/ImageContainer/vishnu.jpeg"
                alt="Vishnu Pillai"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <p className="mt-4 text-center text-xl font-medium">Vishnu Pillai</p>
            <p className="text-center text-base">Founder & Gemologist</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full">
              <Image
                src="/ImageContainer/rajeshdudi.jpeg"
                alt="Rajesh Dudi"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <p className="mt-4 text-center text-xl font-medium">Rajesh Dudi</p>
            <p className="text-center text-base">Founder & Master Craftsman</p>
          </div>
        </div>
      </div>
    </div>
  );
}
