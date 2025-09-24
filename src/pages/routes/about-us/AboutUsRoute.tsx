import { useMediaQuery } from "react-responsive";

import { cn } from "../../../lib/utils";

import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";
import Container from "../../../components/Container";
import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { TitleCard } from "../../../components/TitleCard";
import { TitleImage } from "../../../components/TitleImage";
import Wrapper from "../../../components/Wrapper";
import { announcements } from "../../../lib/globalVariables";

import AboutUsImage from "../../../assets/images/testimonials/live-action-3.webp";
import { Heading2 } from "../../../components/headings/Heading2";
import { Paragraphing } from "../../../components/Paragraphing";

import { Services } from "../../views/Services";
import { ShopByCategory } from "../../views/ShopByCategory";
import { Footer } from "../../views/Footer";

import WhiteLogo from "../../../assets/images/logo-white.svg";
import ShortArrowIcon from "../../../assets/images/icons/white-hand-drawn-arrow-short.svg";
import LongArrowIcon from "../../../assets/images/icons/white-hand-drawn-arrow.svg";

const AboutUsRoute = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <Wrapper>
      {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
      <AnnouncementBar>
        {announcements.map(({ icon, text }, i) => {
          return <AnnouncementBarItem key={i} icon={icon} text={text} />;
        })}
      </AnnouncementBar>

      <HeaderNavBar />

      <Container className="pb-20 md:pb-[107px]">
        <article
          className={cn(
            "grid gap-8 lg:grid-cols-2",
            "pt-[18px] md:pt-[12.2px] md:pb-[53px]",
          )}
        >
          <TitleCard
            titleAndSub={{
              title: "About Us",
              subTitle: "What brings us to the board games",
            }}
            breadCrumbs={{
              name: "Home page",
              rootHref: ".",
              leaf: [{ name: "About Us", href: "#" }],
            }}
          />

          <TitleImage imageUrl={AboutUsImage} />
        </article>

        <section className="bg-dark-burgundy-500 flex flex-col place-items-center gap-16 rounded-2xl px-6 py-12 text-white">
          <div className="relative">
            <Heading2 className="text-center text-5xl lg:mx-auto lg:w-[900px]">
              Welcome to Detective Mystery Masters - where we combine our love
              for mystery board games and crime-solving adventures.
            </Heading2>

            {!isMobile ? (
              <div className="absolute -bottom-30 flex w-full justify-between">
                <img src={LongArrowIcon} className="-scale-x-100 -rotate-45" />
                <img src={LongArrowIcon} className="rotate-45" />
              </div>
            ) : (
              <div className="absolute -bottom-15 flex w-full justify-between">
                <img src={ShortArrowIcon} className="-scale-x-100" />
                <img src={ShortArrowIcon} />
              </div>
            )}
          </div>

          <div className="lg:mx-auto lg:w-[600px]">
            <Paragraphing className="text-center text-lg !leading-[27px]">
              We're Tom, John, and Andrew—three best friends who've always
              shared a passion for detective stories and epic board game nights.
              It all started back in college, where we spent countless hours
              watching Sherlock Holmes and Hercule Poirot, and hosting board
              game nights that everyone wanted to join.
            </Paragraphing>

            <br />
            <Paragraphing className="text-center text-lg !leading-[27px]">
              One day, we thought, "Why not blend our two favorite things?" And
              that's how Detective Mystery Masters was born. We set out to
              create games that let you feel like a real detective, cracking
              complex cases either on your own or with friends.
            </Paragraphing>

            <br />
            <Paragraphing className="text-center text-lg !leading-[27px]">
              After months of designing, testing, and perfecting, we launched
              our mystery board games. Each one is packed with detailed case
              files, realistic evidence, and plenty of plot twists to keep you
              hooked. For us, these games are more than just a hobby—they're a
              way to share the fun and excitement of mystery-solving with
              others.
            </Paragraphing>

            <br />
            <Paragraphing className="text-center text-lg !leading-[27px]">
              We're excited to have you with us at Detective Mystery Masters.
              Ready to solve some mysteries?
            </Paragraphing>
          </div>

          <div>
            <img src={WhiteLogo} alt="" className="h-[121px]" />
          </div>
        </section>
      </Container>

      <Services />
      <ShopByCategory className="bg-transparent" />
      <Footer />
    </Wrapper>
  );
};

export default AboutUsRoute;
