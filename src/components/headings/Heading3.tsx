import { cn } from "../../lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const Heading3 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h3
      {...props}
      className={cn(
        "font-bebas-neue",
        "leading-[33.6px]",
        "text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export { Heading3 };
