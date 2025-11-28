import HeroClient from "./Client";
import HeroServer from "./Server";

export default function HeroWrapper() {
  return (
    <div className="relative bg-[#4a1a1a]">
      <HeroClient />
      <HeroServer />
    </div>
  );
}
