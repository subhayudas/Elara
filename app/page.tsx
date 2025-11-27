import NavBar from "@/components/Client/NavBar";
import CompetitiveAdvantage from "@/components/Client/CompetitiveAdvantage";
import RetailExcellence from "@/components/Client/RetailExcellence";

// import MilestonesSection from "@/sections/ElementisStory"; // Commented out as it's not being used
import WellnessSanctuary from "@/sections/WellnessSanctuary";
import Footer from "@/sections/Footer/Server";

import Form from "@/sections/Form";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";

// New sections
// import MilestonesTimeline from "@/sections/MilestonesTimeline"; // Commented out as it's not being used

import IndiaPresence from "@/sections/IndiaPresence";
import BusinessChannels from "@/sections/BusinessChannels";
import GlobalPresence from "@/sections/GlobalPresence";
import MarketingStrategy from "@/sections/MarketingStrategy";
import FutureGrowth from "@/sections/FutureGrowth";
export default function Home() {
  return (
    <div className="overflow-clip">
      <Hero />
      <Introduction />

      <WellnessSanctuary />
      <RetailExcellence />
      <CompetitiveAdvantage />
      <BusinessChannels />
      <IndiaPresence />
      <FutureGrowth />
      <MarketingStrategy />
      <GlobalPresence />
      <Form />
      <Footer />
      <NavBar />
    </div>
  );
}
