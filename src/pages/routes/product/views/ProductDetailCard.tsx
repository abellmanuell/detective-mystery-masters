import { cn } from "../../../../lib/utils";

import { AiFillStar } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

import { Heading3 } from "../../../../components/headings/Heading3";
import { Paragraphing } from "../../../../components/Paragraphing";
import { HeroAsideVideoPlayButton } from "../../../../components/HeroAside";
import { PaymentGateWay } from "./PaymentGateWay";

import TruckIconBlack from "../../../../assets/images/icons/icon-truck-black.svg";
import PackageIconBlack from "../../../../assets/images/icons/icon-package-black.svg";
import ForwardArrowOrangeIcon from "../../../../assets/images/icons/icon-forward-arrow-orange.svg";

import SeeHowItWorkImage from "../../../../assets/images/hero-aside-video-poster.webp";
import ClockIconWhite from "../../../../assets/images/icons/icon-clock-white.svg";
import ShippingIconWhite from "../../../../assets/images/icons/icon-shipping-white.svg";
import FolderIconWhite from "../../../../assets/images/icons/icon-folders-white.svg";
import { PrimaryLinkButton } from "../../../../components/PrimaryLinkButton";
import DHLLogo from "../../../../assets/images/payments-gateway-logo/dhl-logo.svg";
import FedExLogo from "../../../../assets/images/payments-gateway-logo/fedex-logo.svg";

import VisaLogo from "../../../../assets/images/payments-gateway-logo/visa-logo.svg";
import AmexLogo from "../../../../assets/images/payments-gateway-logo/amex-logo.svg";
import ApplePayLogo from "../../../../assets/images/payments-gateway-logo/apple-pay-logo.svg";
import DinersClubLogo from "../../../../assets/images/payments-gateway-logo/diners-club-logo.svg";
import GooglePayLogo from "../../../../assets/images/payments-gateway-logo/google-pay-logo.svg";
import MaestroLogo from "../../../../assets/images/payments-gateway-logo/maestro-logo.svg";
import MasterCardLogo from "../../../../assets/images/payments-gateway-logo/mastercard-logo.svg";
import PaymentTypesLogo from "../../../../assets/images/payments-gateway-logo/payment-types-logos.svg";
import PayPalLogo from "../../../../assets/images/payments-gateway-logo/paypal-logo.svg";
import StripeLogo from "../../../../assets/images/payments-gateway-logo/stripe-logo.svg";

