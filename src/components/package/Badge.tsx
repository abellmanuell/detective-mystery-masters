import { cn } from "../../lib/utils";

const Badge = ({
  title,
  className,
  ...props
}: {
  title: string;
  className?: string;
}) => (
  <div
    {...props}
    className={cn(
      "bg-black",
      "inline-flex items-center justify-center self-baseline rounded-full",
      "px-2 py-0.5 text-white",
      className,
    )}
  >
    <p className="text-xs leading-[18px]">{title}</p>
  </div>
);

export { Badge };
