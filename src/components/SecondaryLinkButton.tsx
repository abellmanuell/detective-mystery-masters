import type { ReactNode } from "react";
import type React from "react";
import { cn } from "../lib/utils";

interface SecondaryLinkButtonProps {
  href: string;
  children: ReactNode;
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
    <div>
      <a
        {...props}
        href={href}
        className={cn(
          "bg-transparent outline-1",
          "flex items-center space-x-4",
          "rounded-full px-7 py-4 font-bold uppercase",
          "duration-150 ease-in",
          className,
        )}
      >
        <span>{children}</span>
      </a>
    </div>
  );
};

export { SecondaryLinkButton };
