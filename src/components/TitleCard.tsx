import { Heading2 } from "./headings/Heading2";
import { Paragraphing } from "./Paragraphing";

import GreaterThanIcon from "../assets/images/icons/icon-greater-than.svg";
import React from "react";
import { cn } from "../lib/utils";

type TitleProps = {
  title: string;
  subTitle: string;
};

type BreadCrumbProps = {
  rootHref?: string;
  name: string;
  leaf: Array<{ href: string; name: string }>;
};
interface TitleCardProps {
  titleAndSub: TitleProps;
  breadCrumbs: BreadCrumbProps;
}

const TitleCard = ({ titleAndSub, breadCrumbs }: TitleCardProps) => {
  return (
    <div
      className={cn(
        "bg-tequila-500 rounded-2xl p-4 md:p-6",
        "shadow-[0_4px_12px_rgba(120,120,120,0.1)]",
        "flex flex-col justify-between",
      )}
    >
      <BreadCrumb {...breadCrumbs} />

      <TitleAndSubTitle {...titleAndSub} />
    </div>
  );
};

const BreadCrumb = ({ rootHref = ".", name, leaf }: BreadCrumbProps) => (
  <section>
    <ul className="flex items-center gap-2">
      <li>
        <a className="text-sm leading-[21px] capitalize" href={rootHref}>
          {name}
        </a>
      </li>

      {leaf.map((item, i) => (
        <React.Fragment key={i}>
          <li>
            <img
              src={GreaterThanIcon}
              alt="Greater than icon"
              height={16}
              width={16}
            />
          </li>
          <li>
            <a href={item.href} className="text-sm leading-[21px] capitalize">
              {item.name}
            </a>
          </li>
        </React.Fragment>
      ))}
    </ul>
  </section>
);

const TitleAndSubTitle = ({ title, subTitle }: TitleProps) => (
  <section>
    <Heading2
      className={cn(
        "pt-4 pb-2 text-5xl !leading-[52.8px] md:pt-[71px] md:pb-[47.5px]",
        "md:!leading[110px] md:text-[100px]",
      )}
    >
      {title}
    </Heading2>

    <Paragraphing className="!leading-[22.5px] text-[#3A3A3A] md:text-[20px]">
      {subTitle}
    </Paragraphing>
  </section>
);

export { TitleCard };
