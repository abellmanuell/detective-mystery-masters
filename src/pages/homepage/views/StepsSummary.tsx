import { cn } from "../../../lib/utils";

import HeroAsideImage from "../../../assets/images/hero-aside.webp";
import HandDrawnArrowIcon from "../../../assets/images/icons/icon-hand-drawn-arrow.svg";
import LeftHandDrawnArrowIcon from "../../../assets/images/icons/icon-left-hand-drawn-arrow.svg";

import Container from "../../../components/Container";
import { Heading2 } from "../../../components/headings/Heading2";
import { PrimaryLinkButton } from "../../../components/PrimaryLinkButton";
import { SecondaryLinkButton } from "../../../components/SecondaryLinkButton";

import { Steps } from "../../../components/steps/Steps";
import { StepItem } from "../../../components/steps/StepItem";

const StepsSummary = () => {
  return (
    <Container className={cn("lg:min-h-dvh", "py-20 md:!py-[112px]")}>
      {/* Heading 2 <H2> Element */}
      <Heading2 className="relative lg:text-center">
        <img
          className={cn(
            "absolute -bottom-10 left-56",
            "min-h-[130.93px] w-[230.85px]",
            "hidden 2xl:inline-block",
          )}
          src={LeftHandDrawnArrowIcon}
          alt="Hand Drawn Arrow Icon"
        />
        Here&apos;s how it makes your <br className="hidden sm:block" /> games
        night exciting
        <img
          className={cn(
            "absolute right-8 -bottom-10",
            "min-h-[40.47px] min-w-[71.35px]",
            "inline-block sm:hidden",
          )}
          src={HandDrawnArrowIcon}
          alt="Hand Drawn Arrow Icon"
        />
      </Heading2>

      {/* Steps 1-3 */}
      <Steps className="grid md:grid-cols-3 md:gap-x-12">
        <StepItem
          className="flex flex-col items-center justify-center"
          imageUrl={HeroAsideImage}
          headline="Short summary of step one"
          subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />

        <StepItem
          className="flex flex-col items-center justify-center"
          imageUrl={HeroAsideImage}
          headline="Short summary of step two"
          subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />

        <StepItem
          className="flex flex-col items-center justify-center"
          imageUrl={HeroAsideImage}
          headline="Short summary of step three"
          subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        />
      </Steps>

      {/* CTA Buttons */}
      <section className="justify-center space-y-4 md:flex md:space-y-0 md:space-x-4">
        <PrimaryLinkButton href="#" className="justify-center">
          GET THE CASE WITH 70% OFF
        </PrimaryLinkButton>

        <SecondaryLinkButton href="#" className="justify-center">
          Shop All
        </SecondaryLinkButton>
      </section>
    </Container>
  );
};

export { StepsSummary };
