import { cn } from "../lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl p-4 lg:max-w-[1400px] xl:max-w-[1500px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
