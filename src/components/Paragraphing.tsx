import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ParagraphingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

const Paragraphing = ({ children, className, ...props }: ParagraphingProps) => {
  return (
    <p className={cn("leading-6", className)} {...props}>
      {children}
    </p>
  );
};

export { Paragraphing };
