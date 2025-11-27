import { Fragment } from "react";
import ResponsiveMaskTextVariant from "@/components/Client/ResponsiveMaskTextVariant";
import ResponsiveMarquee from "@/components/Client/ResponsiveMarquee";
import RetailExcellenceClient from "@/components/Client/RetailExcellenceClient";

export default function RetailExcellence() {
  return (
    <div className="bg-[#30493D] py-36 text-[#D1CCBF] md:py-60">
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
        {"Craftsmanship Excellence • Premium Diamonds • Timeless Designs • Craftsmanship Excellence • "}
      </ResponsiveMarquee>

      <div className="mt-18 flex flex-col gap-y-14 px-8-25 md:mt-26 md:grid md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-24 md:px-16">
        <div className="flex flex-col gap-14 md:col-span-2 md:col-start-2 md:flex-row">
          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d-0">
                At Elara Jewelry, we believe in creating
              </Fragment>,
              <Fragment key="d-1">
                exceptional jewelry experiences through our
              </Fragment>,
              <Fragment key="d-2">
                premium boutique stores, offering exquisite
              </Fragment>,
              <Fragment key="d-3">
                diamonds, precious gemstones, and timeless
              </Fragment>,
              <Fragment key="d-4">
                designs. Our commitment to craftsmanship
              </Fragment>,
              <Fragment key="d-5">
                excellence drives our continued growth.
              </Fragment>,
            ]}
            mobile={[
              <Fragment key="m-0">
                At Elara Jewelry, we believe in creating
              </Fragment>,
              <Fragment key="m-1">
                exceptional jewelry experiences through
              </Fragment>,
              <Fragment key="m-2">
                our premium boutique stores, offering
              </Fragment>,
              <Fragment key="m-3">
                exquisite diamonds, precious gemstones,
              </Fragment>,
              <Fragment key="m-4">
                and timeless designs. Our commitment to
              </Fragment>,
              <Fragment key="m-5">craftsmanship excellence drives</Fragment>,
              <Fragment key="m-6">our continued growth.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />

          <ResponsiveMaskTextVariant
            desktop={[
              <Fragment key="d2-0">
                We envision becoming the leading jewelry
              </Fragment>,
              <Fragment key="d2-1">
                house in India, bringing exquisite fine
              </Fragment>,
              <Fragment key="d2-2">
                jewelry and timeless designs to customers
              </Fragment>,
              <Fragment key="d2-3">
                nationwide, creating memorable moments
              </Fragment>,
              <Fragment key="d2-4">and building lasting relationships.</Fragment>,
            ]}
            mobile={[
              <Fragment key="m2-0">
                We envision becoming the leading
              </Fragment>,
              <Fragment key="m2-1">
                jewelry house in India, bringing exquisite
              </Fragment>,
              <Fragment key="m2-2">
                fine jewelry and timeless designs to
              </Fragment>,
              <Fragment key="m2-3">
                customers nationwide, creating memorable
              </Fragment>,
              <Fragment key="m2-4">moments and building lasting</Fragment>,
              <Fragment key="m2-5">relationships.</Fragment>,
            ]}
            className="text-base [line-height:1.33] md:text-lg"
          />
        </div>
        <RetailExcellenceClient />
      </div>
    </div>
  );
}
