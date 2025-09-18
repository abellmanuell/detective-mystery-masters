import { announcements, bestselling } from "../../lib/globalVariables";

import Wrapper from "../../components/Wrapper";

import { HeaderNavBar } from "../../components/HeaderNavBar";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../components/AnnouncementBarItem";

import { LandingPage } from "./views/LandingPage";
import { StepsSummary } from "./views/StepsSummary";
import { Services } from "./views/Services";

/* import { BestSelling } from "./views/BestSelling";
import { DetectiveCases } from "./views/DetectiveCases"; */

import { Featured } from "./views/Featured";
import { Footer } from "../../components/footer/Footer";
import { detectiveCases } from "../../lib/globalVariables";
import { Package } from "../../components/Package";
import { ShopByCategory } from "./views/ShopByCategory";

export default function HomePage() {
  return (
    <>
      <Wrapper>
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

        {/* Services Section */}
        <Services />
        {/* Best Selling Section */}
        <Package title="Best Selling" items={bestselling} />

        {/* Featured Logo Section */}
        <Featured />

        <Package title="Detective Cases" items={detectiveCases} />

        <ShopByCategory />

        {/* Footer Section */}
        <Footer />
      </Wrapper>
    </>
  );
}
