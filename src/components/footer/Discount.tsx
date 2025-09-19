import { Heading2 } from "../headings/Heading2";
import { Paragraphing } from "../Paragraphing";
import { SecondaryLinkButton } from "../SecondaryLinkButton";

import ForwardArrowIcon from "../../assets/images/icons/IconForwardArrow.svg";
import CheckIcon from "../../assets/images/icons/icon-check.svg";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { cn } from "../../lib/utils";

const Discount = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-tequila-500 overflow-clip rounded-3xl p-4 pb-[30px] text-black md:flex md:gap-x-[114.3px]",
        className,
      )}
    >
      <div className="space-y-3.5">
        <Heading2 className="text-[32px] md:text-4xl md:leading-[57.2px] lg:text-[44px] lg:leading-[57.2px]">
          Get your 10% discount
        </Heading2>
        <Paragraphing className="text-sm md:max-w-[532.97px] md:text-base">
          Stay in the loop with the latest in detective mystery masters deals.
          Sign up and enjoy 10% off your first Detective order.
        </Paragraphing>
      </div>

      <div className="grow">
        <form className="xs:flex-row xs:space-y-0 flex flex-col place-items-center space-y-2 space-x-1.5 pt-4 pb-6">
          <input
            type="text"
            className="xs:w-auto w-full grow rounded-full p-4 outline-1 placeholder:text-base placeholder:text-black"
            placeholder="Email Address"
          />

          <SecondaryLinkButton
            href="#"
            className="bg-pumpkin-500 xs:inline-block xs:w-auto flex w-full items-center justify-center rounded-full p-4 outline-none"
          >
            <img
              src={ForwardArrowIcon}
              alt="Forward Arrow Icon"
              className="min-h-6 min-w-6"
              width={24}
              height={24}
            />
          </SecondaryLinkButton>
        </form>

        <List className="md:space-y-0 md:space-x-3.5 lg:flex">
          <ListItem icon={CheckIcon} label="Exclusive deals & discounts" />
          <ListItem icon={CheckIcon} label="Unsubscribe anytime" />
        </List>
      </div>
    </div>
  );
};

export { Discount };
