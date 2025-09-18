import { AiFillStar } from "react-icons/ai";
import { cn } from "../../../lib/utils";
import { Badge } from "./Badge";
import { Game10PaperCard } from "./Game10PaperCard";

interface ProductImageProps {
  imageUrl: string;
  badges?: Array<string>;
  isMegaBundle: boolean;
}

const ProductImage = ({
  imageUrl,
  badges = ["Popular", "Gift Included"],
  isMegaBundle,
}: ProductImageProps) => {
  return (
    <div className={cn("h-[316px] overflow-clip", "md:h-[316px]", "relative")}>
      <div className="absolute mt-[16.16px] ml-[13.26px] flex flex-col space-y-3 uppercase">
        <Badge
          title={badges[0]}
          className={badges[0] ? "bg-[#FDA32E]" : "bg-transparent"}
        />
        <Badge
          title={badges[1]}
          className={badges[1] ? "bg-[#59C254]" : "bg-transparent"}
        />
      </div>

      {isMegaBundle && (
        <Game10PaperCard>
          <div className="pt-[25px] pl-[9.7px]">
            <div className="flex items-center text-white">
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
              <AiFillStar size={10} />
            </div>

            <h3
              className={cn(
                "font-bebas-neue text-lg uppercase md:pt-[2px] md:pl-[0.56px]",
                "md:text-[17px]",
                "relative w-4/5",
              )}
            >
              10-Games
            </h3>

            <p className="font-bebas-neue text-[12.5px]">Mega Bundle</p>
          </div>
        </Game10PaperCard>
      )}

      <img
        src={imageUrl}
        alt="Game 10 Mega Bundle"
        className={cn(
          "rounded-2xl object-cover",
          "h-[316px] w-full md:w-[316px]",
        )}
      />
    </div>
  );
};

export { ProductImage };
