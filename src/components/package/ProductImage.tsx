import { cn } from "../../lib/utils";

import { AiFillStar } from "react-icons/ai";
import { Badge } from "./Badge";
import { Game10PaperCard } from "./Game10PaperCard";

export type ProductImageProps = {
  index?: number;
  imageUrl: string;
  tags: Array<string>;
  isMegaBundle: boolean;
  bundle: string;
};

const ProductImage = ({
  index,
  imageUrl,
  tags = ["Popular", "Gift Included"],
  isMegaBundle,
  bundle,
}: ProductImageProps) => {
  return (
    <div
      className={cn(
        "h-[316px] overflow-clip",
        "relative pt-[16.15px] pr-2 pb-2 pl-[11.7px]",
        "flex flex-col justify-between",
        index == 0 ? "h-[316px]" : "h-[167px] md:h-[316px]",
      )}
    >
      <img
        className={cn(
          "absolute top-0 left-0 size-full object-cover",
          "h-[167px] w-full rounded-2xl lg:w-full",
          index == 0 ? "h-[316px]" : "h-[167px] md:h-[316px]",
        )}
        src={imageUrl}
        alt={imageUrl.split("/")[imageUrl.split("/").length - 1]}
      />

      <div className="relative flex flex-col space-y-3 uppercase">
        {tags.length > 0 &&
          tags.map((tag, i) => (
            <Badge
              key={i}
              title={tag}
              className={i == 0 ? "bg-[#FDA32E]" : "bg-[#59C254]"}
            />
          ))}
      </div>

      {isMegaBundle && bundle && (
        <Game10PaperCard index={index}>
          <div
            className={cn(
              "relative flex flex-col justify-center px-1.5 pt-[20px]",
            )}
          >
            <div className="flex items-center text-white">
              <AiFillStar className="w-[9.25px] md:w-[11.4px]" />
              <AiFillStar className="w-[9.25px] md:w-[11.4px]" />
              <AiFillStar className="w-[9.25px] md:w-[11.4px]" />
              <AiFillStar className="w-[9.25px] md:w-[11.4px]" />
              <AiFillStar className="w-[9.25px] md:w-[11.4px]" />
            </div>

            <h3
              className={cn(
                "font-bebas-neue text-left text-white",
                "text-2xl leading-[28.8px]",
                index !== 0 ? "text-[12.98px] md:text-2xl" : "text-2xl",
              )}
            >
              {bundle}-Games
            </h3>

            <p
              className={cn(
                "font-bebas-neue text-left text-[12.5px] leading-3.5 text-white",
                index !== 0
                  ? "text-[10.14px] md:text-[12.5px]"
                  : "text-[12.5px]",
              )}
            >
              Mega Bundle
            </p>
          </div>
        </Game10PaperCard>
      )}
    </div>
  );
};

export { ProductImage };
