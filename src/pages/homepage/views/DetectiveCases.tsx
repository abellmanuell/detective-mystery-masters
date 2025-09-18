import { cn } from "../../../lib/utils";

import Container from "../../../components/Container";
import { Heading2 } from "../../../components/headings/Heading2";
import { ProductCard } from "../../../components/bestselling/main/ProductCard";
import { SubProductCard } from "../../../components/bestselling/subs/ProductCard";
import { SecondaryLinkButton } from "../../../components/SecondaryLinkButton";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import ForwardArrowIcon from "../../../assets/images/icons/IconForwardArrow.svg";
import BackArrowIcon from "../../../assets/images//icons/IconBackArrow.svg";
import { useRef } from "react";
// import Wrapper from "../../../components/Wrapper";

interface DetectiveCasesProps {
  title: string;
  button?: {
    text: string;
    className?: string;
    href: string;
    bottomHref?: string;
    bottomText?: string;
  };
  items: {
    // id?: string;
    isMegaBundle: boolean;
    imageUrl: string;
    name: string;
    review: string;
    currentPrice: number;
    marketPrice: number;
    promo: string;
    bundle?: string;
    tags?: Array<string>;
  }[];
}

const DetectiveCases = ({
  title,
  button = {
    bottomText: "Shop All",
    bottomHref: "#",
    text: "Shop All",
    href: "#",
  },
  items,
}: DetectiveCasesProps) => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    // <Wrapper>
    <Container className={cn("py-20 md:!py-[112px]", "relative z-5")}>
      {/* Heading 2 <H2> Element */}
      <div className="flex items-end justify-between">
        <Heading2 className="w-[358px]">{title}</Heading2>

        <SecondaryLinkButton
          href={button.href}
          className={cn("hidden self-end md:block", button.className)}
        >
          {button.text}
        </SecondaryLinkButton>
      </div>

      <div className={cn("hidden lg:grid", "py-12 md:py-[58px]")}>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={cn(
            "grid gap-y-[32px] lg:grid lg:grid-cols-4",
            "md:grid-cols-2 md:gap-x-8 lg:flex-nowrap",
          )}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SellingContainer>
        {items.length > 0 && (
          <ProductCard
            isMegaBundle={items[0].isMegaBundle}
            imageUrl={items[0].imageUrl}
            name={items[0].name}
            review={items[0].review}
            currentPrice={items[0].currentPrice}
            marketPrice={items[0].marketPrice}
            promo={items[0].promo}
            bundle={items[0].bundle}
            tags={items[0].tags}
          />
        )}

        <div
          className={cn(
            "xxs:grid-cols-2 grid gap-x-6 gap-y-[32px] overflow-clip lg:hidden",
          )}
        >
          {items.map((item, i) => (
            <SubProductCard
              isMegaBundle={item.isMegaBundle}
              imageUrl={item.imageUrl}
              name={item.name}
              review={item.review}
              currentPrice={item.currentPrice}
              marketPrice={item.marketPrice}
              promo={item.promo}
              bundle={item.bundle}
              className={cn(i === 0 ? "hidden" : "block")}
            />
          ))}
        </div>
      </SellingContainer>

      <div className="flex justify-center lg:hidden">
        <SecondaryLinkButton href={button.bottomHref || "#"}>
          {button.bottomText}
        </SecondaryLinkButton>
      </div>

      {/* Back and Forward Arrow Button */}
      <div className="hidden justify-end space-x-[15px] lg:flex">
        <button
          className={cn(
            "outline-1",
            "flex items-center space-x-4",
            "rounded-full px-7 py-4 font-bold uppercase",
            "duration-150 ease-in",
            "cursor-pointer rounded-full p-4",
          )}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src={BackArrowIcon}
            alt="Back Arrow Icon"
            width={24}
            height={24}
          />
        </button>

        <button
          className={cn(
            "outline-1",
            "flex items-center space-x-4",
            "rounded-full px-7 py-4 font-bold uppercase",
            "duration-150 ease-in",
            "cursor-pointer rounded-full p-4",
          )}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            src={ForwardArrowIcon}
            alt="Forward Arrow Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </Container>
    // </Wrapper>
  );
};

const SellingContainer = ({ children }: { children: React.ReactNode }) => (
  <section
    className={cn(
      "grid gap-y-[32px] lg:grid-cols-4",
      "md:gap-x-8 lg:grid-cols-2 lg:flex-nowrap",
      "py-12 md:py-[58px] lg:hidden",
    )}
  >
    {children}
  </section>
);

export { DetectiveCases };
