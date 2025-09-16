import { cn } from "../../lib/utils";
import { Heading3 } from "../headings/Heading3";
import { Paragraphing } from "../Paragraphing";

interface StepItemProps {
  className?: string;
  imageUrl: string;
  headline: string;
  subheadline: string;
}

const StepItem = ({
  imageUrl,
  headline,
  subheadline,
  className,
}: StepItemProps) => {
  return (
    <div className={cn("pt-12 md:pt-0", className)}>
      <div className="h-[213px] max-w-[358px] overflow-clip md:h-[213px] md:max-w-[421.33px]">
        <img
          src={imageUrl}
          alt={headline}
          className={cn(
            "rounded-2xl object-cover",
            "h-[213px] w-[358px] md:h-[213px] md:w-[421.33px]",
          )}
        />
      </div>

      <div className="pt-6">
        <Heading3 className="pb-3 text-center">{headline}</Heading3>
        <Paragraphing className="text-center">{subheadline}</Paragraphing>
      </div>
    </div>
  );
};

export { StepItem };
