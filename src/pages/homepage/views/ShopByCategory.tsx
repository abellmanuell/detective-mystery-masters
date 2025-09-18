import { cn } from "../../../lib/utils";

import { Heading2 } from "../../../components/headings/Heading2";
import Container from "../../../components/Container";
import { PrimaryLinkButton } from "../../../components/PrimaryLinkButton";

import Interior from "../../../assets/images/products/interior.webp";

const ShopByCategory = () => {
  return (
    // <Wrapper>
    <div className="bg-tequila-500 relative z-5 mt-[19px] rounded-3xl">
      <Container className={cn("py-20 md:px-10 md:!py-[112px]")}>
        <Heading2>Shop By Category</Heading2>

        <section className="grid gap-y-8 pt-12">
          <Category
            imageUrl={Interior}
            button={{ text: "Detective cases", href: "#" }}
          />
          <Category
            imageUrl={Interior}
            button={{ text: "Escape rooms", href: "#" }}
          />
          <Category
            imageUrl={Interior}
            button={{ text: "Card games", href: "#" }}
          />
          <Category
            imageUrl={Interior}
            button={{ text: "Print & Play", href: "#" }}
          />
        </section>
      </Container>
    </div>
    // </Wrapper>
  );
};

const Category = ({
  imageUrl,
  button,
}: {
  imageUrl: string;
  button: { text: string; href: string };
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
        )}
      >
        <img
          src={imageUrl}
          alt={altName}
          className={cn(
            "absolute top-0 left-0 size-full object-cover",
            "h-[358px] min-w-[358px]",
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
