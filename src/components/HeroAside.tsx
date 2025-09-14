import { HiPlay } from "react-icons/hi2";

import HeroAsideImage from "../assets/images/hero-aside.png";
import HeroAsideVideoPoster from "../assets/images/hero-aside-video-poster.png";
import { cn } from "../lib/utils";

const HeroAsidePaperCard = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-tequila-500 relative w-3xs rounded-lg p-4",
        "flex flex-col gap-4",
        "[clip-path:polygon(0_0,_75%_0,_100%_30%,_100%_100%,_0_100%)]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

const HeroAsideVideoPlayButton = (props: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={cn(
        "absolute top-1/2 left-1/2",
        "-translate-x-1/2 -translate-y-1/2",
        "rounded-full p-4",
        "cursor-pointer bg-white/10 hover:bg-white/20",
        props.className,
      )}
    >
      <HiPlay className="text-pumpkin-500 size-8" />
    </button>
  );
};

const HeroAsideVideo = () => {
  return (
    <div
      className={cn(
        "relative aspect-square",
        "w-full max-w-2xl overflow-clip rounded-lg",
      )}
    >
      <img
        className="size-full object-cover"
        src={HeroAsideVideoPoster}
        alt="Hero Video"
      />

      <HeroAsideVideoPlayButton />
    </div>
  );
};

const HeroAside = () => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-end",
        "overflow-clip rounded-lg p-4 pt-30",
        "max-lg:order-1",
      )}
    >
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 size-full object-cover"
        src={HeroAsideImage}
        alt="Hero"
      />

      <HeroAsidePaperCard>
        {/* Heading */}
        <h3
          className={cn(
            "font-bebas-neue text-4xl font-bold uppercase",
            "relative w-3/4",
          )}
        >
          How it works?
        </h3>

        {/* Video */}
        <HeroAsideVideo />
      </HeroAsidePaperCard>
    </div>
  );
};

export { HeroAside };
