import { HiPlay } from "react-icons/hi2";

import HeroAsideImage from "../assets/images/hero-aside.webp";
import HeroAsideVideoPoster from "../assets/images/hero-aside-video-poster.webp";
import { cn } from "../lib/utils";

const HeroAsidePaperCard = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-tequila-500 relative rounded-lg",
        "px-[6.68px] pt-2 pb-[10.12px] md:px-[9.88px] md:pt-2 md:pb-[14.96px]",
        "h-[196.44px] w-[163.32px] md:h-[290.44px] md:w-[241.48px]",
        "flex flex-col gap-1",
        "paper-mask relative z-5",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export const HeroAsideVideoPlayButton = (
  props: React.ComponentProps<"button">,
) => {
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
        "w-full overflow-clip rounded-lg",
        "h-[122px] max-w-[149.76px] md:h-[179px] md:max-w-[221.42px]",
      )}
    >
      <img
        className={cn(
          "size-full object-cover",
          "h-[126.97px] w-[149.76px] md:h-[187.72px] md:w-[221.42px]",
        )}
        src={HeroAsideVideoPoster}
        alt="Hero Video"
        width="221.42"
        height="187.72"
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
        height="893"
        width="664"
        src={HeroAsideImage}
        alt="Hero"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-black/45 to-transparent"></div>

      <HeroAsidePaperCard>
        {/* Heading */}
        <h3
          className={cn(
            "font-bebas-neue pt-[3.98px] pl-[9.7px] text-[21.64px] leading-[25.97px] uppercase md:pt-[10px] md:pl-[10px]",
            "md:text-[32px] md:leading-[38.4px]",
            "relative w-3/4",
          )}
        >
          How it <br /> works?
        </h3>

        {/* Video */}
        <HeroAsideVideo />
      </HeroAsidePaperCard>
    </div>
  );
};

export { HeroAside };
