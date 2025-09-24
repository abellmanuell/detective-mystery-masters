import { cn } from "../../lib/utils";
import { PackageDetails, type PackageDetailsProps } from "./PackageDetails";
import { PackageImage, type PackageImageProps } from "./PackageImage";

interface PackageCardProps {
  index?: number;
  href: string;
  className?: string;
  packageImage: PackageImageProps;
  packageDetails: PackageDetailsProps;
}

const PackageCard = ({
  index,
  href,
  packageImage,
  packageDetails,
  className,
}: PackageCardProps) => {
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
        <PackageImage {...packageImage} index={index} />
      </div>

      <PackageDetails {...packageDetails} index={index} />
    </a>
  );
};

export { PackageCard };
