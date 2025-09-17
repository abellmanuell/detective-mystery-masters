import { Heading2 } from "../headings/Heading2";
import { Paragraphing } from "../Paragraphing";
import { SecondaryLinkButton } from "../SecondaryLinkButton";

import ForwardArrowIcon from "../../assets/images/icons/IconForwardArrow.svg";
import CheckIcon from "../../assets/images/icons/icon-check.svg";
import { List } from "../List";
import { ListItem } from "../ListItem";

const Discount = () => {
  return (
    <div className="bg-tequila-500 rounded-3xl p-4 pb-[30px] text-black">
      <div className="space-y-3.5">
        <Heading2 className="text-[32px]">Get your 10% discount</Heading2>
        <Paragraphing className="text-sm">
          Stay in the loop with the latest in detective mystery masters deals.
          Sign up and enjoy 10% off your first Detective order.
        </Paragraphing>
      </div>

      <form className="flex justify-center space-x-1.5 pt-4 pb-6">
        <input
          type="text"
          className="grow rounded-full p-4 outline-1 placeholder:text-base placeholder:text-black"
          placeholder="Email Address"
        />

        <SecondaryLinkButton
          href="#"
          className="bg-pumpkin-500 rounded-full p-4 outline-none"
        >
          <img
            src={ForwardArrowIcon}
            alt="Forward Arrow Icon"
            width={24}
            height={24}
          />
        </SecondaryLinkButton>
      </form>

      <List>
        <ListItem icon={CheckIcon} label="Exclusive deals & discounts" />
        <ListItem icon={CheckIcon} label="Unsubscribe anytime" />
      </List>
    </div>
  );
};

export { Discount };
