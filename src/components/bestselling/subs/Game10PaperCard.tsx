import { cn } from "../../../lib/utils";

const Game10PaperCard = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-red-orange-500 rounded-lg text-white",
        "absolute right-1.5 bottom-[10px]",
        "px-2 pt-2 pb-[10.12px]",
        "h-[73px] w-[62.46px]",
        "flex flex-col gap-1",
        "paper-red-mask z-5 shadow-2xl shadow-amber-500",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export { Game10PaperCard };
