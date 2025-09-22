import { announcements, bestselling } from "../../../lib/globalVariables";

import Wrapper from "../../../components/Wrapper";

import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";

import { LandingPage } from "../../views/LandingPage";
import { StepsSummary } from "../../views/StepsSummary";
import { Services } from "../../views/Services";
import { Featured } from "../../views/Featured";
import { Footer } from "../../views/Footer";
import { Package } from "../../../components/Package";
import { ShopByCategory } from "../../views/ShopByCategory";
import { Testimonial } from "../../views/Testimonial";
import { FAQ } from "../../views/FAQ";

import { detectiveCases } from "../../../lib/globalVariables";

export default function HomePage() {
  return (
    <>
      <Wrapper>
        {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
        <AnnouncementBar>
          {announcements.map(({ icon, text }, i) => {
            return <AnnouncementBarItem key={i} icon={icon} text={text} />;
          })}
        </AnnouncementBar>

        <HeaderNavBar />

        {/* Landing Page */}
        <LandingPage />

        {/* Steps Summary Section */}
        <StepsSummary />

        {/* Services Section */}
        <Services />
        {/* Best Selling Section */}
        <Package title="Best Selling" items={bestselling} />

        {/* Featured Logo Section */}
        <Featured />

        {/* Detective Cases section */}
        <Package title="Detective Cases" items={detectiveCases} />

        {/* Shop by category section */}
        <ShopByCategory />

        {/* Testimonials section */}
        <Testimonial />

        {/* FAQ section */}
        <FAQ
          faqs={[
            {
              question: "Can you buy a printable?",
              answer: "Yes, that is definetely possible.",
            },
            {
              question: "CAN I GET A REFUND?",
              answer: "Yes, that is definetely possible.",
            },
            {
              question: "WILL I GET IT BEFORE CHRISTMAS?",
              answer: "Yes, that is definetely possible.",
            },
            {
              question: "WILL I GET IT BEFORE HALLOWEEN?",
              answer: "Yes, that is definetely possible.",
            },
            {
              question: "WHAT IS THE BEST GAME YOU WOULD RECOMMEND?",
              answer: "Yes, that is definetely possible.",
            },
          ]}
        />

        {/* Footer Section */}
        <Footer />
      </Wrapper>
    </>
  );
}
