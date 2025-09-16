import { cn } from "../../lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={cn(
        "font-bebas-neue tracking-[-1.38px]",
        "leading-[52.8px] md:leading-[110px]",
        "text-5xl md:text-[100px] lg:text-center",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export { Heading };
