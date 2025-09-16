import Container from "./components/Container";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { AnnouncementBarItem } from "./components/AnnouncementBarItem";
import { HeaderNavBar } from "./components/HeaderNavBar";
import { HeroAside } from "./components/HeroAside";
import { HeroContent } from "./components/HeroContent";
// Imported annoucements demo data
import { announcements } from "./lib/globalVariables";
import { cn } from "./lib/utils";

export default function App() {
  return (
    <div className="bg-tequila-600/70 relative">
      <div className="bg-noise absolute inset-0 h-svh opacity-20 mix-blend-overlay" />
      <div className="relative z-10">
        {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
        <AnnouncementBar>
          {announcements.map(({ icon, text }, i) => {
            return <AnnouncementBarItem key={i} icon={icon} text={text} />;
          })}
        </AnnouncementBar>

        <HeaderNavBar />

        <Container
          className={cn(
            "grid grid-cols-1 gap-2 md:gap-8",
            "lg:h-dvh lg:grid-cols-2",
            "pt-0 pb-4 md:!p-4",
          )}
        >
          <HeroContent />
          <HeroAside />
        </Container>
      </div>
    </div>
  );
}
