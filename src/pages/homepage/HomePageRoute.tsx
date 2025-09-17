import { announcements } from "../../lib/globalVariables";

import Wrapper from "../../components/Wrapper";

import { HeaderNavBar } from "../../components/HeaderNavBar";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../components/AnnouncementBarItem";

import { LandingPage } from "./views/LandingPage";
import { StepsSummary } from "./views/StepsSummary";
import { Services } from "./views/Services";
import { BestSelling } from "./views/BestSelling";
import { Featured } from "./views/Featured";
import { Footer } from "../../components/footer/Footer";

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
      </Wrapper>

      {/* Services Section */}
      <Services />
      {/* Best Selling Section */}
      <BestSelling />

      {/* Featured Logo Section */}
      <Featured />

      {/* SOME SECTION WILL COME HERE BEFORE FOOTER */}

      {/* Footer Section */}
      <Footer />
    </>
  );
}
