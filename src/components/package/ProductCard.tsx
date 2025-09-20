import { cn } from "../../lib/utils";
import { ProductDetails, type ProductDetailsProps } from "./ProductDetails";
import { ProductImage, type ProductImageProps } from "./ProductImage";

interface ProductCardProps {
  href: string;
  className?: string;
  productImage: ProductImageProps;
  productDetails: ProductDetailsProps;
}

const ProductCard = ({
  href,
  productImage,
  productDetails,
  className,
}: ProductCardProps) => {
  return (
    <a
      href={href}
      className={cn(
        "bg-tequila-500 flex h-full flex-col",
        "overflow-hidden rounded-lg rounded-t-2xl",
        className,
      )}
    >
      <div className="shrink-0">
        <ProductImage {...productImage} />
      </div>

      <ProductDetails {...productDetails} />
    </a>
  );
};

export { ProductCard };
