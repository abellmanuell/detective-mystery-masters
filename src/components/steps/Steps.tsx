import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface StepsProps {
  children: ReactNode;
  className?: string;
}

const Steps = ({ children, className }: StepsProps) => {
  return (
    <section className={cn("pb-12 md:py-20", className)}>{children}</section>
  );
};

export { Steps };
