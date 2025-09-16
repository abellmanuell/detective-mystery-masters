// Imported annoucements demo data
import { AnnouncementBar } from "../components/AnnouncementBar";
import { AnnouncementBarItem } from "../components/AnnouncementBarItem";
import Container from "../components/Container";
import { HeaderNavBar } from "../components/HeaderNavBar";
import { Heading2 } from "../components/headings/Heading2";
import { HeroAside } from "../components/HeroAside";
import { HeroContent } from "../components/HeroContent";
import { announcements } from "../lib/globalVariables";
import { cn } from "../lib/utils";

export default function HomePage() {
  return (
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
        <Container
          className={cn(
            "grid grid-cols-1 gap-2 md:gap-8",
            "lg:h-dvh lg:grid-cols-2",
            "pt-0 md:!p-4",
          )}
        >
          <HeroContent />
          <HeroAside />
        </Container>
      </div>

      <Container
        className={cn(
          //   "grid grid-cols-1 gap-2 md:gap-8",
          "lg:h-dvh",
          "pt-20 pb-4 md:!pt-[112px]",
        )}
      >
        <Heading2>
          Here&apos;s how it makes your <br /> games night exciting
        </Heading2>
        {/* <HeroContent /> */}
        {/* <HeroAside /> */}
      </Container>
    </div>
  );
}
