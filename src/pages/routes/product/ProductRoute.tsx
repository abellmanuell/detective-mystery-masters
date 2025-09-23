import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { announcements, products } from "../../../lib/globalVariables";

import Wrapper from "../../../components/Wrapper";
import Container from "../../../components/Container";
import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";

import { ProductFAQ } from "./views/ProductFAQ";
import { ProductDetailCard } from "./views/ProductDetailCard";
import { ProductImage } from "./views/ProductImage";
import { useMediaQuery } from "react-responsive";

import ArrowIcon from "../../../assets/images/icons/icon-greater-than.svg";

import Product2 from "../../../assets/images/products/product-2.webp";
import Product3 from "../../../assets/images/products/product-3.webp";
import Product4 from "../../../assets/images/products/product-4.webp";
import { BreadCrumb } from "../../../components/TitleCard";

const ProductRoute = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <Wrapper>
        {/* Only use <AnnouncementBarItem> inside <AnnouncementBar> for consistency */}
        <AnnouncementBar>
          {announcements.map(({ icon, text }, i) => {
            return <AnnouncementBarItem key={i} icon={icon} text={text} />;
          })}
        </AnnouncementBar>

        <HeaderNavBar />

        {isMobile && (
          <Container className="mt-8 mb-6 overflow-clip">
            <div className="relative flex justify-between">
              <Swiper
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
              >
                {products.map((product, i) => (
                  <SwiperSlide key={i}>
                    <ProductImage {...product} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className={`absolute top-[55%] left-2 z-5 -translate-y-1/2 rounded-full bg-white/60 p-2 transition ${
                  isBeginning ? "cursor-not-allowed opacity-40" : "opacity-100"
                }`}
              >
                <img
                  src={ArrowIcon}
                  alt=""
                  className="max-h-[18px] max-w-[18px] rotate-180"
                />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className={`absolute top-[55%] right-2 z-5 -translate-y-1/2 rounded-full bg-white/60 p-2 text-white transition ${
                  isEnd ? "cursor-not-allowed opacity-40" : "opacity-100"
                }`}
              >
                <img
                  src={ArrowIcon}
                  alt=""
                  className="max-h-[18px] max-w-[18px]"
                />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center space-x-2">
              {products.map((product, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`max-h-[80px] max-w-[80.5px] cursor-pointer transition ${
                    i === activeIndex ? "opacity-100" : "opacity-75"
                  }`}
                >
                  <Swiper>
                    {i === activeIndex ? (
                      <SwiperSlide>
                        <img
                          src={product.imageUrl}
                          className="max-h-[80px] max-w-[80.5px] rounded-2xl"
                        />
                      </SwiperSlide>
                    ) : (
                      <SwiperSlide>
                        <img
                          src={product.imageUrl}
                          className="max-h-[80px] max-w-[80.5px] rounded-2xl"
                        />
                      </SwiperSlide>
                    )}
                  </Swiper>
                </button>
              ))}
            </div>
          </Container>
        )}

        {!isMobile && (
          <Container>
            <div className="pt-8 pb-12">
              <BreadCrumb
                name="Home page"
                leaf={[
                  { name: "Case games", href: "/case-games" },
                  {
                    name: "10-Game Detective Mega Bundle",
                    href: "/case-games/10-game-detective-mega-bundle",
                  },
                ]}
              />
            </div>
          </Container>
        )}

        <Container className="grid gap-8 overflow-clip pb-10 lg:grid-cols-2 lg:items-start">
          {!isMobile && (
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-2">
                <ProductImage
                  {...products[0]}
                  className="lg:h-[640px]"
                  isZoom={true}
                />
              </div>

              <div className="col-span-1">
                <ProductImage imageUrl={Product3} />
              </div>

              <div className="col-span-1">
                <ProductImage imageUrl={Product2} />
              </div>

              <div className="col-span-2">
                <ProductImage imageUrl={Product4} className="lg:h-[640px]" />
              </div>
            </div>
          )}
          <div className="grid gap-y-8">
            <ProductDetailCard />
            <ProductFAQ />
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProductRoute;
