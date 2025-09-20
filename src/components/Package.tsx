// import Swiper JS
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import ForwardArrowIcon from "../assets/images/icons/IconForwardArrow.svg";
import BackArrowIcon from "../assets/images/icons/IconBackArrow.svg";

import Container from "./Container";
import { cn } from "../lib/utils";
import { Heading2 } from "./headings/Heading2";
import { SecondaryLinkButton } from "./SecondaryLinkButton";
import { ProductCard } from "./package/ProductCard";
import { Autoplay, Pagination } from "swiper/modules";
import type { ProductImageProps } from "./package/ProductImage";
import type { ProductDetailsProps } from "./package/ProductDetails";

interface PackageProps {
  title: string;
  button?: {
    text: string;
    className?: string;
    href: string;
    bottomHref?: string;
    bottomText?: string;
  };
  items: {
    productImage: ProductImageProps;
    productDetails: ProductDetailsProps;
  }[];
}

const Package = ({
  title,
  button = {
    bottomText: "Shop All",
    bottomHref: "#",
    text: "Shop All",
    href: "#",
  },
  items,
}: PackageProps) => {
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

      <div className="py-12 md:block md:py-[58px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 2000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              enabled: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
              enabled: true,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
              enabled: true,
            },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide
              key={i}
              className={i == 0 ? "col-span-2" : "col-span-1"}
            >
              <ProductCard href="#" {...item} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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

export { Package };
