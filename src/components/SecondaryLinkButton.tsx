import type { ReactElement, ReactNode } from "react";
import type React from "react";
import { cn } from "../lib/utils";

interface SecondaryLinkButtonProps {
  href: string;
  children: ReactNode | ReactElement;
  props?: React.Component<"a">;
  className?: string;
}

const SecondaryLinkButton = ({
  href,
  children,
  props,
  className,
}: SecondaryLinkButtonProps) => {
  return (
    <a
      {...props}
      href={href}
      className={cn(
        "outline-1",
        "flex items-center space-x-4",
        "rounded-full px-7 py-4 font-bold uppercase",
        "duration-150 ease-in",
        className,
      )}
    >
      <span>{children}</span>
    </a>
  );
};

export { SecondaryLinkButton };
