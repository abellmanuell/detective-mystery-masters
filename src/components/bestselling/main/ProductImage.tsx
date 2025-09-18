import { AiFillStar } from "react-icons/ai";
import { cn } from "../../../lib/utils";
import { Badge } from "./Badge";
import { Game10PaperCard } from "./Game10PaperCard";

interface ProductImageProps {
  imageUrl: string;
  badges?: Array<string>;
  isMegaBundle: boolean;
  bundle?: string;
}

const ProductImage = ({
  imageUrl,
  badges = ["Popular", "Gift Included"],
  isMegaBundle,
  bundle,
}: ProductImageProps) => {
  return (
    <div
      className={cn(
        "h-[316px] overflow-clip md:h-[316px]",
        "relative pt-[16.15px] pr-2 pb-2 pl-[11.7px]",
        "flex flex-col justify-between",
      )}
    >
      <img
        className={cn(
          "absolute top-0 left-0 size-full object-cover",
          "h-[316px] w-full rounded-2xl md:w-[316px] lg:w-full",
        )}
        src={imageUrl}
        alt="Game 10 Mega Bundle"
      />

      <div className="relative flex flex-col space-y-3 uppercase">
        <Badge
          title={badges[0]}
          className={badges[0] ? "bg-[#FDA32E]" : "bg-transparent"}
        />
        <Badge
          title={badges[1]}
          className={badges[1] ? "bg-[#59C254]" : "bg-transparent"}
        />
      </div>

      {isMegaBundle && bundle && (
        <Game10PaperCard>
          <div className="relative flex flex-col justify-center px-1.5 pt-[25px]">
            <div className="flex items-center text-white">
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
            </div>

            <h3
              className={cn(
                "font-bebas-neue text-white",
                "text-2xl leading-[28.8px]",
              )}
            >
              {bundle}-Games
            </h3>

            <p className="font-bebas-neue text-[12.5px] leading-3.5 text-white">
              Mega Bundle
            </p>
          </div>
        </Game10PaperCard>
      )}
    </div>
  );
};

export { ProductImage };
