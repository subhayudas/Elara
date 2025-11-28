import Image from "next/image";
import { Fragment } from "react";
import WellnessSanctuaryImage from "@/public/ImageContainer/Bugatti.jpg";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import SectionTitle from "@/components/Server/SectionTitle";
import MaskText from "@/components/Server/MaskText";
import StyledLink from "@/components/Server/StyledLink";
import ResponsiveImage from "@/components/Client/ResponsiveImage";
export default function WellnessSanctuary() {
  const textLines = {
    desktop: [
      <Fragment key="desktop-1">
        <span>ELARA HOOPS,</span> ELARA RINGS,
      </Fragment>,
      <Fragment key="desktop-2">ELARA CHARM BRACELETS,</Fragment>,
      <Fragment key="desktop-3">and ELARA PENDANTS</Fragment>,
    ],
    mobile: [
      <Fragment key="mobile-1">
        <span>ELARA HOOPS,</span> ELARA RINGS,
      </Fragment>,
      <Fragment key="mobile-2">ELARA CHARM BRACELETS,</Fragment>,
      <Fragment key="mobile-3">and ELARA PENDANTS</Fragment>,
    ],
  };

  return (
    <div className="flex flex-col bg-[#5b1a1a] text-[#d1bebe] md:grid md:grid-cols-2">
      <ResponsiveImage parallaxAmount={20}>
        <Image
          src={WellnessSanctuaryImage}
          alt="wellness-sanctuary-image"
          className="h-auto w-full"
        />
      </ResponsiveImage>
      <div className="flex flex-col justify-center px-3-75 py-40 md:py-0">
        <div className="flex flex-col gap-12 md:ml-36 md:w-fit md:gap-16">
          <SectionTitle>Product Range</SectionTitle>
          <ResponsiveMaskText
            {...textLines}
            className="text-24 [line-height:1] md:text-40"
          />
          <MaskText
            lines={[
              <>Jewellery that doesn't just accessorize your look,</>,
              <>but amplifies your presence. Long-lasting fragrance</>,
              <>designed for your night out. One piece, multiple</>,
              <>refills, endless fragrance. Wear once and it lasts</>,
              <>up to 28 days. Perfume that stays. Jewellery that lasts.</>,
            ]}
            className="text-lg [line-height:1.3] font-normal"
          />
          <StyledLink href="#">
            Explore Product Range
          </StyledLink>
        </div>
      </div>
    </div>
  );
}
