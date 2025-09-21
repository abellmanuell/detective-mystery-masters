import { cn } from "../../lib/utils";
import { AiFillStar } from "react-icons/ai";
import { Heading3 } from "../headings/Heading3";

export type ProductDetailsProps = {
  index: number;
  name: string;
  review: string;
  currentPrice: number;
  marketPrice: number;
  promo: string;
};

const ProductDetails = ({
  index,
  name,
  review,
  currentPrice,
  marketPrice,
  promo,
}: ProductDetailsProps) => (
  <div className="flex grow flex-col p-4">
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
      <div className="text-pumpkin-500 flex space-x-[3.24px]">
        <AiFillStar size={16.21} />
        <AiFillStar size={16.21} />
        <AiFillStar size={16.21} />
        <AiFillStar size={16.21} />
        <AiFillStar size={16.21} />
      </div>
      <p className="text-left text-sm font-semibold text-black">
        {review} reviews
      </p>
    </div>

    <div className="flex grow items-center">
      <Heading3
        className={cn(
          "w-full border-b border-[#F3D4B5] py-3 text-left text-2xl lg:py-4",
          index !== 0 ? "text-xl lg:text-2xl" : "text-2xl",
        )}
      >
        {name}
      </Heading3>
    </div>

    <div className="flex flex-col gap-2 pt-3 lg:flex-row lg:justify-between lg:pt-4">
      <div className="font-bebas-neue flex space-x-2">
        <p className="text-red-orange-500 text-2xl">€{currentPrice}</p>
        <p>
          <del className="text-[#868686]">€{marketPrice}</del>
        </p>
      </div>
      <div
        className={cn(
          "bg-red-orange-500",
          "flex items-center justify-center rounded-full",
          "self-start px-2 py-0.5 text-white",
        )}
      >
        <p className="text-xs lg:text-base">{promo}</p>
      </div>
    </div>
  </div>
);

export { ProductDetails };
