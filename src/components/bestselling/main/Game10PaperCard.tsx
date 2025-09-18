import { cn } from "../../../lib/utils";

const Game10PaperCard = (props: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "bg-red-orange-500 relative self-end rounded",
        "h-[90px] w-[89px]",
        "flex flex-col gap-1",
        "paper-red-mask relative z-5 drop-shadow-2xl",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

export { Game10PaperCard };
