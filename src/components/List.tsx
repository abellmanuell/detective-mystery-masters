import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const List = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("space-y-3.5", className)}>{children}</div>;
};

export { List };
