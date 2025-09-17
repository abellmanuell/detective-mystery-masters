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
  isMegaBundle?: boolean;
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
}: ProductCardProps) => {
  return (
    <div className="bg-tequila-500 rounded-lg">
      <ProductImage
        imageUrl={imageUrl}
        badges={badges}
        isMegaBundle={isMegaBundle}
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
