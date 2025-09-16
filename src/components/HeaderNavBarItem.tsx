import { MdKeyboardArrowDown } from "react-icons/md";

import { HeaderProductsList } from "./HeaderProductsList";
import { cn } from "../lib/utils";

const NavItem = ({
  navs,
}: {
  navs: {
    name: string;
    href: string;
    isDropdown: boolean;
    isPercentage: boolean;
    percentage?: string;
  }[];
}) => (
  <div className="ml-20 hidden grow lg:flex">
    {navs.map((nav, i) => {
      return (
        <div
          key={i}
          className={"group mx-6 flex items-center !py-[10px] md:!py-[14.4px]"}
        >
          <a
            href={nav.href}
            key={i}
            className={cn(
              "font-semibold",
              (nav.isPercentage || nav.isDropdown) &&
                "flex items-center space-x-2",
            )}
          >
            <span>{nav.name}</span>

            {nav.isDropdown && (
              <div>
                <MdKeyboardArrowDown
                  size={20}
                  className="transition-transform group-hover:rotate-180"
                />
              </div>
            )}

            {nav.isPercentage && (
              <div className="inline-flex h-[21px] w-[50px] items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {nav.percentage}
              </div>
            )}
          </a>
          {nav.isDropdown && (
            <HeaderProductsList className="absolute inset-x-0 top-full hidden p-4 group-hover:block" />
          )}
        </div>
      );
    })}
  </div>
);

export { NavItem };
