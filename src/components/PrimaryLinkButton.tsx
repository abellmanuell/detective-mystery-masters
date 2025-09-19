import type { ReactNode } from "react";
import type React from "react";
import { cn } from "../lib/utils";

interface PrimaryLinkButtonProps {
  href: string;
  children: ReactNode;
  props?: React.Component<"a">;
  className?: string;
}

const PrimaryLinkButton = ({
  href = "#",
  children,
  props,
  className,
}: PrimaryLinkButtonProps) => {
  return (
    <div>
      <a
        {...props}
        href={href}
        className={cn(
          "bg-pumpkin-500 hover:bg-pumpkin-400",
          "xxs:flex-row flex flex-col items-center space-x-4",
          "xxs:px-7 rounded-full py-4 font-bold uppercase",
          "duration-150 ease-in",
          className,
        )}
      >
        <span>{children}</span>
        {/* 
            Right Arrow Icon SVG.
          */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <g clipPath="url(#clip0_161_7335)">
            <g clipPath="url(#clip1_161_7335)">
              <g clipPath="url(#clip2_161_7335)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5363 1.94238C10.5363 5.4811 13.2311 8.27833 16.4753 8.29248H16.5V9.79248V9.79419C13.2448 9.79419 10.5363 12.5967 10.5363 16.1444H9.03627C9.03627 13.5501 10.2405 11.2264 12.1109 9.79248H0.5V8.29248H12.1086C10.2395 6.85843 9.03627 4.53553 9.03627 1.94238H10.5363Z"
                  fill="black"
                />
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_161_7335">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5 0.942383)"
              />
            </clipPath>
            <clipPath id="clip1_161_7335">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5 0.942383)"
              />
            </clipPath>
            <clipPath id="clip2_161_7335">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(0.5 0.942383)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
};

export { PrimaryLinkButton };
