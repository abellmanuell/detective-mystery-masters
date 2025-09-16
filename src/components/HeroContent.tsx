// Social Proof Avatars

import { HeroFeatures } from "./HeroFeatures";
import { PrimaryLinkButton } from "./PrimaryLinkButton";
import { SocialProofs } from "./SocialProofs";
import { cn } from "../lib/utils";

// Social Proofs Demo datas
import { socialPropfs } from "../lib/globalVariables";
import { Heading } from "./headings/Heading";

const HeroContent = () => {
  return (
    <div
      className={cn(
        "bg-tequila-500 flex flex-col rounded-[16px] p-4 shadow-[0_4px_12px_rgba(120,120,120,0.1)]",
        "max-lg:order-2",
      )}
    >
      {/* Social Proofs, Heading, Subheading & CTA */}
      <div className="mb-10 flex grow flex-col justify-center md:mb-0 md:gap-0 lg:items-center">
        <SocialProofs
          proofs={socialPropfs}
          rate="4.5 / 5.0"
          players="145,000+"
        />
        <div className="mt-4 mb-6 flex flex-col justify-center md:my-14 lg:items-center">
          {/* <h1 className="font-bebas-neue text-5xl leading-[52.8px] tracking-[-1.38px] md:text-[100px] md:leading-[110px] lg:text-center">
            Think You Can <br /> Crack The Case?
          </h1> */}
          <Heading>
            Think You Can <br /> Crack The Case?
          </Heading>

          <p className="mt-2 leading-[22.5px] text-[#3A3A3A] md:mt-6 md:text-xl">
            Gather Friends, Solve Crimes, <br className="md:hidden" /> Become
            the Hero
          </p>
        </div>

        <PrimaryLinkButton href="#">Shop Cases with 70% off</PrimaryLinkButton>
      </div>

      {/* Hero Features */}
      <HeroFeatures />
    </div>
  );
};

export { HeroContent };
