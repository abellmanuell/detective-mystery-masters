import { announcements } from "../../lib/globalVariables";

import { HeaderNavBar } from "../../components/HeaderNavBar";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../components/AnnouncementBarItem";

import { LandingPage } from "./views/LandingPage";
import { StepsSummary } from "./views/StepsSummary";
import { Services } from "./views/Services";
import { BestSelling } from "./views/BestSelling";

export default function HomePage() {
  return (
    <>
      <div className="bg-tequila-600/70 relative">
        <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
        <div className="relative z-10">
          {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
          <AnnouncementBar>
            {announcements.map(({ icon, text }, i) => {
              return <AnnouncementBarItem key={i} icon={icon} text={text} />;
            })}
          </AnnouncementBar>

          <HeaderNavBar />

          {/* Landing Page */}
          <LandingPage />
        </div>

        {/* Steps Summary Section */}
        <StepsSummary />
      </div>

      <div className="bg-tequila-600/70 relative">
        <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
        {/* Services Section */}
        <div className="bg-tequila-500 rounded-3xl">
          <Services />
        </div>

        {/* Best Selling Section */}
        <BestSelling />
      </div>
    </>
  );
}
