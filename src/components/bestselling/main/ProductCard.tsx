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
}

const ProductCard = ({
  imageUrl,
  name,
  review,
  currentPrice,
  marketPrice,
  promo,
  badges,
}: ProductCardProps) => {
  return (
    <div className="bg-tequila-500 w-[358px] rounded-lg">
      <ProductImage imageUrl={imageUrl} badges={badges} />

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
