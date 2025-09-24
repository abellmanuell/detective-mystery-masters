// import Swiper JS
import { useRef, useState } from "react";
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
import { useMediaQuery } from "react-responsive";

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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const isMobile = useMediaQuery({ maxWidth: 767 });

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

      <div className="py-12 md:block md:pt-[58px] md:pb-[32px]">
        {isMobile ? (
          <div className="grid grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div className={i == 0 ? "col-span-2" : "col-span-1"}>
                <ProductCard key={i} href="#" {...item} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            // autoHeight={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              0: {
                enabled: false,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
                enabled: true,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
                enabled: true,
              },
            }}
            pagination={{
              el: "#custom-pagination",
              clickable: true,
              bulletClass: "my-bullet",
              bulletActiveClass: "my-bullet-active",
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide
                key={i}
                className={cn(
                  i == 0 ? "col-span-2" : "col-span-1",
                  "flex !h-auto items-stretch",
                )}
              >
                <ProductCard href="#" {...item} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="flex justify-center lg:hidden">
        <SecondaryLinkButton href={button.bottomHref || "#"}>
          {button.bottomText}
        </SecondaryLinkButton>
      </div>

      {/* Swiper Dots Pagination and Back and Forward Button */}
      <section className="hidden h-12 items-center justify-between lg:flex">
        <div className="mt-4 flex space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!swiperRef.current) return;
                swiperRef.current.slideToLoop(i);
              }}
              className={`h-2 w-2 cursor-pointer rounded-full transition`}
            >
              {" "}
              <span
                className={`block h-2 w-2 rounded-full ${i === activeIndex ? "bg-pumpkin-500" : "bg-black/20"}`}
              />
            </button>
          ))}
        </div>

        {/* Back and Forward Arrow Button */}
        <div className="justify-end space-x-[15px] lg:flex">
          <button
            className={cn(
              "outline-1",
              "flex items-center space-x-4",
              "rounded-full font-bold uppercase",
              "duration-150 ease-in",
              "cursor-pointer rounded-full p-4",
              "h-12 w-12",
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
              "rounded-full font-bold uppercase",
              "duration-150 ease-in",
              "cursor-pointer rounded-full p-4",
              "h-12 w-12",
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
      </section>
    </Container>
    // </Wrapper>
  );
};

export { Package };
