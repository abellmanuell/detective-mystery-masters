import type { ReactNode } from "react";

import { cn } from "../../lib/utils";

// import Wrapper from "../Wrapper";
import Container from "../Container";
import { Paragraphing } from "../Paragraphing";

import { Discount } from "./Discount";

import PaymentIcons from "../../assets/images/icons/icon-payment.svg";
import FacebookIcon from "../../assets/images/icons/icon-facebook.svg";
import InstagramIcon from "../../assets/images/icons/icon-instagram.svg";

import WhiteLogo from "../../assets/images/logo-white.svg";

const Footer = () => {
  return (
    // <Wrapper>
    <div className="relative z-5 rounded-t-3xl bg-black text-white">
      <Container
        className={cn(
          "lg:min-h-dvh",
          "md:!w[1280px] py-6 md:pt-[83px] md:pb-[63px]",
        )}
      >
        <Discount className="md:px-20 md:py-[63px]" />

        <div className="overflow-clip px-[34px] md:w-full md:px-0 lg:px-0">
          <FooterContainer>
            <FooterItem
              title="Shop"
              list={[
                { name: "All products" },
                { name: "Detective cases" },
                { name: "Case games" },
                { name: "Escape rooms" },
                { name: "Print & play" },
                { name: "Card games" },
              ]}
            />

            <FooterItem
              title="Detective Mystery Masters"
              list={[{ name: "About Us" }]}
            />

            <FooterItem
              title="Help"
              list={[
                { name: "Shipping Information" },
                { name: "Refund Policy" },
                { name: "FAQ" },
                { name: "Privacy Policy" },
                { name: "Print & play" },
                { name: "Terms of Service" },
              ]}
            />

            <section className="pb-[46px]">
              <a href="#">
                <img
                  src={PaymentIcons}
                  alt="Payment Icons"
                  className="h-[86px] w-[295px] md:w-[302px]"
                />
              </a>
            </section>
          </FooterContainer>

          <div className="flex-row-reverse items-center justify-between md:flex">
            <section>
              <ul className="flex space-x-4">
                <li>
                  <a href="#">
                    <img src={InstagramIcon} alt="Instagram" width={20} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={FacebookIcon} alt="Facebook" width={20} />
                  </a>
                </li>
              </ul>
            </section>

            <div className="items-end md:flex md:space-x-4">
              <section className="py-6">
                <img
                  src={WhiteLogo}
                  alt="Detective Mystery Masters Logo"
                  height={51}
                />
              </section>

              <section className="leading-6 text-white/60 md:flex md:space-x-2 md:pb-5 md:text-xs">
                <Paragraphing>©2025 Detective Mystery Masters</Paragraphing>
                <a href="mailto:support@detectivemysterymasters.com">
                  support@detectivemysterymasters.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </div>
    // </Wrapper>
  );
};

const FooterContainer = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "grid gap-y-[43.5px] pt-[66px] pb-[36px] lg:gap-y-[79px]",
        "md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const FooterItem = ({
  title,
  list,
  className,
  ...props
}: {
  title: string;
  list: Array<{ href?: string; name: string }>;
  className?: string;
}) => {
  return (
    <div {...props} className={cn("space-y-3.5", className)}>
      <h3 className="text-lg leading-8 font-bold">{title}</h3>

      <ul>
        {list.map(({ href, name }) => (
          <li className="h-[40px]" key={name}>
            <a href={href || "#"}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Footer };
