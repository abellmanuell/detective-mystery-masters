import { cn } from "../../../lib/utils";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  review: string;
  currentPrice: string;
  marketPrice: string;
  promo: string;
  badges?: Array<string>;
  className?: string;
  isMegaBundle?: boolean;
  bundle?: string;
}

const ProductCard = ({
  imageUrl,
  name,
  review,
  currentPrice,
  marketPrice,
  promo,
  badges,
  className,
  isMegaBundle = false,
  bundle,
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

export { ProductCard };
