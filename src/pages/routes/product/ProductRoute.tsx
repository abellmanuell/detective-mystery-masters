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

const ProductRoute = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

        <Container className="mt-8 mb-6">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductImage swiperRef={swiperRef} {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

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

        <Container className="grid gap-8 overflow-clip">
          <ProductDetailCard />
          <ProductFAQ />
        </Container>
      </Wrapper>
    </>
  );
};

export default ProductRoute;
