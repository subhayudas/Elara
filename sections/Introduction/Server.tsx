import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto] gap-y-12 bg-[#2B3530] px-3-75 pt-42-5 pb-35 text-[#D1CCBF] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <SectionTitle className="md:col-start-1">
        Introduction
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-start-2 md:gap-20">
          <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">Welcome to Aurelia Jewelry</Fragment>,
            <Fragment key="m-2">
              <span>a premier</span> jewelry company
            </Fragment>,
            <Fragment key="m-3">specializing in exquisite</Fragment>,
            <Fragment key="m-4">fine jewelry, diamonds, and</Fragment>,
            <Fragment key="m-5">precious gemstones. We craft</Fragment>,
            <Fragment key="m-6">timeless pieces that celebrate</Fragment>,
            <Fragment key="m-7">life's most precious moments</Fragment>,
            <Fragment key="m-8">with elegance and luxury.</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              Welcome to <span>Aurelia Jewelry</span>,
            </Fragment>,
            <Fragment key="d-2">
              <span>a premier</span> jewelry company
            </Fragment>,
            <Fragment key="d-3">
              specializing in exquisite fine jewelry,
            </Fragment>,
            <Fragment key="d-4">
              diamonds, and precious gemstones. We
            </Fragment>,
            <Fragment key="d-5">
              craft timeless pieces that celebrate life's
            </Fragment>,
            <Fragment key="d-6">most precious moments.</Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">Founded in 2015, Aurelia Jewelry has established</Fragment>,
            <Fragment key="l-2">a reputation through exceptional craftsmanship,</Fragment>,
            <Fragment key="l-3">
              premium quality diamonds and gemstones, and
            </Fragment>,
            <Fragment key="l-4">
              a dedication to creating timeless pieces that
            </Fragment>,
            <Fragment key="l-5">celebrate life's most precious moments.</Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
