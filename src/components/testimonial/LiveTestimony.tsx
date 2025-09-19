import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import { cn } from "../../lib/utils";

import Container from "../Container";
import { Heading2 } from "../headings/Heading2";
import { Paragraphing } from "../Paragraphing";

import LiveAction1 from "../../assets/images/testimonials/live-action-1.webp";
import LiveAction2 from "../../assets/images/testimonials/live-action-2.webp";
import InstagramIcon from "../../assets/images/icons/icon-instagram.svg";

const LiveTestimony = () => {
  return (
    <div className="pt-[26.89px] pb-[128px]">
      <Container>
        <Heading2 className="heading-with-arrow text-center text-white">
          And here's some of the live action
        </Heading2>
      </Container>

      <div className="pt-[17.13px] pb-16">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1.2,
              centeredSlides: true,
              spaceBetween: 32,
            },
            /* 768: {
            slidesPerView: 4,
            spaceBetween: 40,
          }, */
            1024: {
              slidesPerView: 4.1,
              spaceBetween: 32,
              centeredSlides: true,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 50,
            },
          }}
        >
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction1} className="" />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction2} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction1} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction2} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction1} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction2} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction1} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction2} />
          </SwiperSlide>{" "}
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction1} />
          </SwiperSlide>
          <SwiperSlide className="h-[622px] max-w-[416px] overflow-clip rounded-2xl">
            <img src={LiveAction2} />
          </SwiperSlide>
        </Swiper>
      </div>

      <Container>
        <a
          href="#"
          className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12"
        >
          <img src={InstagramIcon} alt="Instagram" width={24} height={24} />
          <Paragraphing className="text-lg leading-[27px] font-semibold text-white">
            Join our 20k people community on Instagram
          </Paragraphing>
        </a>
      </Container>
    </div>
  );
};

export { LiveTestimony };
