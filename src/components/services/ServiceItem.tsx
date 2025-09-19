import { cn } from "../../lib/utils";
import { Heading3 } from "../headings/Heading3";
import { Paragraphing } from "../Paragraphing";

interface ServiceItemProps {
  className?: string;
  headline: string;
  subheadline: string;
  imageUrl: string;
}

const ServiceItem = ({
  className,
  headline,
  subheadline,
  imageUrl,
}: ServiceItemProps) => {
  return (
    <section className={cn("xxs:flex items-start space-x-6", className)}>
      <img src={imageUrl} alt={headline} className="w-[47px]" />

      <div className="space-y-4">
        <Heading3>{headline}</Heading3>

        <Paragraphing className="text-[#3A3A3A]">{subheadline}</Paragraphing>
      </div>
    </section>
  );
};

export { ServiceItem };
