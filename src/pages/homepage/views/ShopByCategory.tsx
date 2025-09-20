import { cn } from "../../../lib/utils";

import { Heading2 } from "../../../components/headings/Heading2";
import Container from "../../../components/Container";
import { PrimaryLinkButton } from "../../../components/PrimaryLinkButton";

import Product1 from "../../../assets/images/products/product-1.webp";
import Product2 from "../../../assets/images/products/product-2.webp";
import Product3 from "../../../assets/images/products/product-3.webp";
import Product4 from "../../../assets/images/products/product-4.webp";

const ShopByCategory = () => {
  return (
    // <Wrapper>
    <div className="bg-tequila-500 relative z-5 mt-[19px] rounded-3xl">
      <Container className={cn("py-20 md:px-10 md:!py-[112px]")}>
        <Heading2 className="lg:text-center">Shop By Category</Heading2>

        <section className="sm grid gap-8 pt-12 sm:flex">
          {/* <div className="flex flex-wrap"> */}
          <div className="pl-0 sm:w-2/4">
            <div>
              <Category
                imageUrl={Product1}
                button={{ text: "Detective cases", href: "#" }}
                className="h-[452px] w-full !py-4 first:pt-0 last:pb-0"
              />
            </div>
            <div className="pt-[32px]">
              <Category
                imageUrl={Product2}
                button={{ text: "Detective cases", href: "#" }}
                className="h-[294px] w-full !py-4 first:pt-0 last:pb-0"
              />
            </div>
          </div>

          <div className="pr-0 sm:w-2/4">
            <div>
              <Category
                imageUrl={Product3}
                button={{ text: "Detective cases", href: "#" }}
                className="h-[294px] w-full !py-4 first:pt-0 last:pb-0"
              />
            </div>
            <div className="pt-[32px]">
              <Category
                imageUrl={Product4}
                button={{ text: "Detective cases", href: "#" }}
                className="h-[452px] w-full !py-4 first:pt-0 last:pb-0"
              />
            </div>
          </div>
          {/* </div> */}
        </section>
      </Container>
    </div>
    // </Wrapper>
  );
};

const Category = ({
  imageUrl,
  button,
  className,
}: {
  imageUrl: string;
  button: { text: string; href: string };
  className?: string;
}) => {
  if (imageUrl) {
    const altArray = imageUrl.split("/");
    const altName = altArray[altArray.length - 1].split(".")[0];

    return (
      <div
        className={cn(
          "relative overflow-clip",
          "min-h-[358px] rounded-2xl p-4",
          "flex items-end",
          className,
        )}
      >
        <img
          src={imageUrl}
          alt={altName}
          className={cn(
            "absolute top-0 left-0 size-full object-cover",
            "rounded-2xl",
          )}
        />

        <PrimaryLinkButton
          href={button.href}
          className="relative inline-flex capitalize"
        >
          {button.text}
        </PrimaryLinkButton>
      </div>
    );
  }
};

export { ShopByCategory };
