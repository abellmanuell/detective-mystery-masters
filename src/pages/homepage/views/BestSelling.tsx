import { cn } from "../../../lib/utils";

import Container from "../../../components/Container";
import { Heading2 } from "../../../components/headings/Heading2";
import { ProductCard } from "../../../components/bestselling/main/ProductCard";
import { SubProductCard } from "../../../components/bestselling/subs/ProductCard";

import Game10MegaBundle from "../../../assets/images/products/Game-10-Mega-Bundle.webp";
import { SecondaryLinkButton } from "../../../components/SecondaryLinkButton";

const BestSelling = () => {
  return (
    <Container className={cn("lg:h-dvh", "py-20 md:!py-[112px]")}>
      {/* Heading 2 <H2> Element */}
      <Heading2 className="min-w-[358px] lg:text-center">Best Selling</Heading2>

      <SellingContainer>
        <ProductCard
          imageUrl={Game10MegaBundle}
          name="10-Game Detective Mega Bundle"
          review="1,500"
          currentPrice="325.00"
          marketPrice="650.00"
          promo="Save 50%"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-[32px]">
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
        <SecondaryLinkButton href="#" className="inline-block">
          Shop All
        </SecondaryLinkButton>
      </div>
    </Container>
  );
};

const SellingContainer = ({ children }: { children: React.ReactNode }) => (
  <section className="grid gap-y-[32px] py-12">{children}</section>
);

export { BestSelling };
