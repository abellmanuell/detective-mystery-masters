import Marquee from "react-fast-marquee";
import type { ReactElement } from "react";

import type { AnnouncementBarItem } from "./AnnouncementBarItem";

type AnnouncementBarProps = {
  children:
    | ReactElement<typeof AnnouncementBarItem>
    | ReactElement<typeof AnnouncementBarItem>[];
  speed?: number;
  gradient?: boolean;
  pauseOnHover?: boolean;
};

const AnnouncementBar = ({
  children,
  speed = 50,
  gradient = false,
  pauseOnHover = true,
}: AnnouncementBarProps) => {
  return (
    <div className="bg-dark-burgundy-500 font-bebas-neue flex h-10 items-center text-xs text-white">
      <Marquee
        gradient={gradient} // no fading edges
        speed={speed} // adjust scroll speed
        pauseOnHover={pauseOnHover} // stop when hovered
        className="space-x-8" // Tailwind spacing
      >
        {children}
      </Marquee>
    </div>
  );
};

export { AnnouncementBar };
