import { AiFillStar } from "react-icons/ai";
import { cn } from "../../../lib/utils";
import { Badge } from "./Badge";
import { Game10PaperCard } from "./Game10PaperCard";

interface ProductImageProps {
  imageUrl: string;
  isMegaBundle: boolean;
  bundle?: string;
  badges?: Array<string>;
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
        "xxxs:h-[167px] h-[316px] overflow-clip",
        "relative pt-[16.15px] pr-2 pb-2 pl-[11.7px]",
        "flex flex-col justify-between",
      )}
    >
      <img
        src={imageUrl}
        alt="Game 10 Mega Bundle"
        className={cn(
          "absolute top-0 left-0 size-full object-cover",
          "xxs:h-[167px] h-[316px] w-full rounded-2xl",
        )}
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
            <div className="flex items-center pb-[2.92px] text-white">
              <AiFillStar size={9.25} />
              <AiFillStar size={9.25} />
              <AiFillStar size={9.25} />
              <AiFillStar size={9.25} />
              <AiFillStar size={9.25} />
            </div>

            <h3
              className={cn(
                "font-bebas-neue text-[12.98px]",
                "leading-[15.58px] text-white",
              )}
            >
              {bundle}-Games
            </h3>

            <p className="font-bebas-neue text-[10.14px] leading-[12.19px] text-white">
              Mega Bundle
            </p>
          </div>
        </Game10PaperCard>
      )}
    </div>
  );
};

export { ProductImage };
