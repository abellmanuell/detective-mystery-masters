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
    <Container className={cn("relative z-5 py-20 md:!py-[112px]")}>
      {/* Heading 2 <H2> Element */}
      <Heading2 className="xs:text-center relative flex justify-center">
        {/* large: >=1280px */}
        <div className="relative">
          <img
            className="relative -bottom-10 hidden min-h-[130.93px] w-[230.85px] xl:inline-block"
            src={LeftHandDrawnArrowIcon}
            aria-hidden="true"
          />
        </div>

        {/* medium: 640px - 1279px */}
        <div className="relative">
          <img
            className={cn(
              "xs:inline-block xs:-rotate-35 xs:left-3 relative -bottom-8 left-10 hidden min-h-[90px] w-[160px]",
              "md:left-10 md:min-h-[130.93px] md:w-[230.85px] xl:hidden xl:rotate-0",
            )}
            src={LeftHandDrawnArrowIcon}
            aria-hidden="true"
          />
        </div>

        <span className="z-5">
          Here&apos;s how it makes your <br className="hidden lg:block" /> games
          night exciting
        </span>

        {/* small: <640px */}
        <div className="xxxs:block relative hidden lg:w-[230.84px]">
          <img
            className="xs:invisible xxs:-bottom-15 xs:-bottom-12 xxs:-left-16 relative right-8 -bottom-10 inline-block min-h-[40.47px] min-w-[71.35px]"
            src={HandDrawnArrowIcon}
            alt=""
            aria-hidden="true"
          />
        </div>
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

{
  /* <Heading2 className="relative lg:text-center">
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
      </Heading2> */
}

//  <Heading2 className="relative flex justify-center lg:text-center">
//         <img
//           className={cn(
//             "relative",
//             "min-h-[130.93px] w-[230.85px]",
//             // "hidden 2xl:inline-block",
//           )}
//           src={LeftHandDrawnArrowIcon}
//           alt="Hand Drawn Arrow Icon"
//         />
//         {/* </div> */}
//         <span className="basis-4xl">
//           Here&apos;s how it makes <br /> your games night exciting
//         </span>
//         <img
//           className={cn(
//             // "absolute right-8 -bottom-10",
//             "min-h-[40.47px] min-w-[71.35px]",
//             // "inline-block sm:hidden",
//           )}
//           src={HandDrawnArrowIcon}
//           alt="Hand Drawn Arrow Icon"
//         />
//       </Heading2>
