import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import RetailExcellenceClient from "@/components/Client/RetailExcellenceClient";

export default function RetailExcellence() {
  return (
    <div className="bg-[#5b1a1a] py-36 text-[#d1bebe] md:py-60">
      <ResponsiveMarquee
        animationConfig={{
          mobile: {
            max: "-887px",
            speed: 50,
          },
          desktop: {
            max: "-88.7%",
            speed: 5,
          },
        }}
      >
        {"Freedom • Bold Design • Sensory Expression • Effortless Functionality • Freedom • Bold Design • Sensory Expression • Effortless Functionality • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                Rooted in bold design and sensory expression,
              </Fragment>,
              <Fragment key="d-1">
                the brand embodies a dark, confident, magnetic
              </Fragment>,
              <Fragment key="d-2">
                personality, jewellery that doesn't just
              </Fragment>,
              <Fragment key="d-3">
                accessorize your look, but amplifies your
              </Fragment>,
              <Fragment key="d-4">
                presence. ELARA stands for freedom: freedom
              </Fragment>,
              <Fragment key="d-5">
                from bags, from fading perfumes, from routine
              </Fragment>,
              <Fragment key="d-6">and the freedom to live unrestrained.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                Rooted in bold design and sensory expression,
              </Fragment>,
              <Fragment key="m-1">
                the brand embodies a dark, confident, magnetic
              </Fragment>,
              <Fragment key="m-2">
                personality, jewellery that doesn't just
              </Fragment>,
              <Fragment key="m-3">
                accessorize your look, but amplifies your
              </Fragment>,
              <Fragment key="m-4">
                presence. ELARA stands for freedom: freedom
              </Fragment>,
              <Fragment key="m-5">from bags, from fading perfumes, from routine</Fragment>,
              <Fragment key="m-6">and the freedom to live unrestrained.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                ELARA ISN'T FIGHTING THE COMPETITION.
              </Fragment>,
              <Fragment key="d2-1">
                ELARA IS FIGHTING THE OLD WAY OF
              </Fragment>,
              <Fragment key="d2-2">GETTING READY.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                ELARA ISN'T FIGHTING THE COMPETITION.
              </Fragment>,
              <Fragment key="m2-1">
                ELARA IS FIGHTING THE OLD WAY OF
              </Fragment>,
              <Fragment key="m2-2">GETTING READY.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <RetailExcellenceClient />
      </div>
    </div>
  );
}
