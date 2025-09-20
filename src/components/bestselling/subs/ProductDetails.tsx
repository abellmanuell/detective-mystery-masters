import { AiFillStar } from "react-icons/ai";
import { Heading3 } from "../../headings/Heading3";
import { cn } from "../../../lib/utils";

const ProductDetails = ({
  name,
  review,
  currentPrice,
  marketPrice,
  promo,
}: {
  name: string;
  review: string;
  currentPrice: number;
  marketPrice: number;
  promo: string;
}) => (
  <div className="p-4">
    <div className="flex flex-wrap items-center space-y-2">
      <div className="text-pumpkin-500 flex items-center justify-center">
        <AiFillStar size={16} />
        <AiFillStar size={16} />
        <AiFillStar size={16} />
        <AiFillStar size={16} />
        <AiFillStar size={16} />
      </div>
      <p className="text-sm font-semibold text-black lg:ml-1">
        {review} reviews
      </p>
    </div>

    <Heading3 className="border-b-1 border-[#F3D4B5] py-2 text-[20px]">
      {name}
    </Heading3>

    <div className="flex flex-wrap justify-between gap-2">
      <div className="font-bebas-neue flex space-x-2">
        <p className="text-red-orange-500 text-xl">€{currentPrice}</p>
        <p className="text-sm">
          <del className="text-[#868686]">€{marketPrice}</del>
        </p>
      </div>
      <div
        className={cn(
          "bg-red-orange-500",
          "flex items-center justify-center rounded-full",
          "px-2 py-0.5 text-xs font-bold text-white",
        )}
      >
        <p>{promo}</p>
      </div>
    </div>
  </div>
);

export { ProductDetails };
