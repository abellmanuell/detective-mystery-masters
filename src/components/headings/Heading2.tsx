import { cn } from "../../lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const Heading2 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h2
      {...props}
      className={cn(
        "font-bebas-neue tracking-[-1.38px]",
        "!leading-[44px] md:!leading-[70.4px]",
        "text-[40px] md:text-[64px]",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export { Heading2 };
