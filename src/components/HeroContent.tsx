// Social Proof Avatars

import { HeroFeatures } from "./HeroFeatures";
import { PrimaryLinkButton } from "./PrimaryLinkButton";
import { SocialProofs } from "./SocialProofs";
import { cn } from "../lib/utils";

// Social Proofs Demo datas
import { socialPropfs } from "../lib/globalVariables";

const HeroContent = () => {
  return (
    <div
      className={cn(
        "bg-tequila-500 flex flex-col rounded-xl p-4 shadow-[0_4px_12px_rgba(120,120,120,0.1)]",
        "max-lg:order-2",
      )}
    >
      {/* Social Proofs, Heading, Subheading & CTA */}
      <div className="mb-8 flex grow flex-col justify-center gap-8 md:gap-0 lg:mb-0 lg:items-center">
        <SocialProofs
          proofs={socialPropfs}
          rate="4.5 / 5.0"
          players="145,000+"
        />

        <h1 className="font-bebas-neue text-5xl md:mt-14 md:text-[100px] md:leading-28 lg:text-center">
          Think You Can <br /> Crack The Case?
        </h1>

        <p className="md:mt-6 md:mb-14 md:text-xl">
          Gather Friends, Solve Crimes, <br className="md:hidden" /> Become the
          Hero
        </p>

        <PrimaryLinkButton href="#">Shop Cases with 70% off</PrimaryLinkButton>
      </div>

      {/* Hero Features */}
      <HeroFeatures />
    </div>
  );
};

export { HeroContent };
