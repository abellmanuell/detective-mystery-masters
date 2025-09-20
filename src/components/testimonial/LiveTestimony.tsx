import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { cn } from "../../lib/utils";

import Container from "../Container";
import { Heading2 } from "../headings/Heading2";
import { Paragraphing } from "../Paragraphing";
import { HeroAsideVideoPlayButton } from "../HeroAside";

import InstagramIcon from "../../assets/images/icons/icon-instagram.svg";
import LiveAction1 from "../../assets/images/testimonials/live-action-1.webp";
import LiveAction2 from "../../assets/images/testimonials/live-action-2.webp";
import LiveAction3 from "../../assets/images/testimonials/live-action-3.webp";
import LiveAction4 from "../../assets/images/testimonials/live-action-4.webp";

const liveTestimonyVideoImages = [
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
  LiveAction1,
  LiveAction2,
  LiveAction3,
  LiveAction4,
];

const LiveTestimony = () => {
  return (
    <div className="pt-[26.89px] pb-20 lg:pb-[128px]">
      <Container>
        <Heading2 className="heading-with-arrow text-center text-white lg:!text-[56px] lg:!leading-[67.2px]">
          And here's some of the live action
        </Heading2>
      </Container>

      <div className="pt-[17.13px] pb-16">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: "auto",
              centeredSlides: true,
              spaceBetween: 32,
              freeMode: true,
            },
            768: {
              slidesPerView: "auto",
              centeredSlides: true,
              spaceBetween: 32,
              freeMode: true,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 32,
              centeredSlides: true,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 50,
            },
          }}
        >
          {liveTestimonyVideoImages.length > 0 &&
            liveTestimonyVideoImages.map((videoImage: string, i: number) => (
              <SwiperSlide
                key={i}
                className={cn(
                  "relative overflow-clip rounded-2xl",
                  "!h-[496px] !w-[292px] lg:!h-[622px] lg:!w-[416px]",
                )}
              >
                <img src={videoImage} />
                <HeroAsideVideoPlayButton className="bg-white/80 hover:bg-white/90" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* <Container> */}
      <section className="xxxs:px-[86px] flex justify-center text-center sm:px-0">
        <a
          href="#"
          className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-12"
        >
          <img src={InstagramIcon} alt="Instagram" width={24} height={24} />
          <Paragraphing className="text-lg leading-[27px] font-semibold text-white">
            Join our 20k people community on Instagram
          </Paragraphing>
        </a>
      </section>
      {/* </Container> */}
    </div>
  );
};

export { LiveTestimony };
