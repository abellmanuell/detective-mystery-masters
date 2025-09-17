import { AiFillStar } from "react-icons/ai";
import { cn } from "../../../lib/utils";
import { Badge } from "./Badge";
import { Game10PaperCard } from "./Game10PaperCard";

interface ProductImageProps {
  imageUrl: string;
  badges?: Array<string>;
}

const ProductImage = ({
  imageUrl,
  badges = ["Popular", "Gift Included"],
}: ProductImageProps) => {
  return (
    <div
      className={cn(
        "h-[316px] max-w-[358px] overflow-clip",
        "md:h-[316px]",
        "relative",
      )}
    >
      <div className="absolute mt-[16.16px] ml-[13.26px] flex flex-col space-y-3 uppercase">
        <Badge title={badges[0]} className="bg-[#FDA32E]" />
        <Badge title={badges[1]} className="bg-[#59C254]" />
      </div>

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
              "font-bebas-neue text-lg uppercase md:pt-[10px] md:pl-[10px]",
              "md:text-[32px] md:leading-[38.4px]",
              "relative w-4/5",
            )}
          >
            10-Games
          </h3>

          <p className="font-bebas-neue text-[12.5px]">Mega Bundle</p>
        </div>
      </Game10PaperCard>

      <img
        src={imageUrl}
        alt="Game 10 Mega Bundle"
        className={cn("rounded-2xl object-cover", "h-[316px] md:h-[316px]")}
      />
    </div>
  );
};

export { ProductImage };