const paymentGateWay = [
  { name: "Visa", imageUrl: VisaLogo },
  { name: "Dinners Club", imageUrl: DinersClubLogo },
  { name: "Apple Pay", imageUrl: ApplePayLogo },
  { name: "Google Pay", imageUrl: GooglePayLogo },
  { name: "Maestro", imageUrl: MaestroLogo },
  { name: "Mastercard", imageUrl: MasterCardLogo },
  { name: "PayPal", imageUrl: PayPalLogo },
  { name: "Payment Types Logo", imageUrl: PaymentTypesLogo },
  { name: "Amex", imageUrl: AmexLogo },
  { name: "Stripe", imageUrl: StripeLogo },
];
const ProductDetailCard = () => {
  return (
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

      <Heading3 className="py-4 text-[32px] !leading-[38.4px] lg:text-5xl lg:!leading-[57.6px]">
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
          <p className="text-red-orange-500 text-2xl lg:text-[32px]">
            €{325.0}
          </p>
          <p className="text-[#868686] lg:text-xl">
            <del>€{650.0}</del>
          </p>
        </div>

        <div
          className={cn(
            "bg-red-orange-500",
            "flex items-center justify-center rounded-full",
            "self-start px-2 py-0.5 text-white",
          )}
        >
          <p className="font-bold">Save 50%</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="bg-red-orange-500 h-2.5 w-2.5 rounded-full ring-2 ring-red-500/50"></div>
        <Paragraphing className="!leading-[24px] font-bold">
          8 units in stock
        </Paragraphing>
      </div>

      <Paragraphing className="py-4 !leading-[24px]">
        Short product description about product. Other content, short product
        description about product. Short product description about product.
        Other content.
      </Paragraphing>

      <hr className="text-[#F3D4B5]" />

      <section className="flex flex-wrap gap-2.5 py-4">
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
            src={FolderIconWhite}
            alt="Folder Icon White"
            width={24}
            height={24}
          />
          <Paragraphing className="text-white">10 games included</Paragraphing>
        </div>

        <div className="bg-dark-burgundy-500 xxxs:flex-row inline-flex w-fit flex-col items-center gap-3 rounded-full px-3 py-2">
          <img
            src={ClockIconWhite}
            alt="Clock Icon White"
            width={24}
            height={24}
          />
          <Paragraphing className="text-white">20 playable hours</Paragraphing>
        </div>
      </section>

      <section
        className={cn(
          "bg-dark-burgundy-500 my-4 p-4",
          "flex flex-col md:flex-row md:items-center",
          "rounded-[8px] text-white md:space-x-8",
        )}
      >
        <div>
          <Heading3 className="text-base">Jene</Heading3>

          <div className="text-pumpkin-500 flex space-x-[3.24px] pt-4 pb-8">
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
            <AiFillStar size={20} />
          </div>
        </div>

        <Paragraphing className="text-sm !leading-[19.6px]">
          Wow, Detective Mystery Masters completely saved my weekly friends
          gathering. It was the best decision to play the game with everyone.
        </Paragraphing>
      </section>

      <hr className="text-[#F3D4B5]" />

      <section className="my-4 flex h-[213px] items-center justify-center rounded-[8px] bg-[#F1D8C0] p-4">
        <Heading3>KACHING BUNDLES</Heading3>
      </section>

      <hr className="text-[#F3D4B5]" />

      {/* Add to cart & Checkout buttons */}
      <section className="flex flex-col gap-4 pt-4">
        <button
          className={cn(
            "outline-1",
            "xxxs:flex-row flex flex-col items-center justify-center space-x-4",
            "cursor-pointer rounded-full px-7 py-4 font-bold",
            "duration-150 ease-in",
          )}
        >
          <span>Add bundle to cart</span>
          <FaCircle size={4} className="text-pumpkin-500" />
          <span>€325.00</span>
        </button>

        <PrimaryLinkButton className="justify-center capitalize" href="#">
          Checkout now
        </PrimaryLinkButton>

        <div className="grid grid-cols-5 place-items-center gap-[21.4px] px-[8.7px] md:grid-cols-10 md:gap-[7.6px]">
          {paymentGateWay.map((p, i) =>
            i === 8 ? (
              <PaymentGateWay key={i} {...p} isBorder={true} />
            ) : (
              <PaymentGateWay key={i} {...p} />
            ),
          )}
        </div>

        <section className="space-y-4">
          <ul className="border-pumpkin-500 bg-pumpkin-200 grid grid-cols-3 place-items-center gap-4 rounded-2xl border-2 p-4">
            <li className="flex flex-col gap-1">
              <div className="flex gap-1">
                <img
                  src={TruckIconBlack}
                  alt="Truck Icon"
                  className="h-[16px] max-w-[16px]"
                />
                <Paragraphing className="text-xs">Order within</Paragraphing>
              </div>
              <Heading3 className="text-2xl tracking-[2%] md:text-[32px]">
                00:24:54
              </Heading3>
            </li>
            <li>
              <img
                src={ForwardArrowOrangeIcon}
                alt="Forward Arrow Orange Icon"
                className="h-[47.41px] w-[56.06px] md:h-[61.35px] md:w-[72.54px]"
              />
            </li>
            <li className="flex flex-col gap-1">
              <div className="flex gap-1">
                <img
                  src={PackageIconBlack}
                  alt="Package Icon Black"
                  className="h-[16px] max-w-[16px]"
                />
                <Paragraphing className="text-xs">Receive Order</Paragraphing>
              </div>
              <Heading3 className="text-2xl tracking-[2%] md:text-[32px]">
                00:24:54
              </Heading3>
            </li>
          </ul>

          <div className="flex h-[50px] items-center justify-between gap-[52px] md:flex-row">
            <Paragraphing className="text-xs font-bold">
              Shipments are taken care and delivered in 1-4 business days by:
            </Paragraphing>

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <img
                src={FedExLogo}
                alt="Fed Ex"
                className="h-[18px] max-w-[57px] md:h-[23.23px]"
              />
              <img
                src={DHLLogo}
                alt="DHL"
                className="h-[16px] max-w-[70px] md:h-[20.55px]"
              />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export { ProductDetailCard };
