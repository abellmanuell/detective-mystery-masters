import { cn } from "../../../lib/utils";

import Container from "../../../components/Container";
import { Heading2 } from "../../../components/headings/Heading2";
import { ProductCard } from "../../../components/bestselling/main/ProductCard";
import { SubProductCard } from "../../../components/bestselling/subs/ProductCard";
import { SecondaryLinkButton } from "../../../components/SecondaryLinkButton";

import Game10MegaBundle from "../../../assets/images/products/Game-10-Mega-Bundle.webp";

import ForwardArrowIcon from "../../../assets/images/icons/IconForwardArrow.svg";
import BackArrowIcon from "../../../assets/images//icons/IconBackArrow.svg";
// import Wrapper from "../../../components/Wrapper";

const BestSelling = () => {
  return (
    // <Wrapper>
    <Container className={cn("py-20 md:!py-[112px]", "relative z-5")}>
      {/* Heading 2 <H2> Element */}
      <div className="flex items-end justify-between">
        <Heading2 className="w-[358px]">Best Selling</Heading2>

        <SecondaryLinkButton href="#" className="hidden self-end md:block">
          Shop All
        </SecondaryLinkButton>
      </div>

      <SellingContainer>
        <ProductCard
          isMegaBundle={true}
          imageUrl={Game10MegaBundle}
          name="10-Game Detective Mega Bundle"
          review="1,500"
          currentPrice="325.00"
          marketPrice="650.00"
          promo="Save 50%"
        />

        <ProductCard
          imageUrl={Game10MegaBundle}
          name="10-Game Detective Mega Bundle"
          review="1,500"
          currentPrice="325.00"
          marketPrice="650.00"
          promo="Save 50%"
          className="hidden md:block"
        />

        <ProductCard
          imageUrl={Game10MegaBundle}
          name="10-Game Detective Mega Bundle"
          review="1,500"
          currentPrice="325.00"
          marketPrice="650.00"
          promo="Save 50%"
          className="hidden md:block"
        />

        <ProductCard
          imageUrl={Game10MegaBundle}
          name="10-Game Detective Mega Bundle"
          review="1,500"
          currentPrice="325.00"
          marketPrice="650.00"
          promo="Save 50%"
          className="hidden md:block"
        />

        <div className="xxs:grid-cols-2 grid gap-x-6 gap-y-[32px] overflow-clip md:hidden">
          <SubProductCard
            isMegaBundle={true}
            imageUrl={Game10MegaBundle}
            name="10-Game Detective Mega Bundle"
            review="1,500"
            currentPrice="325.00"
            marketPrice="650.00"
            promo="Save 50%"
          />

          <SubProductCard
            imageUrl={Game10MegaBundle}
            name="10-Game Detective Mega Bundle"
            review="1,500"
            currentPrice="325.00"
            marketPrice="650.00"
            promo="Save 50%"
          />

          <SubProductCard
            imageUrl={Game10MegaBundle}
            name="10-Game Detective Mega Bundle"
            review="1,500"
            currentPrice="325.00"
            marketPrice="650.00"
            promo="Save 50%"
          />

          <SubProductCard
            imageUrl={Game10MegaBundle}
            name="10-Game Detective Mega Bundle"
            review="1,500"
            currentPrice="325.00"
            marketPrice="650.00"
            promo="Save 50%"
          />
        </div>
      </SellingContainer>

      <div className="flex justify-center">
        <SecondaryLinkButton href="#" className="block md:hidden">
          Shop All
        </SecondaryLinkButton>
      </div>

      {/* Back and Forward Arrow Button */}
      <div className="hidden justify-end space-x-[15px] md:flex">
        <SecondaryLinkButton href="#" className="rounded-full p-4">
          <img
            src={BackArrowIcon}
            alt="Back Arrow Icon"
            width={24}
            height={24}
          />
        </SecondaryLinkButton>

        <SecondaryLinkButton href="#" className="rounded-full p-4">
          <img
            src={ForwardArrowIcon}
            alt="Forward Arrow Icon"
            width={24}
            height={24}
          />
        </SecondaryLinkButton>
      </div>
    </Container>
    // </Wrapper>
  );
};

const SellingContainer = ({ children }: { children: React.ReactNode }) => (
  <section
    className={cn(
      "grid gap-y-[32px] lg:grid lg:grid-cols-4",
      "justify-center md:flex md:flex-wrap md:gap-x-8 lg:flex-nowrap",
      "py-12 md:py-[58px]",
    )}
  >
    {children}
  </section>
);

export { BestSelling };
