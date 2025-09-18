import { cn } from "../../../lib/utils";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  review: string;
  currentPrice: number;
  marketPrice: number;
  promo: string;
  badges?: Array<string>;
  bundle?: string;
  isMegaBundle?: boolean;
  className?: string;
}

const SubProductCard = ({
  imageUrl,
  name,
  review,
  currentPrice,
  marketPrice,
  promo,
  badges,
  isMegaBundle = false,
  bundle,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn("bg-tequila-500 rounded-lg rounded-t-2xl", className)}>
      <ProductImage
        imageUrl={imageUrl}
        badges={badges}
        isMegaBundle={isMegaBundle}
        bundle={bundle}
      />

      <ProductDetails
        name={name}
        review={review}
        currentPrice={currentPrice}
        marketPrice={marketPrice}
        promo={promo}
      />
    </div>
  );
};

export { SubProductCard };
