import { Fragment } from "react";
import ResponsiveMaskText from "@/components/Client/ResponsiveMaskTextVariant";
import MaskText from "@/components/Server/MaskText";
import SectionTitle from "@/components/Server/SectionTitle";

export default function IntroductionServer() {
  return (
    <div className="grid grid-rows-[auto_auto] gap-y-12 bg-[#4a1a1a] px-3-75 pt-42-5 pb-35 text-[#d1bebe] md:grid-cols-[1fr_1.9fr] md:grid-rows-[auto] md:gap-y-32 md:px-15 md:pt-56-25 md:pb-50">
      <SectionTitle className="md:col-start-1">
        Consumer Insight
      </SectionTitle>

      <div className="flex flex-col gap-12 md:col-start-2 md:gap-20">
          <ResponsiveMaskText
          mobile={[
            <Fragment key="m-1">OBSERVATION:</Fragment>,
            <Fragment key="m-2">
              MY JEWELLERY GETS <span>RUINED</span>
            </Fragment>,
            <Fragment key="m-3">WHEN I SPRAY PERFUME.</Fragment>,
            <Fragment key="m-4">IT TARNISHES</Fragment>,
          ]}
          desktop={[
            <Fragment key="d-1">
              OBSERVATION: MY JEWELLERY GETS
            </Fragment>,
            <Fragment key="d-2">
              <span>RUINED</span> WHEN I SPRAY PERFUME.
            </Fragment>,
            <Fragment key="d-3">IT TARNISHES</Fragment>,
          ]}
          className="text-24 [line-height:1] md:text-40 [&>:first-child]:indent-23"
        />

        <MaskText
          lines={[
            <Fragment key="l-1">BECAUSE WHEN I'M GETTING READY, I WANT</Fragment>,
            <Fragment key="l-2">EVERYTHING, MY LOOK, MY SCENT, MY</Fragment>,
            <Fragment key="l-3">
              ACCESSORIES TO FEEL SEAMLESS AND INTENTIONAL.
            </Fragment>,
            <Fragment key="l-4">
              GETTING READY IS MY PERSONAL RITUAL… IT'S MY
            </Fragment>,
            <Fragment key="l-5">MOMENT TO FEEL BEAUTIFUL, CENTERED, AND "ME"</Fragment>,
            <Fragment key="l-6">AND I HATE HAVING TO CHOOSE BETWEEN</Fragment>,
            <Fragment key="l-7">SMELLING GOOD AND WEARING MY FAVOURITE JEWELLERY.</Fragment>,
          ]}
          className="text-base [line-height:1.3] font-normal md:text-lg"
        />
      </div>
    </div>
  );
}
