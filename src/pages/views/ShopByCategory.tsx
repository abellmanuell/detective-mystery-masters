import { cn } from "../../lib/utils";

import { Heading2 } from "../../components/headings/Heading2";
import Container from "../../components/Container";
import { PrimaryLinkButton } from "../../components/PrimaryLinkButton";

import Product1 from "../../assets/images/products/product-1.webp";
import Product2 from "../../assets/images/products/product-2.webp";
import Product3 from "../../assets/images/products/product-3.webp";
import Product4 from "../../assets/images/products/product-4.webp";
import Wrapper from "../../components/Wrapper";

const ShopByCategory = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={cn("bg-dark-burgundy-500 rounded-t-4xl", className)}>
      <div className="bg-tequila-500 relative z-5 mt-[19px] rounded-3xl">
        <Container className={cn("py-20 md:px-10")}>
          <Heading2 className="lg:text-center">Shop By Category</Heading2>

          <section className="grid gap-8 pt-12 md:grid-cols-2 md:pt-[56px] xl:grid-cols-2 xl:grid-rows-[294px_158px_294px]">
            <ImageWithButton
              imageUrl={Product1}
              button={{ href: "#", text: "Detective cases" }}
              className="xl:row-span-2"
            />

            <ImageWithButton
              imageUrl={Product2}
              button={{ href: "#", text: "Escape rooms" }}
              imgClassName="xl:object-[80%_-200px]"
            />

            <ImageWithButton
              imageUrl={Product3}
              button={{ href: "#", text: "Card Games" }}
              className="xl:row-span-2"
            />

            <ImageWithButton
              imageUrl={Product4}
              button={{ href: "#", text: "Print & Play" }}
              imgClassName="xl:object-[80%_-200px]"
            />
          </section>
        </Container>
      </div>
    </Wrapper>
  );
};

const ImageWithButton = ({
  imageUrl,
  button,
  className,
  imgClassName,
}: {
  imageUrl: string;
  button: { text: string; href: string };
  className?: string;
  imgClassName?: string;
}) => (
  <div
    className={cn("relative h-auto xl:overflow-clip xl:rounded-2xl", className)}
  >
    <img className={cn("rounded-2xl", imgClassName)} src={imageUrl} />
    <PrimaryLinkButton
      href={button.href}
      className="absolute bottom-2 left-2 inline-flex w-auto px-4 py-3 text-base capitalize"
    >
      {button.text}
    </PrimaryLinkButton>
  </div>
);

export { ShopByCategory };
