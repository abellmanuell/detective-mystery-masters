import { cn } from "../../../lib/utils";

import Container from "../../../components/Container";

import HeroAsideImage from "../../../assets/images/hero-aside.webp";
import ServicesAsideImage from "../../../assets/images/services-aside.webp";

import GiftIcon from "../../../assets/images/icons/icon-gift.svg";
import DiceIcon from "../../../assets/images/icons/icon-dice.svg";
import HeartIcon from "../../../assets/images/icons/icon-heart.svg";

import { Heading2 } from "../../../components/headings/Heading2";
import { ServiceItem } from "../../../components/services/ServiceItem";
import { PrimaryLinkButton } from "../../../components/PrimaryLinkButton";
import { SecondaryLinkButton } from "../../../components/SecondaryLinkButton";

const Services = () => {
  return (
    <Container
      className={cn(
        "grid grid-cols-1 place-items-center gap-y-12 md:gap-8",
        "lg:min-h-dvh xl:grid-cols-2",
        "py-20 md:px-10 md:!py-[112px]",
      )}
    >
      <div>
        {/* Display on Mobile */}
        <div
          className={cn(
            "overflow-clip md:hidden",
            "h-[358px] max-w-[358px] md:h-[213px] md:max-w-[421.33px]",
          )}
        >
          <img
            src={HeroAsideImage}
            alt="Hero Aside Image"
            className={cn(
              "rounded-2xl object-cover",
              "h-[358px] w-[358px] md:h-[213px] md:w-[421.33px]",
            )}
          />
        </div>

        {/* Display on Desktop */}
        <div className={cn("hidden md:block", "md:h-[712px] md:w-[640px]")}>
          <img
            src={ServicesAsideImage}
            width={640}
            height={712}
            alt="Hero Aside Image"
            className={cn(
              "rounded-2xl object-cover",
              "md:h-[712px] md:w-[640px]",
            )}
          />
        </div>
      </div>

      <div>
        <Heading2>
          Detective Mystery Masters <br /> Are Perfect For
        </Heading2>

        <div className="space-y-8 py-12 md:py-20">
          <ServiceItem
            imageUrl={DiceIcon}
            headline="Board game enthusiasts"
            subheadline="Highlight Unique Selling Propositions with a short summary of
                the key feature and how it benefits customers."
          />

          <ServiceItem
            imageUrl={HeartIcon}
            headline="Friends and family quality time"
            subheadline="Highlight Unique Selling Propositions with a short summary of
                the key feature and how it benefits customers."
          />

          <ServiceItem
            imageUrl={GiftIcon}
            headline="Gifting Session"
            subheadline="Highlight Unique Selling Propositions with a short summary of
                the key feature and how it benefits customers."
          />
        </div>

        {/* CTA Buttons */}
        <section className="justify-start space-y-4 md:flex md:space-y-0 md:space-x-4">
          <PrimaryLinkButton href="#" className="justify-center">
            GET THE CASE WITH 70% OFF
          </PrimaryLinkButton>

          <SecondaryLinkButton href="#" className="justify-center">
            Shop All
          </SecondaryLinkButton>
        </section>
      </div>
    </Container>
  );
};

export { Services };
