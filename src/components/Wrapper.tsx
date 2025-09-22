import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-chamois-500 relative", className)}>
      <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay" />
      {children}
    </div>
  );
};

export default Wrapper;
