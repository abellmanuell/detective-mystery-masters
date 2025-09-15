import { HiOutlineX } from "react-icons/hi";
import { useState } from "react";

import { cn } from "../lib/utils";

import Container from "./Container";
import { CartNotificationBadge } from "./CartNotificationBadge";
import { HeaderProductsList } from "./HeaderProductsList";
import { Logo } from "./Logo";
import { NavItem } from "./HeaderNavBarItem";
import { SecondaryLinkButton } from "./SecondaryLinkButton";

import MenuIcon from "../assets/images/menu.svg";

const navList = [
  {
    name: "Products",
    href: "/products",
    isDropdown: true,
    isPercentage: false,
    percentage: "",
  },
  {
    name: "Sale",
    href: "/sale",
    isDropdown: false,
    isPercentage: true,
    percentage: "-50%",
  },
  {
    name: "Bundles",
    href: "/bundles",
    isDropdown: false,
    isPercentage: false,
    percentage: "",
  },
];

const HeaderNavBar = () => {
  const [showProductsList, setShowProductsList] = useState(false);
  return (
    <div className="relative z-10">
      <Container
        className={cn(
          "flex justify-between !py-[10px] lg:justify-start",
          "h-16",
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation Items */}
        <NavItem navs={navList} />

        {/* Cart & Hamburger Menu */}
        <div className="flex items-center space-x-6">
          {/* Shop All button - hidden on mobile */}
          <SecondaryLinkButton href="#" className="hidden py-2 md:block">
            Shop All
          </SecondaryLinkButton>

          <CartNotificationBadge href="#" cart="3" />

          {/* Hamburger Menu for mobile */}
          <button
            onClick={() => setShowProductsList((prev) => !prev)}
            className="inline-block cursor-pointer lg:hidden"
          >
            {showProductsList ? (
              <HiOutlineX size={24} />
            ) : (
              <img src={MenuIcon} alt="" height={24} width={24} />
              // <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile products list */}
      <HeaderProductsList
        className={cn("fixed inset-x-0 top-26 bottom-0 lg:hidden", {
          ["hidden"]: !showProductsList,
        })}
      />
    </div>
  );
};

export { HeaderNavBar };
