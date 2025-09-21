import { AiFillStar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

import { cn } from "../../../lib/utils";
import { announcements } from "../../../lib/globalVariables";

import Wrapper from "../../../components/Wrapper";
import Container from "../../../components/Container";
import { HeaderNavBar } from "../../../components/HeaderNavBar";
import { AnnouncementBar } from "../../../components/AnnouncementBar";
import { AnnouncementBarItem } from "../../../components/AnnouncementBarItem";
import { Heading3 } from "../../../components/headings/Heading3";

import { HeroAsideVideoPlayButton } from "../../../components/HeroAside";
import { Paragraphing } from "../../../components/Paragraphing";
import { PrimaryLinkButton } from "../../../components/PrimaryLinkButton";

import SeeHowItWorkImage from "../../../assets/images/hero-aside-video-poster.webp";
import ShippingIconWhite from "../../../assets/images/icons/icon-shipping-white.svg";
import ClockIconWhite from "../../../assets/images/icons/icon-clock-white.svg";
import IconFolderWhite from "../../../assets/images/icons/icon-folders-white.svg";
import PaymentIcon from "../../../assets/images/icons/icon-payment.svg";

const ProductRoute = () => {
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

        <Container>
          <section className="bg-tequila-500 rounded-2xl p-4">
            <div className="xxs:flex-row xxs:items-center flex flex-col gap-2">
              <div className="text-pumpkin-500 flex space-x-[3.24px]">
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
              </div>
              <p className="text-left text-lg leading-[24px] font-semibold text-black">
                1024 reviews
              </p>
            </div>

            <Heading3 className="py-4 text-[32px] !leading-[38.4px]">
              10-Game Detective Mega Bundle
            </Heading3>

            <section className="xxxs:flex-row xxxs:items-center flex flex-col gap-4">
              <div className="relative h-[81px] max-w-[81px]">
                <img
                  className="h-[81px] w-[81px] rounded-full object-cover"
                  src={SeeHowItWorkImage}
                  alt="See How It Work Image"
                />
                <HeroAsideVideoPlayButton className="bg-white/0" />
              </div>

              <Heading3 className="text-[21.64px] !leading-[25.968px]">
                See How It Works
              </Heading3>
            </section>

            <div className="flex flex-wrap gap-6 py-4">
              <div className="font-bebas-neue flex space-x-2">
                <p className="text-red-orange-500 text-2xl">€{325.0}</p>
                <p>
                  <del className="text-[#868686]">€{650.0}</del>
                </p>
              </div>
              <div
                className={cn(
                  "bg-red-orange-500",
                  "flex items-center justify-center rounded-full",
                  "self-start px-2 py-0.5 text-white",
                )}
              >
                <p>Save 50%</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-red-orange-500 h-2.5 w-2.5 rounded-full ring-2 ring-red-500/50"></div>
              <Paragraphing className="!leading-[24px] font-bold">
                8 units in stock
              </Paragraphing>
            </div>

            <Paragraphing className="py-4 !leading-[24px]">
              Short product description about product. Other content, short
              product description about product. Short product description about
              product. Other content.
            </Paragraphing>

            <hr className="text-[#F3D4B5]" />

            <section className="flex flex-col gap-2.5 py-4">
              <div className="bg-dark-burgundy-500 xxxs:flex-row inline-flex w-fit flex-col items-center gap-3 rounded-full px-3 py-2">
                <img
                  src={ShippingIconWhite}
                  alt="Shipping Icon White"
                  width={24}
                  height={24}
                />
                <Paragraphing className="text-white">
                  Free worldwide shipping
                </Paragraphing>
              </div>

              <div className="bg-dark-burgundy-500 xxxs:flex-row inline-flex w-fit flex-col items-center gap-3 rounded-full px-3 py-2">
                <img
                  src={IconFolderWhite}
                  alt="Folder Icon White"
                  width={24}
                  height={24}
                />
                <Paragraphing className="text-white">
                  10 games included
                </Paragraphing>
              </div>

              <div className="bg-dark-burgundy-500 xxxs:flex-row inline-flex w-fit flex-col items-center gap-3 rounded-full px-3 py-2">
                <img
                  src={ClockIconWhite}
                  alt="Clock Icon White"
                  width={24}
                  height={24}
                />
                <Paragraphing className="text-white">
                  20 playable hours
                </Paragraphing>
              </div>
            </section>

            <section className="bg-dark-burgundy-500 my-4 rounded-[8px] p-4 text-white">
              <Heading3>Jene</Heading3>

              <div className="text-pumpkin-500 flex space-x-[3.24px] pt-4 pb-8">
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
              </div>

              <Paragraphing className="text-sm !leading-[19.6px]">
                Wow, Detective Mystery Masters completely saved my weekly
                friends gathering. It was the best decision to play the game
                with everyone.
              </Paragraphing>
            </section>

            <hr className="text-[#F3D4B5]" />

            <section className="my-4 flex h-[213px] items-center justify-center rounded-[8px] bg-[#F1D8C0] p-4">
              <Heading3>KACHING BUNDLES</Heading3>
            </section>

            <hr className="text-[#F3D4B5]" />

            <section className="flex flex-col gap-4 py-4">
              <button
                className={cn(
                  "outline-1",
                  "xxxs:flex-row flex flex-col items-center space-x-4",
                  "rounded-full px-7 py-4 font-bold",
                  "duration-150 ease-in",
                )}
              >
                <span>Add bundle to cart</span>
                <FaCircle size={4} className="text-pumpkin-500" />
                <span>€325.00</span>
              </button>

              <PrimaryLinkButton className="justify-center" href="#">
                Checkout now
              </PrimaryLinkButton>

              <div>
                <img src={PaymentIcon} alt="Payment Icon" />
              </div>
            </section>
          </section>
        </Container>
      </Wrapper>
    </>
  );
};

export default ProductRoute;
