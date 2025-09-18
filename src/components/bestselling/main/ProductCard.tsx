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
  tags?: Array<string>;
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
  tags,
  className,
  isMegaBundle = false,
  bundle,
}: ProductCardProps) => {
  return (
    <div className={cn("bg-tequila-500 rounded-lg rounded-t-2xl", className)}>
      <ProductImage
        imageUrl={imageUrl}
        badges={tags}
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
